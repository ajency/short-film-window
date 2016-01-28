angular.module('SFWApp.directives').directive('isLoaded', function() {
  return {
    scope: false,
    restrict: 'A',
    link: function(scope, elements, args) {
      if (scope.$last) {
        scope.$emit('content-changed');
        return console.log('page Is Ready!');
      }
    }
  };
});
