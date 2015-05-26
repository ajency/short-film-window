(function($){

    function resizeimgs(tw, obj, i) {
        var ar = obj.width() / obj.height();
        /*console.log('Number: ' + i + '\n-------------------------');
        console.log('aspectratio ' + ar);
        console.log('cont-resize ' + tw.width() / tw.height());
        console.log('END Number: ' + i + '\n-------------------------');*/

        if ( (tw.width() / tw.height()) < ar ) {
            obj
                .removeClass()
                .addClass('bgheight');
        } else if ( (tw.width() / tw.height()) > ar ) {
            obj
                .removeClass()
                .addClass('bgwidth');
        } else {
            obj
                .removeClass()
                .addClass('bgheight');
        }
        if (jQuery('body').hasClass('no-csstransforms')) {
            obj.css({
                'top': 0,
                'left': 0
            });
        }
    }

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
        $('.slider_gen').slick({
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

        $('.slider2').slick({
            // mobileFirst: true,
            infinite: true,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
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
        $(document).on('click', '.social-toggle', function() {
          $(this).next().toggleClass('open-menu');
        });

        function checkhenwiss() {
            //check if height is greater than width
            $('.slick-slider .slide-cont, .slick-slider .focus-img').each(function() {
                //console.log('H: ' + $(this).find('img').height() + '\nW: ' + $(this).find('img').width());
//                if ($(this).find('img').height() <= $(this).height()) {
//                    $(this).find('img').css({
//                        'height': $(this).height(),
//                        'width': 'auto'
//                    });
//                } else {
//                    $(this).find('img').css({
//                        'height': 'auto',
//                        'width': '100%'
//                    });
//                }
            });
        }
        function setimagenn() {
//            if ($('div').hasClass('grid-box')) {
                $('.grid-box').each(function() {
                    /*console.log(
                        'grid-box: ' + $(this).height() +
                        '\nimg: ' + $(this).find('.grid-image').find('img').height() +
                        '\n---------------------------------------------------------'
                    );*/
                    //console.log($(this).find('.grid-image').find('img').height() <= $(this).height());
//                    if ($(this).find('.grid-image').find('img').height() <= $(this).height()) {
//                        $(this).find('.grid-image').find('img').css({
//                            'height': $(this).height() + 55,
//                            'width': 'auto'
//                        });
//                    } else  {
//                        $(this).find('.grid-image').find('img').css({
//                            'height': 'auto',
//                            'width': '100%'
//                        });
//                    }
                });
//            }
        }
        setimagenn();
        //slick slider images height issue
            $(window).resize(function() {
                setimagenn();
                /*if ($('div').hasClass('slick-slider')) {
                    checkhenwiss();
                }*/
                height = window.innerHeight ? window.innerHeight : $(window).height();
                width = window.outerWidth ? window.outerWidth : $(window).width();
                if (!($('body').hasClass('home'))) {
                    if (width < 480) {
                        $('.vid_if ').css('height', height - 156);
                    } else {
                        $('.vid_if ').css('height', height);
                    }
                }
            });
            $(window).load(function() {
                if ($('div').hasClass('slick-slider')) {
                    checkhenwiss();
                }
                setimagenn();
            });
        height = window.innerHeight ? window.innerHeight : $(window).height();
        width = window.outerWidth ? window.outerWidth : $(window).width();
        if (!($('body').hasClass('home'))) {
            if (width < 480) {
                $('.vid_if ').css('height', height - 156);
            } else {
                $('.vid_if ').css('height', height);
            }
        }
        $('.show-featured-image img').hide();
        resizeimgs($('.show-featured-image'), $('.show-featured-image img'));
        $('.show-featured-image img').show();
    });

    $('.p-grid-c .p-img-c img').hide();
    $('.grid-box .grid-image img').hide();
    $(window).load(function() {
        if ($('div').hasClass('grid-image')) {
            $('.grid-box .grid-image').each(function(i) {
                resizeimgs($(this), $(this).find('img'), i);
                $(this).find('img').show();
            });
        }
        if ($('div').hasClass('p-grid-c')) {
            $('.p-grid-c .p-img-c').each(function(i) {
                resizeimgs($(this), $(this).find('img'), i);
                $(this).find('img').show();
            });
        }
    });

    $(window).resize(function() {
        resizeimgs($('.show-featured-image'), $('.show-featured-image img'));
        if ($('div').hasClass('grid-image')) {
            $('.grid-box .grid-image').each(function(i) {
                resizeimgs($(this), $(this).find('img'), i);
            });
        }
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