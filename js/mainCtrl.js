myApp.controller("mainCtrl", function ($scope,newsDataService) {
    $scope.data = '';
    $scope.fetchData = function () {
        newsDataService.newsData().then( function (data) {
            $scope.newsData = data;
            console.log(data);
        });     
    };

});