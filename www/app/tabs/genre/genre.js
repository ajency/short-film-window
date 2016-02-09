angular.module('SFWApp.tabs').controller('genreCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams) {
    $scope.notificationPayload = $stateParams.data;
    $scope.doRefresh = function() {
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
          $scope.genre = DetailsAPI.genre_array;
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
    $scope.init = function() {
      console.log('in genre');
      $scope.genre = DetailsAPI.genre_array;
      return console.log($scope.genre);
    };
    return $scope.singleGenre = function(genreId) {
      DetailsAPI.videoId = genreId;
      return App.navigate("singleGenre");
    };
  }
]);
