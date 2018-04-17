myApp.directive('clicked', function () {
    return function(scope, element) {
        element.bind('click', function () {
            $(".hover_div").toggle(1000);
        });
    };
});