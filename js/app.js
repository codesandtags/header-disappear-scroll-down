var lastPositionScrollTop = 0;

/***
 * Appear and disappear the header depends the
 * position of the Scroll
 */
$(window).scroll(function () {
    var position = $(this).scrollTop();
    if (position < lastPositionScrollTop){
        $('.navbar ').fadeIn("slow");
    } else {
        $('.navbar ').fadeOut("slow");
    }
    lastPositionScrollTop = position;
});

