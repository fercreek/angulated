app.controller("appController", appController);

appController.$inject = ["$scope"];

function appController($scope){
    // $scope.demand = "";

    $scope.changeValue = function(){
        var provider = $scope.provider;
        var demand = $scope.demand = $scope.demandFn();
        var sales = $scope.sales = $scope.salesFn();
        // var x = 1;
        // $scope.demand = x + 1 ;

        // $scope.demand = (-100 * Math.log(1-Math.random()));
    };

    $scope.demandFn = function(){
        return (-100 * Math.log(1-Math.random()));
    };

    $scope.salesFn = function(){
        if ($scope.demand > $scope.provider){
            return $scope.demand;
        } else {
            return $scope.provider;
        }
    };

    $scope.sales = function(){

    };

}
