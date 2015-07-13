var app = angular.module('egghead', []);

app.controller('AppCtrl', ['$window','$scope', '$http', function($window, $scope, $http) {

    $scope.va = 'baa';

        $http.get('http://localhost:3000/People').success(
            function(data, status, header, config) {
                $scope.people = data
            }
        );

}]);