angular.module('SFWApp.landing', []).controller('appInitializeCtrl', [
  '$scope', 'App', 'DetailsAPI', 'InitialiseService', function($scope, App, DetailsAPI, InitialiseService) {
    return $scope.initApp = function() {
      $scope.display = 'loader';
      $scope.errorType = 'offline';
      return InitialiseService.initialize().then(function(data) {
        if (!App.isOnline()) {
          return $scope.display = 'error';
        } else {
          return InitialiseService.initialize().then(function(response) {
            return App.navigate('popular');
          });
        }
      }, function(error) {
        return $scope.display = 'error';
      });
    };
  }
]);
