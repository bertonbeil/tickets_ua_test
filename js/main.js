$(document).ready(function () {
    console.info('jQuery included');
    // chache DOM
    var tickThumb = $('#s3').find('.col_3'),
        sw = $('#s3').find('.sw'),
        sl = $('#s3').find('.slider'),
        icons = $('#s5').find('.col_3'),
        comp = $('#s6').find('.col_2'),
        tickThumbFull = $('#s4').find('.tick_thumb');

    $(window).bind("load", function() {
        var width = $(window).outerWidth();
        // console.log(width);
        if (width <= 1024) {
            tickThumb.removeClass('col_3')
                     .addClass('col_2');
            tickThumbFull.removeClass('full');
        } else {
            tickThumb.removeClass('col_2')
                     .addClass('col_3');
            tickThumbFull.addClass('full');
        }
        if (width <= 768) {
            tickThumb.removeClass('col_2')
                     .addClass('swiper-slide');
            icons.removeClass('col_3')
                     .addClass('col_1');
            comp.removeClass('col_2')
                     .addClass('col_1');
            sw.addClass('swiper-wrapper');
            sl.addClass('swiper-container');

            var slider1 = new Swiper ('.slider', {
                slidesPerView: 1,
                pagination: '.swiper-pagination.one',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true
            });
        } else {

        }
    });


    var slider2 = new Swiper ('.swiper-container', {
        slidesPerView: 1,
        pagination: '.swiper-pagination.two',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true
    });

});
