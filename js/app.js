var myApp = angular.module('myApp', ['ngResource']);

myApp.config(function($routeProvider, $locationProvider)
{
    $routeProvider.when('/local', {
        templateUrl: 'templates/local.html',
        controller: 'localNewsCtrl'
    }).when('/headline', {
        templateUrl: 'templates/main-news-page.html',
        controller: 'myAppCtrl'
    }).otherwise({
        templateUrl : 'templates/main-news-page.html',
        controller: 'myAppCtrl'
    });

    $locationProvider.html5Mode(true);
});
















