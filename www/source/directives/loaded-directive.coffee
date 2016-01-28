angular.module 'SFWApp.directives'
.directive 'isLoaded', ->
  scope: false
  restrict: 'A'
  link: (scope, elements, args) ->
    if scope.$last
      scope.$emit 'content-changed'
      console.log 'page Is Ready!'