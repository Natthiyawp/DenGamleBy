$(function () {
    // Open Lightbox
    var lightboxOpened  =   'lightbox-opened';
    var lightbox        =   'lightbox';   
    var figure      =   $('figure');
    // Finder alle figures
    function openLightbox(figure) {
        console.log(figure);
        figure.on('click', function(e) {
            var denne   =   $(this);
            e.preventDefault();
            var img = $(this).find('img').attr('src');
            var div = '<div class="'+lightbox+'"></div>'
            var path    =   '<figure class="'+lightboxOpened+'"><img src="'+img+'"></figure>';
            $('body').addClass('no-scroll');
            $('body').append(path);
            $('body').append(div);
            $('.'+lightboxOpened).addClass('fadeIn');
            close(lightboxOpened, lightbox, denne);
            //  console.log(lightboxOpened, lightbox)
        });
    };
    openLightbox(figure);
    // Close lightbox
    function close(lightboxOpened, lightbox, denne){    
        // Click on figure or div -> Remove lightbox
        $('.'+lightboxOpened + "," + '.'+lightbox).on('click', function() {
            // Aktiver scroll igen
            $('body').removeClass('no-scroll');
            $('.fadeIn').removeClass('fadeIn');
            $('.'+lightboxOpened).addClass('fadeOut');
            var t   =  setTimeout(function(){
                // Fjern div
                $('.'+lightbox).remove();
                // Fjern figure
                $('.'+lightboxOpened).remove();
                
            },500);
        });
    }; 
});