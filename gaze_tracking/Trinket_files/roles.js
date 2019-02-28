(function(angular, trinketIO) {
  angular.module('trinket.roles', [])
    .factory('trinketRoles', function() {
      return trinketIO.import("trinket.roles");
    });
})(window.angular, window.TrinketIO);
