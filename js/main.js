$(function () {
    // Open Lightbox
    $('.open-lightbox').on('click', function(e) {
        e.preventDefault();
        var img = $(this).find('img').attr('src');
        var path    =   '<figure class="lightbox-opened"><img src="'+img+'"></figure>';
        $('body').append(path);
    });
    // Close Lightbox
    $('body').on('click', '.lighbox-opened', function() {
        $('html').removeClass('no-scroll');
        $('.lighbox-opened').remove();
    });
});