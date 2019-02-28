(function(angular) {
  'use strict';
  var MENU_COUNTER = 0;
  function directive($window, $timeout, trinketConfig) {
    var link = function(scope, element, attrs) {
      scope.id    = "new-trinket-menu-" + MENU_COUNTER++;
      scope.items = trinketConfig.get('trinketTypes');
      scope.create = function(lang) {
        $window.location = trinketConfig.getUrl('/library/trinkets/create?lang=' + lang);
      };

      // Whenever the dropdown opens, reposition it based on the dropdown button.
      // This is a hack since foundation doesn't seem to work with fixed position
      // triggers.
      element.on('opened.fndtn.dropdown', function() {
        var h = element.find('.button.dropdown').outerHeight();
        element.find('#' + scope.id).css('top', h + 'px');
      });

      $timeout(function() {
        $(document).foundation();
      }, 0);
    };

    return {
      restrict      : 'E'
      , scope       : true
      , templateUrl : '/cache-prefix-7f6b62d2/partials/directives/trinket.html'
      , link        : link
    }
  }

  angular
    .module('trinket.lang', ['trinket.config'])
    .directive('newTrinket', ['$window', '$timeout', 'trinketConfig', directive]);
})(window.angular);