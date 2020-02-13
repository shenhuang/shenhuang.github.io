// extremely slimmed down version of Dougal Matthews locache
// https://github.com/d0ugal/locache (c) 2012
(function (window, TrinketIO) {
  "use strict";

  var PREFIX        = '__trinket__'
    , EXPIRE_PREFIX = '__trinket_expire__'
    , storage       = (function() {
      try {
        window.localStorage.setItem(PREFIX, '');
        window.localStorage.getItem(PREFIX);
        window.localStorage.removeItem(PREFIX);
        return window.localStorage;
      } catch(e) {
        return undefined;
      }
    })();

  function _now() {
    return +new Date();
  };

  function _key(key) {
    return PREFIX + key;
  };

  function _expireKey(key) {
    return EXPIRE_PREFIX + key;
  };

  function _expired(key, now) {
    var expireValue = parseInt(storage.getItem(_expireKey(key)), 10);

    if (expireValue && expireValue < (now || _now())) {
      return true;
    }

    return false;
  };

  function set(key, value, seconds) {
    if (!storage || !key) {
      return;
    }

    var expireKey = _expireKey(key);

    if (seconds) {
      var ms = seconds * 1000;
      storage.setItem(expireKey, _now() + ms);
    }
    else {
      storage.removeItem(expireKey);
    }

    value = JSON.stringify(value);
    return storage.setItem(_key(key), value);
  };

  function get(key) {
    if (!storage || !key) {
      return null;
    }

    if (_expired(key)) {
      remove(key);
      return null;
    }

    var value = storage.getItem(_key(key));

    if (value) {
      try {
        return JSON.parse(value);
      } catch (err) {
        return null;
      }
    }

    return value;
  };

  function remove(key) {
    if (!storage || !key) {
      return;
    }

    storage.removeItem(_expireKey(key));
    storage.removeItem(_key(key));
  };

  function purge() {
    if (!storage) {
      return;
    }
    
    var length = storage.length
      , prefix = PREFIX
      , now    = _now()
      , key, i;

    for (i = 0; i < length; i++) {
      key = storage.key(i);
      if (key && key.indexOf(prefix) === 0) {
        key = key.substr(prefix.length);
        if (_expired(key, now)) {
          remove(key);
        }
      }
    }
  };

  TrinketIO.export('utils.cache', {
    get      : get
    , set    : set
    , remove : remove
    , purge  : purge
  });
})(window, window.TrinketIO);
