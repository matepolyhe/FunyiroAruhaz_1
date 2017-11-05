var app = angular.module("myApp", ["ngRoute"]);
var funyiro = 'rgfrv';
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
app.controller('keresesViewController', ['$scope', '$http', 'service', function($scope, $http, service) {
    $http.get('Database/FunyiroAdatbazis.json')
        .then(function (res) {
            $scope.funyirok = res.data;
        });
    $scope.talalatszamok = ["10", "20", "30"];
    $scope.IsVisible = true;

    $scope.changeFunyiro = function(funyiro){
      service.setFunyiro(funyiro);
    };
}
]);
app.controller('reszletekViewController', [ '$scope', 'service', function($scope,service) {
    $scope.funyiro = service.getFunyiro();
}
]);

app.service("service", function () {

    var funyiro = {};

    return {
        getFunyiro: function () {
            return funyiro;
        },
        setFunyiro: function (value) {
            funyiro = value;
        }
    };
});
