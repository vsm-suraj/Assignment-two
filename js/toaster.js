$(".li").click(function () {
    var msg = $(this).text();
    toastr.info(msg);
})