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

    $('button.btn').on('click', function (e) {
        e.preventDefault();
        var info = $(this).prev('h3').text();
        var self = this;

        confirm('You really wanna by ticket ' + info + ' ?');
    });

// lang switch
    $('.header_lang-switcher').on('click', function (e) {
        e.preventDefault();
        var width = $(window).outerWidth();

        if (width <= 768 && !$(this).hasClass('open')) {
            $(this).addClass('open');
            $(this).find('a').on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (!$(this).hasClass('active')) {
                    var lgBlock = $('.header_lang-switcher');
                    $(this).addClass('active').siblings().removeClass('active');
                    if($(this).parent().hasClass('open')) {
                        lgBlock.removeClass('open');
                    }
                    var current = $(this).text().toUpperCase();
                    // alert('You switch to ' + current + ' language');
                }

            });
        } else {
            e.preventDefault();
            $(this).find('a').on('click', function (e) {
                $(this).addClass('active').siblings().removeClass('active');
                var current = $(this).text().toUpperCase();
                alert('You switch to ' + current + ' language');
            });
        }

    });

});
