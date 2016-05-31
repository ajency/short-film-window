shortFilmWindow.controller('playlistCtrl', [
  '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', function($scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading) {
    $scope.doRefresh = function() {
      return PulltorefreshAPI.pullrequest().then((function(_this) {
        return function(data) {
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
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.test = function() {
      return $scope.playlist = DetailsAPI.playlist_array;
    };
    return $scope.singleplaylist = function(playlistId) {
      DetailsAPI.videoId = playlistId;
      return App.navigate("singlePlaylist");
    };
  }
]);
