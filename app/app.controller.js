/**
 * Created by Abbes on 17/08/2016.
 */
angular
    .module("eduKup")
    .controller("AppController", AppController);


AppController.$inject = ['$scope', 'BASE_URL'];
function AppController($scope, BASE_URL) {
    $scope.BASE_URL = BASE_URL;

}