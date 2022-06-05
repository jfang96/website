$(document).ready(function () {

    // Learn More button scrolls to basic info
    $(".learnmore-button").click(function () {
        $('html,body').animate({
            scrollTop: $(".basic-info-container").offset().top
        },
            'slow');
        console.log('hi');
    });

    $('.js-gotop').on('click', function (event) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 1000, 'easeInOutExpo');

        return false;
    });

    $(window).scroll(function () {

        var $win = $(window);
        if ($win.scrollTop() > 200) {
            $('.js-top').addClass('active');
        } else {
            $('.js-top').removeClass('active');
        }

    });

});