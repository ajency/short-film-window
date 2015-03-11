(function($){
<!-- slider -->
    $(document).ready(function() {
        $('.slider1').slick({
            // mobileFirst: true,
            infinite: true,
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });

        $('.slider2').slick({
            // mobileFirst: true,
            infinite: true,
            slidesToShow: 4,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
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

        // $("#home-video img, #home-video span.play-button").on("click", function() {
        //   $("#home-video").css("min-height","600px");
        //   var video = '<iframe id="video-player" width="100%" height="600px" src="' + $("#home-video img").attr('data-video') + '" frameborder="0" allowfullscreen wmode="opaque"></iframe>';
        //   $(video).insertAfter($("#home-video img"));
        //   $("#home-video span.play-button").hide();
        //   var closebtn = '<span class="close-button"></span>';
        //   $(closebtn).insertAfter($(this));
          
        //   $("#home-video span.close-button").on("click", function() {
        //     $("#home-video").css("min-height","100px");
        //     $("#video-player").remove();
        //     $(this).remove();
        //     $("#home-video span.play-button").show();
        //   });
        // });

    });

    
})(jQuery);


function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector(".header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();