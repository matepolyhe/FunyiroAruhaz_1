var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "keresesView.html"
        })
        .when("/", {
            templateUrl : "KeresesView/keresesView.html"
        })
        .when("/reszletekView", {
            templateUrl : "ReszletekView/reszletekView.html"
        });
});
app.controller('keresesViewController', function($scope, $http) {
    $scope.alertFunction = function () {
        alert('clicked');
    }
    $http.get('Database/FunyiroAdatbazis.json')
        .then(function (res) {
            $scope.funyirok = res.data;
        });
    $scope.talalatszamok = ["10", "20", "30"];
    $scope.IsVisible = true;
    $scope.funyiroKivalaszt = function () {
        
    }
});
app.controller('reszletekViewController', function($scope) {

});