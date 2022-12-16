$(function () {

    // mainSlide
    $('.mainSlide').slick({
        // slidesToShow: 2,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });



    $('.mainConSlide').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 0,
        // autoplaySpeed: 4000,
        // pauseOnHover: false,
        // pauseOnFocus: false,
    });

    $('.mainConSlide').on('afterChange', function (e, s, c) {
        $('.main_dots li').eq(c).addClass('on')
            .siblings().removeClass('on');
        $('.mainContentSlide .main_num').text(c + 1)
    });


    $('.main_dots li').on('mouseenter', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainConSlide').slick('slickGoTo', idx)
    });





    $('.mainNewsSlide').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        
    });

    $('.mainNews .arrows .prev').on('click', function () {
        $('.mainNewsSlide').slick('slickPrev')
    });

    $('.mainNews .arrows .next').on('click', function () {
        $('.mainNewsSlide').slick('slickNext')
    });    






    
})