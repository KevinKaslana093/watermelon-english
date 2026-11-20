(function () {
  'use strict';
  var raw = window.localStorage, prefix = 'watermelon:save:v1:';
  function keys() {
    var result = [];
    for (var i = 0; i < raw.length; i++) {
      var key = raw.key(i);
      if (key !== null && key.indexOf(prefix) === 0) result.push(key.slice(prefix.length));
    }
    return result;
  }
  var api = {
    getItem: function (key) { return raw.getItem(prefix + String(key)); },
    setItem: function (key, value) { raw.setItem(prefix + String(key), String(value)); },
    removeItem: function (key) { raw.removeItem(prefix + String(key)); },
    clear: function () { keys().forEach(function (key) { raw.removeItem(prefix + key); }); },
    key: function (index) { return keys()[Number(index)] || null; }
  };
  Object.defineProperty(api, 'length', {get: function () { return keys().length; }});
  var scoped = new Proxy(api, {
    get: function (target, key) {
      if (typeof key === 'symbol' || key in target) return target[key];
      return target.getItem(key);
    },
    set: function (target, key, value) { target.setItem(key, value); return true; },
    deleteProperty: function (target, key) { target.removeItem(key); return true; }
  });
  Object.defineProperty(window, 'localStorage', {configurable: true, get: function () { return scoped; }});
})();
