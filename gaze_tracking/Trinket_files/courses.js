(function(angular) {
  'use strict';

  var myCourses = angular.module('trinket.myCourses', [
    'restangular',
    'trinket.roles'
  ]).config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.addResponseInterceptor(function(response) {
      return response.data ? response.data : response;
    });
    RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
  }]);


  myCourses.controller('CoursesController', ['$scope', '$http', '$window', 'trinketRoles', 'Restangular', function($scope, $http, $window, roles, Restangular) {
    var courseRoles, courseUrl;

    $scope.coursesById = {};

    $scope.canCreateCourse = roles.hasPermission("create-public-course") ? true : false;
    $scope.courses;

    $scope.trinketTeacher = roles.hasRole("trinket-teacher");
    $scope.trinketAdmin   = roles.hasRole("admin");

    $scope.accessCode = "";
    $scope.checkingAccessCode = false;

    Restangular.all("courses").getList()
      .then(function(courses) {
        $scope.courses = [];
        angular.forEach(courses, function(course) {
          courseRoles = roles.getByContext("course:" + course.id);
          if (courseRoles && courseRoles.roles.length) {
            course.role = courseRoles.roles[0].substring( courseRoles.roles[0].indexOf('-') + 1 );
          }
          $scope.courses.push(course);
          $scope.coursesById[ course.id ] = true;
        });
      });

    Restangular.all("featured-courses").getList()
      .then(function(courses) {
        $scope.featuredCourses = [];
        angular.forEach(courses, function(featuredCourse) {
          featuredCourse.courseUrl = "/" + featuredCourse.ownerSlug + "/courses/" + featuredCourse.slug;
          if (featuredCourse.page) {
            featuredCourse.courseUrl += "#/" + featuredCourse.page;
          }
          $scope.featuredCourses.push(featuredCourse);
        });
      });

    $scope.gotoCourse = function(course) {
      $window.location.href = "/" + course.ownerSlug + "/courses/" + course.slug;
    }
  }]);

})(window.angular);
