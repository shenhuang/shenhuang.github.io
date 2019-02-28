(function (window, TrinketIO) {
  "use strict";

  var RESERVED_CHARS = {
    '\n': '\\n', '\"': '\\\"',
    '\u2028': '\\u2028', '\u2029': '\\u2029'
  }
  var TEMPLATES = {};

  function compileTemplate(str) {
    return new Function(
      'o',
      'return "' + (
        str
        .replace(/["\n\r\u2028\u2029]/g, function($0) {
          return RESERVED_CHARS[$0];
        })
        .replace(/\{\{([\s\S]+?)\}\}/g, '" + (o["$1"] !== undefined ? o["$1"] : "") + "')
      ) + '";'
    );
  }

  function template(name, data) {
    if (!TEMPLATES[name]) {
      TEMPLATES[name] = compileTemplate($('#' + name).text());
      $('#' + name).remove();
    }

    return TEMPLATES[name](data || {});
  }

  template.compile = compileTemplate;

  TrinketIO.export('utils.template', template);
})(window, window.TrinketIO);