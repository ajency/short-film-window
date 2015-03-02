(function($){
<!-- slider -->
    $(document).ready(function() {
        $('.slider1').slick({
            mobileFirst: true,
            infinite: true,
            slidesToShow: 3
        });

        $('.slider2').slick({
            mobileFirst: true,
            infinite: true,
            slidesToShow: 4
        });

        $('.slider3').slick({
            mobileFirst: true,
            infinite: true
        });

        $(".button").click(function(){
            $(".slide").slideToggle();
        });

        videojs('bg-video').Background({
            container: 'vjs-hd',
            autoPlay: false
        });
        // // var w = $(window).width();
        // jQuery('#bg-video').css('width', '100%' );


    });

    
})(jQuery);

var imgLoad = imagesLoaded('.container');
imgLoad.on( 'always', function() {
  console.log( imgLoad.images.length + ' images loaded' );
  // detect which image is broken
  for ( var i = 0, len = imgLoad.images.length; i < len; i++ ) {
    var image = imgLoad.images[i];
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  }
});
