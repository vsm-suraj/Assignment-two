myApp.service("newsDataService", function ($http, $q) {
    this.newsData = function () {
        var url = 'json/news_first.json';

        //promise service
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: url,
        }).success (function (data) {
            deferred.resolve(data);
        }).error (function(data,status) {
            deferred.reject( status );
        });
        return deferred.promise;
    }
});