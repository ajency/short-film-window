angular.module('SFWApp.tabs', []).controller('popularCtrl', [
  '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', function($scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading) {
    var swiper;
    $scope.singleplaylist = function(playlistId) {
      console.log(playlistId);
      DetailsAPI.videoId = playlistId;
      console.log(DetailsAPI.videoId);
      return App.navigate("singlePlaylist");
    };
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
          $scope.premeiere = DetailsAPI.array;
          $scope.addition = DetailsAPI.array_addition;
          $scope.noteworthy = DetailsAPI.array_noteworthy;
          $scope.awplalist = DetailsAPI.array_awplalist;
          $scope.videoId = DetailsAPI.array.videoId;
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
    $scope.singleplay = function(videoid) {
      console.log(videoid);
      DetailsAPI.videoId = videoid;
      console.log(DetailsAPI.videoId);
      console.log("enterd single play .");
      return App.navigate('init');
    };
    $scope.test = function() {
      $scope.premeiere = DetailsAPI.array;
      $scope.addition = DetailsAPI.array_addition;
      $scope.noteworthy = DetailsAPI.array_noteworthy;
      $scope.awplalist = DetailsAPI.array_awplalist;
      return $scope.videoId = DetailsAPI.array.videoId;
    };
    return $scope.view = swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
    });
  }
]);
