myApp.controller('myAppCtrl', function ($scope, newsDataService) {
    
    newsDataService.newsData().then( function (data) {
        $scope.newsData = data;
        console.log(data);
    })

});