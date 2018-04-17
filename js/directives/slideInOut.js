myApp.directive('toglerLeftRight', function () {
    return function(scope, element) {
        var flag = false
        element.bind('click', function () {
            if( flag == false ){
                $(".left-side-bar").animate({marginLeft:'-200px'});
                flag = true;
            }
            else{
                $(".left-side-bar").animate({marginLeft:'10px'});
                flag = false;
            }
        });
    };
});
