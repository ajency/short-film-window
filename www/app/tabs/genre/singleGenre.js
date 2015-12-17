angular.module('SFWApp.tabs').controller('singleGenre', [
  '$scope', '$ionicLoading', 'App', function($scope, $ionicLoading, App) {
    $scope.sortGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/filterPopup/sortPopupgener.html',
        hideOnStateChange: true
      });
    };
    $scope.filterGenre = function() {
      return App.navigate('filterGenreCtrl', {}, {});
    };
    return $scope.hide = function() {
      $ionicLoading.hide();
      return {
        hideOnStateChange: false
      };
    };
  }
]);
