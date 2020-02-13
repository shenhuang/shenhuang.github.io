(function(window) {
  var exports = {};
  var runtime = {};

  var storage;
  try {
    storage = localStorage;
  } catch(e) {
  }

  var bid;
  if (storage && storage.getItem) {
    bid = storage.getItem('__browser_id__');
  }
  else {
    bid = document.cookie.match(/browser_id=(id\d+\.\d+);/);
    if (bid) {
      bid = bid[1];
    }
  }

  if (!bid) {
    bid = "id" + Date.now() + Math.random();
    if (storage && storage.setItem) {
      storage.setItem('__browser_id__', bid);
    }
  }

  document.cookie = "browser_id=" + bid;

  window.TrinketIO = {
    export : function(name, module) {
      var path = name.split('.'),
          last = path.pop(),
          loc  = exports;

      for(var i = 0; i < path.length; i++) {
        if (loc[path[i]] == null) {
          loc[path[i]] = {};
        }
        loc = loc[path[i]];
      }

      if (loc[last]) {
        throw new Error('Module ' + name + ' has already been defined!');
      }

      loc[last] = module;

      return module;
    },
    import : function(name) {
      var path   = name.split('.'),
          module = exports;

      for(var i = 0; i < path.length; i++) {
        module = module[path[i]];
        if (module == null) {
          throw new Error('Module ' + name + ' could not be found!');
        }
      }

      return module;
    },
    runtime : function(key, val) {
      if (arguments.length > 1) {
        runtime[key] = val;
      }

      return runtime[key];
    },
    clearRuntime : function() {
      runtime = {};
    }
  };
})(window);
