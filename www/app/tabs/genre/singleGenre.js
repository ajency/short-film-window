angular.module('SFWApp.tabs').controller('singleGenre', [
  '$scope', '$ionicLoading', function($scope, $ionicLoading) {
    $scope.sortGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/genre/singleGenre.html',
        hideOnStateChange: true
      });
    };
    return $scope.hide = function() {
      $ionicLoading.hide();
      return {
        hideOnStateChange: false
      };
    };
  }
]);
