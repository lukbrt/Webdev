$('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top,
            scrollBottom: target.offset().bottom
        }, 1500);
    }
});