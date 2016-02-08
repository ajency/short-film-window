(function($){

    function resizeimgs(tw, obj, i) {
        var ar = obj.width() / obj.height();

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

        height = window.innerHeight ? window.innerHeight : $(window).height();
        width = window.outerWidth ? window.outerWidth : $(window).width();
        if (!($('body').hasClass('home'))) {
            if (width < 480) {
                $('.vid_if ').each(function() {
                    $(this).css('max-height', height - 156);
                });
                $('.show-featured-image').css('max-height', height - 156);
            } else {
                $('.vid_if ').each(function() {
                    $(this).css('max-height', height);
                });
                $('.show-featured-image').css('max-height', height);
            }
        }

        $(window).resize(function() {
            height = window.innerHeight ? window.innerHeight : $(window).height();
            width = window.outerWidth ? window.outerWidth : $(window).width();
            if (!($('body').hasClass('home'))) {
                if (width < 480) {
                    $('.vid_if ').each(function() {
                        $(this).css('max-height', height - 156);
                        $('.show-featured-image')/*.css('max-height', height - 156)*/.css('height', 'auto');
                    });
                } else {
                    $('.vid_if ').each(function() {
                        $(this).css('max-height', height);
                        $('.show-featured-image')/*.css('max-height', height)*/.css('height', 'auto');
                    });
                }
            }
            // if ($('body').hasClass('home')) {
            //     $('.show-featured-image').css('height', $('.show-featured-image img').height());
            // }
        });
    });

    $(window).load(function() {
        // if ($('body').hasClass('home')) {
        //     $('.show-featured-image').css('height', $('.show-featured-image img').height());
        // }
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