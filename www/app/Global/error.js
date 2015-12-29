angular.module('SFWApp.Global').directive('ajError', [
  function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/Global/error.html',
      scope: {
        tapToRetry: '&',
        errorType: '='
      },
      link: function(scope, el, attr) {
        var errorMsg;
        switch (scope.errorType) {
          case 'offline':
            errorMsg = 'No internet availability';
            break;
          case 'server_error':
            errorMsg = 'Could not connect to server';
            break;
          case 'no_result':
            errorMsg = 'No results found';
            break;
          default:
            errorMsg = 'Unknown error';
        }
        scope.errorMsg = errorMsg;
        return scope.onTryAgain = function() {
          return scope.tapToRetry();
        };
      }
    };
  }
]);
