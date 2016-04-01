angular.module('index.controllers', [])
.controller('mainCtrl', ['$scope', function ($scope) {

}])
.controller('IndexCtrl', ['$scope', '$location', '$http', '$anchorScroll', function ($scope, $location, $http, $anchorScroll) {
  $scope.$on('$locationChangeStart', function(scope) {
    $scope.pathUrl = $location.path();console.log($scope.pathUrl);
  });

}]);