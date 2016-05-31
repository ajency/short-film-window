shortFilmWindow.directive('isLoaded', function() {
  return {
    scope: false,
    restrict: 'A',
    link: function(scope, elements, args) {
      if (scope.$last) {
        return scope.$emit('content-changed');
      }
    }
  };
});
