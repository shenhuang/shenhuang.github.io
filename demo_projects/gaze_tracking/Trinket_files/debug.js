(function() {
  function checkUserSession(requested, whoami) {
    var cache    = window.TrinketIO.import('utils.cache')
      , loadInfo = cache.get('user-log')
      , sesh     = document.cookie.match(/session=([^;]+);/);

    requested = requested || $('#requestedLogin').val();
    whoami    = whoami    || $('#whoami').val();

    if (!loadInfo) {
      loadInfo = {log:[], user:whoami};
    }

    loadInfo.log.push({
      time        : Date.now()
      , user      : whoami         || ""
      , requested : requested || ""
      , path      : window.location.href
      , referrer  : document.referrer
      , userAgent : navigator.userAgent
      , sesh      : sesh ? sesh[1] : ""
    });

    if ((requested && requested !== whoami)
        || (!requested && whoami && loadInfo.user !== whoami)) {
      //$.post('/api/ohnoes', loadInfo);
    }

    loadInfo.user = whoami;
    // drop oldest entries if more than 10 exist
    if (loadInfo.log.length > 10) {
      loadInfo.log = loadInfo.log.slice(loadInfo.log.length - 10);
    }

    cache.set('user-log', loadInfo);
  };

  window.TrinketIO.export('debug.sessions', {
    onLogin : function(requested, user) {
      if (requested === user.username || requested === user.email) {
        requested = user.username;
      }

      checkUserSession(requested, user.username);
    }
  });

  $(function() {checkUserSession();});
})();
