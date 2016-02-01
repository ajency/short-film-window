app.directive 'scroll', ($window) ->
  (scope, element, attrs) ->
    angular.element($window).bind 'scroll', ->
      console.log 'asdsadas'
      if @pageYOffset >= 100
        scope.boolChangeClass = true
        console.log 'Scrolled below header'
      else
        scope.boolChangeClass = false
        console.log 'Header is in view'
      scope.$apply()