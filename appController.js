app.controller("appController", appController);

appController.$inject = ["$scope"];

function appController($scope){
    $scope.day = [0,1,2,3,4,5,6,7];

    $scope.changeValue = function(){
        $scope.demand = $scope.demandFn();
        $scope.sales = $scope.salesFn();
        $scope.finalnventory = $scope.finalnventoryFn();
        $scope.costOfOrder = $scope.costOfOrderFn();
        $scope.carryingCost = $scope.carryingCostFn();
        $scope.missingCost = $scope.missingCostFn();
        $scope.totalCost = $scope.totalCostFn();
        $scope.averageCost = $scope.averageCostFn();
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

    $scope.finalnventoryFn = function(){
        var result = $scope.provider - $scope.demand;
        if (result <= 0){
            return 0;
        } else {
            return result;
        }
    };

    $scope.costOfOrderFn = function(){
        if ($scope.day[0] % 7 === 0){
          return 1000;
        } else {
          return 0;
        }
    };

    $scope.carryingCostFn = function(){
        return (1 * ($scope.provider + $scope.finalnventory) / 2 );
    };

    $scope.missingCostFn = function(){
        if ($scope.provider <= $scope.demand){
          return (6 * ($scope.demand - $scope.provider ) );
        } else {
          return 0;
        }
    };

    $scope.totalCostFn = function(){
        return $scope.costOfOrder + $scope.carryingCost + $scope.missingCost;
    };

    $scope.averageCostFn = function(){

    };

}
