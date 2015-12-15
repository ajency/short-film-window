angular.module('SFWApp.tabs').controller('genreCtrl', [
  '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', function($scope, App, PulltorefreshAPI, DetailsAPI) {
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
          return $scope.$broadcast('scroll.refreshComplete');
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.$broadcast('scroll.refreshComplete');
          return console.log('Error Loading data');
        };
      })(this));
    };
    return $scope.test = function() {
      return $scope.genre = DetailsAPI.genre_array;
    };
  }
]);
