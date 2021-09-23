$(document).ready(function () {
    new SmoothScroll('a[href *= "#"]',{
        easing:'linear',
        speed:1000,
        offset:80,
    })

    new WOW({
        animateClass: 'animate__animated',
    }).init()

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    })
    $('#skills-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            var width = $(this).data('val')
            $(this).css('width', width + '%')
        })
    }, { offset: '80%' })

    $('#menu-bar').on('click', function () {
        if ($('#nav').css('right') === '-250px') {
            $('#nav').css('right', '0px');
            $(this).removeClass('fa-bars').addClass('fa-times');
        } else {
            $('#nav').css('right', '-250px');
            $(this).removeClass('fa-times').addClass('fa-bars');
        }
    })

    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 120) {
            $('#header').css('background-color', 'rgba(20,40,60,0.8)').css('padding', '15px 40px');
        } else {
            $('#header').css('background-color', 'rgba(20,40,60,0)').css('padding', '20px 40px');
        }

        if($(window).scrollTop() > 300 )
            $('#back').css('visibility','visible')
        else
            $('#back').css('visibility','hidden')


    })

    var portfolio = $('#portfolio-items').isotope({
        originLeft: false
    })

    $('#portfolio .filter li').on('click',function(){
        $('#portfolio .filter li').removeClass('filter-active')
        $(this).addClass('filter-active')

        portfolio.isotope({
            filter: $(this).data('filter')
        })

    })
    portfolio.on('arrangeComplete',function(){
        if($(window).scrollTop() % 2 == 0 )
            $(window).scrollTop($(window).scrollTop() - 1)
        else
            $(window).scrollTop($(window).scrollTop() + 1)

    })

    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:4
            },
            992:{
                items:6
            }
        }
    })

})