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
        var button, errorMsg, errorTitle;
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
            errorMsg = 'No results found';
            errorTitle = 'Result';
            button = 'clear Filter/Sort';
        }
        scope.errorMsg = errorMsg;
        scope.errorTitle = errorTitle;
        scope.button = button;
        return scope.onTryAgain = function() {
          return scope.tapToRetry();
        };
      }
    };
  }
]);
