app.directive('scroll', function($window) {
  return function(scope, element, attrs) {
    return angular.element($window).bind('scroll', function() {
      console.log('asdsadas');
      if (this.pageYOffset >= 100) {
        scope.boolChangeClass = true;
        console.log('Scrolled below header');
      } else {
        scope.boolChangeClass = false;
        console.log('Header is in view');
      }
      return scope.$apply();
    });
  };
});
