$(document).ready(function () {

    // Learn More button scrolls to basic info
    $(".learnmore-button").click(function () {
        $('html,body').animate({
            scrollTop: $(".basic-info-container").offset().top},
            'slow');
        console.log('hi');
    });

});