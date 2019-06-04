$(function () {
    // Open Lightbox
    var lightboxOpened  =   'lightbox-opened';
    var lightbox        =   'lightbox';   
    var figure      =   $('figure');
    // Finder alle figures
    function openLightbox(figure) {
        console.log(figure);
        figure.on('click', function(e) {
            e.preventDefault();
            var img = $(this).find('img').attr('src');
            var div = '<div class="'+lightbox+'"></div>'
            var path    =   '<figure class="'+lightboxOpened+'"><img src="'+img+'"></figure>';
            $('body').addClass('no-scroll');
            $('body').append(path);
            $('body').append(div);
            close(lightboxOpened, lightbox);
            //  console.log(lightboxOpened, lightbox)
        });
    };
    openLightbox(figure);
    // Close lightbox
    function close(lightboxOpened, lightbox){    
        // Click on figure or div -> Remove lightbox
        $('.'+lightboxOpened + "," + '.'+lightbox).on('click', function() {
            // Aktiver scroll igen
            $('body').removeClass('no-scroll');
            // Fjern figure
            $('.'+lightboxOpened).remove();
            // Fjern div
            $('.'+lightbox).remove();
            // var t   =  setTimeout(function(){
            //     console.log(this);
            // },500);
        });
    }; 
});