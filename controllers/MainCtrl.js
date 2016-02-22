app.controller('MainCtrl', ['$scope', 'dataService', function($scope, dataService) {

    $scope.letsGetSomeData = function() {
        $scope.heroes = dataService.getMeDatData();
    };

    $scope.letsGetSomeData();

}]); //end MainCtrl
