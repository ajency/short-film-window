angular.module('SFWApp.tabs', []).controller('popularCtrl', [
  '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$window', function($scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $window) {
    var swiper;
    $scope.singleplaylist = function(playlistId) {
      console.log(playlistId);
      DetailsAPI.videoId = playlistId;
      console.log(DetailsAPI.videoId);
      return App.navigate("singlePlaylist");
    };
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
          if (App.isOnline) {
            $scope.errorType = 'offline';
            $scope.display = 'error';
          } else {
            $scope.classname = 'no_Search_result';
            $scope.display = 'error';
          }
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
      var device_height, device_width;
      device_width = $window.innerWidth;
      device_height = $window.innerHeight;
      console.log(device_width);
      console.log(device_height);
      $scope.used_height = 86 + 73;
      $scope.hgt = device_height - $scope.used_height;
      console.log($scope.hgt);
      $scope.premeiere = DetailsAPI.array;
      $scope.addition = DetailsAPI.array_addition;
      $scope.noteworthy = DetailsAPI.array_noteworthy;
      $scope.awplalist = DetailsAPI.array_awplalist;
      return $scope.videoId = DetailsAPI.array.videoId;
    };
    $scope.view = swiper = new Swiper('.popularswiper', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
    });
    if (App.previousState === 'landing') {
      return App.previousState = 'landing';
    }
  }
]);
