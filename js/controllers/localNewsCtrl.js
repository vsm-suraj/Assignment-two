myApp.controller('localNewsCtrl', function ($scope, localNewsService) {
    localNewsService.newsData().then( function (data) {
        $scope.localNewsData = data;
        console.log(data);
    });
});