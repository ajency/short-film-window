angular.module 'SFWApp.directives' , []
.directive 'scroll', ($window) ->
  (scope, element, attrs) ->
    angular.element($window).bind 'scroll', ->
      if @pageYOffset >= 100
        scope.boolChangeClass = true
        console.log 'Scrolled below header.'
      else
        scope.boolChangeClass = false
        console.log 'Header is in view.'
      scope.$apply()
      return
    return