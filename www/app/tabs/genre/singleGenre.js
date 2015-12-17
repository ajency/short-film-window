angular.module('SFWApp.tabs').controller('singleGenre', [
  '$scope', '$ionicLoading', function($scope, $ionicLoading) {
    $scope.sortGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/filterPopup/sortPopupgener.html',
        hideOnStateChange: true
      });
    };
    $scope.filterGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/filterPopup/filterPopup.html',
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
