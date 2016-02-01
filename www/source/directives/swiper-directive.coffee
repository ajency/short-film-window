angular.module 'SFWApp.directives', []
.directive 'swiper', ->
  link: (scope, element, attr) ->
    scope.$on 'content-changed', ->
      new Swiper(element,
        direction: 'vertical'
        pagination: '.swiper-pagination'
        paginationClickable: true
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow:
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : false
        )