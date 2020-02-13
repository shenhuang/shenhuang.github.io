/**
 * ngTextkSelect
 *
 * inspired by ng-click-select and 
 * http://stackoverflow.com/questions/1173194/select-all-div-text-with-single-mouse-click
 */
(function(angular, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular'], function(angular) {
      return factory(angular);
    });
  } else {
    return factory(angular);
  }
}(window.angular || null, function(angular) {

  var ngTextSelect = angular.module('ngTextSelect', []);

  ngTextSelect.directive('ngTextSelect', function () {
    return {
      restrict: 'AC',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          if ( document.selection ) {
            var range = document.body.createTextRange();
            range.moveToElementText( element[0] );
            range.select();
          }
          else if ( window.getSelection ) {
            var range = document.createRange();
            range.selectNodeContents( element[0] );
            window.getSelection().removeAllRanges();
            window.getSelection().addRange( range );
          }
        });
      }
    }
  });

  return ngTextSelect;

}));
