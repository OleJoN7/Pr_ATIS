$(document).ready(function () {
    var popupButton = $('.btn-host');
    popupButton.click(function () {
        $('.popup-wrap').fadeToggle(500);
    });
    $('.popup-wrap').on('click', function () {
            $(this).hide(500);
        });
    $('.popup').on('click',function(e){
        e.stopPropagation();
    });

    $('.popup .close-btn').on('click', function () {
        $('.popup-wrap').slideToggle(500);
    });

    var flag = true;
    $('.hide-show-btn').on('click', function () {
        if (flag) {
            flag = false;
            $.when($('.main-nav , .btn-host').fadeToggle(500)).then(function () {
                flag = true;
            });
        }
    });
});


