var lastScrollTop = 0;

$(window).scroll(function () {
    var st = $(this).scrollTop();
    console.log(" => " + st + " : " + lastScrollTop);
    if (st < lastScrollTop){
        $('.navbar ').fadeIn("slow");
    } else {
        $('.navbar ').fadeOut("slow");
    }
    lastScrollTop = st;
});

$("h1").click(function(){
    console.log(" => ", this);
    $(this).fadeOut("slow");
});