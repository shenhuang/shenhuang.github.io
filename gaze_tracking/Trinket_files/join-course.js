(function(angular) {
  'use strict';

  angular.module('trinket.joinCourse', []).directive('joinCourse', ['$modal', function($modal) {
    function link(scope, element) {
      scope.courses     = scope.courses     || [];
      scope.coursesById = scope.coursesById || {};
      scope.buttonClass = scope.buttonClass || "";

      scope.openJoinCourse = function() {
        var $modalInstance = $modal.open({
          templateUrl : "joinCourse.html",
          controller  : ['$scope', '$http', '$modalInstance', 'notifyjs', 'Restangular', function($scope, $http, $modalInstance, notifyjs, Restangular) {
            $scope.accessCode         = "";
            $scope.required           = true;
            $scope.checkingAccessCode = false;

            $scope.checkAccessCode = function() {
              var vm = this
                , courseUrl, message;

              $scope.checkingAccessCode = true;

              $http.post("/api/courses/join", { accessCode : vm.accessCode })
                .then(function(result) {
                  result = result.data
                  if (result.success) {
                    if (!scope.coursesById[ result.course.id ]) {
                      scope.courses.push( Restangular.restangularizeElement(null, result.course, 'courses') );
                      scope.coursesById[ result.course.id ] = true;

                      courseUrl = "/" + result.course.ownerSlug + "/courses/" + result.course.slug;
                      message   = "You've joined the course \"" + result.course.name + "\"! \
                        Go to the <a class=\"text-link\" href=\"" + courseUrl + "\"><strong>course page</strong></a> now.";

                      notifyjs(angular.element( document.querySelector('#join-course-messages') ),
                        message, { className : "success", autoHideDelay : 10000 });

                      vm.accessCode = "";
                    }
                    else {
                      notifyjs(angular.element( document.querySelector('#join-course-messages') ),
                        "Looks like you're already in that course!", "success");
                    }
                  }
                  else if (result.alreadyListed) {
                    notifyjs(angular.element( document.querySelector('#join-course-messages') ),
                      "Looks like you're already in that course!", "success");
                  }
                  else if (result.flash && result.flash.validation) {
                    notifyjs(angular.element( document.querySelector('#join-course-messages') ),
                      "No course was found with that code. Please check your code and try again.", "alert");
                  }
                  else if (result.message) {
                    notifyjs(angular.element( document.querySelector('#join-course-messages') ), result.message, "alert");
                  }
                  else {
                    notifyjs(angular.element( document.querySelector('#join-course-messages') ),
                      "We had a problem verifying the code you entered. Please try again and contact us if the problem continues.", "alert");
                  }

                  $scope.checkingAccessCode = false;
                }, function(err) {
                  notifyjs(angular.element( document.querySelector('#join-course-messages') ),
                    "We had a problem verifying the code you entered. Please try again and contact us if the problem continues.", "alert");

                  $scope.checkingAccessCode = false;
                });
            }

            $scope.close = function() {
              $modalInstance.close();
            }
          }]
        });
      }
    }

    return {
        restrict    : 'E'
      , link        : link
      , templateUrl : '/cache-prefix-7f6b62d2/partials/directives/join-course.html'
      , scope       : {
            courses     : '=?'
          , coursesById : '=?'
          , buttonClass : '@'
        }
    };
  }]);
})(window.angular);
