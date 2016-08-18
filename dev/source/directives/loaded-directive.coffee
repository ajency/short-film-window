shortFilmWindow
.directive 'isLoaded', ->
  scope: false
  restrict: 'A'
  link: (scope, elements, args) ->
    if scope.$last
      scope.$emit 'content-changed'