(function(TrinketIO) {
  var roles;

  function decryptRoles() {
    if (typeof roles === 'undefined' && $('#roles').length && $('#roles').val().length) {
      try {
        var v = $('#roles').val().split('+');
        var t = v[0];
        var e = v.slice(1).join('+');
        var d = CryptoJS.AES.decrypt(e, t);
        roles = JSON.parse(CryptoJS.enc.Utf8.stringify(d));
      } catch(e) {
        console.log('roles decrypt error:', e);
      }
    }
  }

  function hasPermission(name, context, options) {
    decryptRoles();

    options = _.extend(options || {});

    if (!context) {
      context = 'site';
    }
    if (options.id) {
      context = context + ':' + options.id;
    }

    var matching = _.find(roles, function(role) {
      return role.context === context;
    });

    if (matching && matching.permissions.indexOf(name) >= 0) {
      if (matching.thru && matching.thru[name]) {
        if (Array.isArray(matching.thru[name])) {
          return _.some(matching.thru[name], function(thru) {
            // if thru is an object, test values
            if (thru instanceof Object) {
              return _.some(_.values(thru), function(date) {
                return moment().isBefore(date);
              });
            }
            else {
              // assumed to be a date
              return moment().isBefore(thru);
            }
          });
        }
        else {
          return moment().isBefore(matching.thru[name]);
        }
      }
      else {
        return true;
      }
    }

    return false;
  }

  function hasRole(role, context, options) {
    decryptRoles();

    options = _.extend(options || {});

    if (!context) {
      context = 'site';
    }
    if (options.id) {
      context = context + ':' + options.id;
    }

    var matching = _.find(roles, function(role) {
      return role.context === context;
    });

    if (matching && matching.roles.indexOf(role) >= 0) {
      if (matching.thru && matching.thru[role]) {
        return moment().isBefore(matching.thru[role]);
      }
      else {
        return true;
      }
    }

    return false;
  }

  // initially intended for checking if a user has some role in a course
  function hasAnyRole(context, options) {
    decryptRoles();

    options = _.extend(options || {});

    if (!context) {
      context = 'site';
    }
    if (options.id) {
      context = context + ':' + options.id;
    }

    var matching = _.find(roles, function(role) {
      return role.context === context;
    });

    return matching && matching.roles.length;
  }

  function inGroup() {
    var inGroup = false
      , self    = this;

    decryptRoles();

    if (roles) {
      roles.forEach(function(role) {
        if (/^group/.test(role.context) && self.hasRole("group-member", role.context)) {
          inGroup = true;
        }
      });
    }

    return inGroup;
  }

  function getByContext(context) {
    var rolesByContext = {};

    decryptRoles();

    if (roles) {
      rolesByContext = _.find(roles, function(role) {
        return role.context === context;
      });
    }

    return rolesByContext;
  }

  TrinketIO.export('trinket.roles', {
      hasPermission : hasPermission
    , hasRole       : hasRole
    , inGroup       : inGroup
    , getByContext  : getByContext
    , hasAnyRole    : hasAnyRole
  });
})(window.TrinketIO);
