shortFilmWindow
.directive 'swiper', ->
  link: (scope, element, attr) ->
    scope.$on 'content-changed', ->
      new Swiper(element,
        direction: 'vertical'
        pagination: '.swiper-pagination'
        paginationClickable: true
        # speed : 150
        # nested: true
        # watchSlidesProgress : true
        # preloadImages : false
        # lazyLoading : true
        # lazyLoadingInPrevNextAmount : 3
        # loop : false
        # effect: 'coverflow',
        loop: false
        freeModeMinimumVelocity : 0.08
        freeModeSticky : true
        # grabCursor: true,
        # centeredSlides: true,
        # slidesPerView: 'auto',
        # coverflow:
        #   rotate: 50,
        #   stretch: 0,
        #   depth: 100,
        #   modifier: 1,
        #   slideShadows : false
        )