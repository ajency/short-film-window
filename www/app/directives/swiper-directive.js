angular.module('SFWApp.directives', []).directive('swiper', function() {
  return {
    link: function(scope, element, attr) {
      return scope.$on('content-changed', function() {
        return new Swiper(element, {
          direction: 'vertical',
          pagination: '.swiper-pagination',
          paginationClickable: true
        });
      });
    }
  };
});
