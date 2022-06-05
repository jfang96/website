$(document).ready(function () {
    $(".learnmore-button").click(function () {
        $('html,body').animate({
            scrollTop: $(".basic-info-container").offset().top},
            'slow');
        console.log('hi');
    });
});