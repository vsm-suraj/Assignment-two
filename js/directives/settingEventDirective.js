myApp.directive('clicked', function () {
    return function (scope,element) {
        element.bind('click', function () {
            $('.hover-div').toggle();
        })
    }
});

