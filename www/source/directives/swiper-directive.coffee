angular.module 'SFWApp.directives', []
.directive 'swiper', ->
  link: (scope, element, attr) ->
    scope.$on 'content-changed', ->
      new Swiper(element,
        direction: 'vertical'
        pagination: '.swiper-pagination'
        paginationClickable: true)