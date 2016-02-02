angular.module('SFWApp.directives').directive('scrollWatch', function($rootScope) {
  return function(scope, elem, attr) {
    var start, threshold;
    start = 0;
    threshold = 150;
    return elem.bind('scroll', function(e) {
      if (e.detail.scrollTop - start > threshold) {
        $rootScope.slideHeader = true;
      } else {
        $rootScope.slideHeader = false;
      }
      if ($rootScope.slideHeaderPrevious >= e.detail.scrollTop - start) {
        $rootScope.slideHeader = false;
      }
      $rootScope.slideHeaderPrevious = e.detail.scrollTop - start;
      return $rootScope.$apply();
    });
  };
});
