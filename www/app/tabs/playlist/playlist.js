angular.module('SFWApp.tabs').controller('playlistCtrl', [
  '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', function($scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading) {
    $scope.doRefresh = function() {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 600,
        showDelay: 0
      });
      return PulltorefreshAPI.pullrequest().then((function(_this) {
        return function(data) {
          console.log(data.defaults.content.popular.weekly_premiere.image);
          PulltorefreshAPI.saveData({
            premiere: data.defaults.content.popular.weekly_premiere,
            new_addition: data.defaults.content.popular.new_additions,
            noteworthy: data.defaults.content.popular.noteworthy,
            awesome_playlist: data.defaults.content.popular.awesome_playlist,
            genre: data.defaults.content.genre,
            playlist: data.defaults.content.playlists
          });
          $scope.playlist = DetailsAPI.playlist_array;
          $scope.$broadcast('scroll.refreshComplete');
          return $ionicLoading.hide();
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.$broadcast('scroll.refreshComplete');
          console.log('Error Loading data');
          return $ionicLoading.hide();
        };
      })(this));
    };
    return $scope.test = function() {
      return $scope.playlist = DetailsAPI.playlist_array;
    };
  }
]);
