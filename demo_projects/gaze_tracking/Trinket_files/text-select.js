(function (window, TrinketIO) {
  "use strict";

  function byId( containerId ) {
    makeSelection(document.getElementById(containerId));
  }

  function byClass( className ) {
    $('.' + className).click(function(event) {
      makeSelection($(event.target)[0]);
    });
  }

  // http://stackoverflow.com/questions/1173194/select-all-div-text-with-single-mouse-click
  function makeSelection(element) {
    if ( document.selection ) {
      var range = document.body.createTextRange();
      range.moveToElementText( element );
      range.select();
    }
    else if ( window.getSelection ) {
      var range = document.createRange();
      range.selectNodeContents( element );
      window.getSelection().removeAllRanges();
      window.getSelection().addRange( range );
    }
  }

  TrinketIO.export('utils.selectText', {
      byId    : byId
    , byClass : byClass
  });
})(window, window.TrinketIO);
