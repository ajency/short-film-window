angular.module('SFWApp.directives', []).directive('swiper', function() {
  return {
    link: function(scope, element, attr) {
      return scope.$on('content-changed', function() {
        return new Swiper(element, {
          direction: 'vertical',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          effect: 'coverflow',
          loop: false,
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }
        });
      });
    }
  };
});
