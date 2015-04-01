(function($){
    jQuery(document).ready(function() {
        jQuery('.slider1').slick({
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

        /* Social Toggle */
        $('.social-toggle').on('click', function() {
          $(this).next().toggleClass('open-menu');
        });


    });

    var element = $('.movie-info');
    if(element.length > 0) {

      /* Single Post Video */
      jQuery(document).ready(function() {
        videojs('bg-video').Background({
            container: 'vjs-hd',
            autoPlay: false
        });
      });

      /* Video response on play */
      var player_name = _V_('#bg-video'); 
      player_name.on('waiting', function(){
        $('.vjs-poster').css('opacity', '0');
      });
      player_name.on('play', function(){ 
        $('.movie-info').addClass('playing');
        $('.header').addClass('playing');
        $('.movie-header .overlay').css('display', 'none');
        views = parseInt(jQuery('#noofviews').val()) + 1 ; 
        data = 'views='+views+'&post_id='+jQuery('#post_id').val();
        jQuery.ajax({
                type : 'POST',
                url : SITEURL+'/wp-json/views',
                data : data,
                success:function(response){
                    jQuery('#noofviews').val(response);

                },
                error:function(response){


                }
        });

      });
      player_name.on('pause', function(){ 
        $('.movie-info').removeClass('playing');
        $('.header').removeClass('playing');
        $('.movie-header .overlay').css('display', 'block');
      });
    }

    
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