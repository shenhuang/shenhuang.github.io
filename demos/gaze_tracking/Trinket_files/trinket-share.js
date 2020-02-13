(function(window, TrinketIO) {
  var shareQueryParams;

  resetParams();

  function init() {
    var checkboxMap = {
      autorunEmbed           : {
        paramName  : "start",
        paramValue : "result"
      },
      hideGeneratedCodeEmbed : {
        paramName  : "hideGeneratedCode",
        paramValue : "true"
      },
      showInstructionsEmbed  : {
        paramName  : "showInstructions",
        paramValue : "true"
      },
      showInstructionsShare  : {
        paramName  : "showInstructions",
        paramValue : "true"
      }
    };

    $('input:checkbox.checkboxToggle').change(function(event) {
      var target    = $(event.target);
      var shareType = $(target).val();
      var name      = event.target.name;
      var paramName = checkboxMap[name].paramName;
      var elem      = $('#' + shareType);
      var elemText  = elem.text();
      var shareParams = [];
      var paramStr    = '';
      var shortCode, queryRe, closeQuote, newText;

      if (shareType === 'shareUrl') {
        shortCode  = $('#displayOptionLink').data('trinket-shortCode');
        queryRe    = new RegExp(shortCode + '.*');
        closeQuote = '';
      }
      else {
        shortCode  = $('#displayOptionEmbed').data('trinket-shortCode');
        queryRe    = new RegExp(shortCode + '[^"]*"');
        closeQuote = '"';
      }

      if ($(target).is(':checked')) {
        shareQueryParams[paramName] = checkboxMap[name].paramValue;
      }    
      else {
        shareQueryParams[paramName] = "";
      }

      shareQueryParams.runMode = $(target).prev().data('trinket-runMode') || "";

      for (var key in shareQueryParams) {
        if (shareQueryParams[key]) {
          shareParams.push(key + '=' + shareQueryParams[key]);
        }
      }

      if (shareParams.length) {
        paramStr = '?' + shareParams.join('&');
      }

      newText = elemText.replace(queryRe, shortCode + paramStr + closeQuote);
      elem.text(newText);
    });

    $(':input.runOptions').change(function(event) {
      var target    = $(event.target);
      var shareType = $(target).data('type');
      var shareVal  = $(target).val();
      var elem      = $('#' + shareType);
      var elemText  = elem.text();
      var shortCode = $(target).data('trinket-shortCode');
      var shareParams = [];
      var paramStr    = '';
      var queryRe, closeQuote, newText;

      if (shareType === 'shareUrl') {
        queryRe = new RegExp(shortCode + '.*');
        closeQuote = '';
      }
      else {
        queryRe = new RegExp(shortCode + '[^"]*"');
        closeQuote = '"';
      }

      shareQueryParams.runOption = shareVal;
      shareQueryParams.runMode = $(target).data('trinket-runMode') || "";

      for (var key in shareQueryParams) {
        if (shareQueryParams[key]) {
          shareParams.push(key + '=' + shareQueryParams[key]);
        }
      }
      if (shareParams.length) {
        paramStr = '?' + shareParams.join('&');
      }

      newText = elemText.replace(queryRe, shortCode + paramStr + closeQuote);
      elem.text(newText);
      if (shareType === "shareUrl" && window.addthis && window.addthis.toolbox) {
        window.addthis.toolbox('#addthis', {}, {url: newText});
      }
    });

    $(':input.displayOptions').change(function(event) {
      var target    = $(event.target);
      var shareType = $(target).data('type');
      var shareVal  = $(target).val();
      var elem      = $('#' + shareType);
      var elemText  = elem.text();
      var shortCode = $(target).data('trinket-shortCode');
      var shareParams = [];
      var paramStr    = '';
      var queryRe, closeQuote, newText;

      if (shareType === 'shareUrl') {
        queryRe = new RegExp(shortCode + '.*');
        closeQuote = '';
      }
      else {
        queryRe = new RegExp(shortCode + '[^"]*"');
        closeQuote = '"';
      }

      shareQueryParams.outputOnly = "";
      shareQueryParams.toggleCode = "";

      if (shareVal && typeof shareQueryParams[shareVal] !== 'undefined') {
        shareQueryParams[shareVal]  = "true";
      }

      shareQueryParams.runMode = $(target).data('trinket-runMode') || "";

      for (var key in shareQueryParams) {
        if (shareQueryParams[key]) {
          shareParams.push(key + '=' + shareQueryParams[key]);
        }
      }
      if (shareParams.length) {
        paramStr = '?' + shareParams.join('&');
      }

      newText = elemText.replace(queryRe, shortCode + paramStr + closeQuote);
      elem.text(newText);
      if (shareType === "shareUrl" && window.addthis && window.addthis.toolbox) {
        window.addthis.toolbox('#addthis', {}, {url: newText});
      }
    });
  }

  function resetParams() {
    shareQueryParams = {
      outputOnly        : "",
      toggleCode        : "",
      runOption         : "",
      start             : "",
      runMode           : "",
      hideGeneratedCode : "",
      showInstructions  : ""
    };
  }

  TrinketIO.export('trinket.share', {
      init        : init
    , resetParams : resetParams
  });
})(window, window.TrinketIO);
