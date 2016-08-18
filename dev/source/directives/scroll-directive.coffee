shortFilmWindow
.directive 'scrollWatch', ($rootScope) ->
  (scope, elem, attr) ->
    start = 0
    threshold = 150
    elem.bind 'scroll', (e) ->
      if e.detail.scrollTop - start > threshold
        $rootScope.slideHeader = true
      else
        $rootScope.slideHeader = false
      if $rootScope.slideHeaderPrevious >= e.detail.scrollTop - start
        $rootScope.slideHeader = false
      $rootScope.slideHeaderPrevious = e.detail.scrollTop - start
      $rootScope.$apply()