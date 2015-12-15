angular.module('SFWApp.tabs', []).controller('popularCtrl', [
  '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', function($scope, App, PulltorefreshAPI, DetailsAPI) {
    $scope.doRefresh = function() {
      console.log(PulltorefreshAPI);
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
          $scope.premeiere = DetailsAPI.array;
          $scope.addition = DetailsAPI.array_addition;
          $scope.noteworthy = DetailsAPI.array_noteworthy;
          $scope.awplalist = DetailsAPI.array_awplalist;
          $scope.videoId = DetailsAPI.array.videoId;
          return $scope.$broadcast('scroll.refreshComplete');
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.$broadcast('scroll.refreshComplete');
          return console.log('Error Loading data');
        };
      })(this));
    };
    $scope.singleplay = function(videoid) {
      console.log(videoid);
      DetailsAPI.videoId = videoid;
      console.log(DetailsAPI.videoId);
      console.log("enterd single play .");
      return App.navigate('init', {}, {
        animate: false,
        back: false
      });
    };
    return $scope.test = function() {
      $scope.premeiere = DetailsAPI.array;
      $scope.addition = DetailsAPI.array_addition;
      $scope.noteworthy = DetailsAPI.array_noteworthy;
      $scope.awplalist = DetailsAPI.array_awplalist;
      return $scope.videoId = DetailsAPI.array.videoId;
    };
  }
]);
