angular.module('SFWApp.tabs').controller('singleGenre', [
  '$scope', '$ionicLoading', 'App', 'GenreAPI', 'DetailsAPI', function($scope, $ionicLoading, App, GenreAPI, DetailsAPI) {
    $scope.init = function() {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 600,
        showDelay: 0
      });
      console.log(GenreAPI);
      return GenreAPI.GetSingleGenre(DetailsAPI.videoId).then((function(_this) {
        return function(data) {
          $scope.genreData = data;
          console.log($scope.genreData);
          return $ionicLoading.hide();
        };
      })(this), (function(_this) {
        return function(error) {
          console.log('Error Loading data');
          return $ionicLoading.hide();
        };
      })(this));
    };
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
        templateUrl: 'views/filterPopup/filterpopup.html',
        hideOnStateChange: true
      });
    };
    $scope.hide = function() {
      $ionicLoading.hide();
      return {
        hideOnStateChange: false
      };
    };
    return $scope.singleplay = function(videoid) {
      console.log(videoid);
      DetailsAPI.videoId = videoid;
      console.log(DetailsAPI.videoId);
      console.log("enterd single play .");
      return App.navigate('init');
    };
  }
]);
