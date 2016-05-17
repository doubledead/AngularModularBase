angular.module('form.controllers', [

]).
controller('FormCtrl', ['$scope', function ($scope) {
    $scope.submitForm = function () {
        console.log("This does nothing right now.");
    };
}]);