'use strict';

angular.module('core').controller('FooterController',['$scope', 'Authentication', 'Menus',
  function($scope, Authentication, Menus) {
    $scope.authentication = Authentication;
    $scope.isCollapsed = false;
    $scope.menu = Menus.getMenu('bottombar');

    $scope.toggleCollapsibleMenu = function() {
      $scope.isCollapsed = !$scope.isCollapsed;
    };
  }
]);
