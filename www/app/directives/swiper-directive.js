shortFilmWindow.directive('swiper', function() {
  return {
    link: function(scope, element, attr) {
      ({
        restrict: 'AEC'
      });
      return scope.$on('content-changed', function() {
        return new Swiper(element, {
          direction: 'vertical',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          onSlideChangeEnd: function(swiper) {
            scope.currSwiper = swiper;
            return scope.$apply(attr.detectSwiperSlide);
          },
          onSlideChangeStart: function(swiper) {
            scope.currSwiper = swiper;
            return scope.$apply(attr.detectSwiperSlide);
          }
        });
      });
    }
  };
});
