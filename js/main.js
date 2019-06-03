$(function () {
    // Open Lightbox
    $('.open-lightbox').on('click', function(e) {
        e.preventDefault();
        var img = $(this).find('img').attr('src');
        var path    =   '<figure class="lightbox-opened"><img src="'+img+'"></figure>';
        $('body').addClass('no-scroll');
        $('body').append(path);
        close('.lightbox-opened');
        

    });
    function close(elm){
           // Close Lightbox
    $(elm).on('click', function() {
        console.log(this);
        $('body').removeClass('no-scroll');
        $(elm).remove();
    });
    }
 
});