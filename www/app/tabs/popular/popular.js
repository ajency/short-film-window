angular.module('SFWApp.tabs', []).controller('popularCtrl', [
  '$scope', '$rootScope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$window', function($scope, $rootScope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $window) {
    var swiper;
    swiper = new Swiper(angular.element(document.querySelector('#popularswipeId')), {
      direction: 'vertical',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: false,
      slidesPerView: 'auto',
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      }
    });
    $scope.singleplaylist = function(playlistId) {
      console.log(playlistId);
      DetailsAPI.videoId = playlistId;
      console.log(DetailsAPI.videoId);
      return App.navigate("singlePlaylist");
    };
    $scope.doRefresh = function() {
      if (!App.isOnline()) {
        return $scope.checkNetwork = false;
      } else {
        return PulltorefreshAPI.pullrequest().then((function(_this) {
          return function(data) {
            $scope.checkNetwork = true;
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
      }
    };
    $scope.singleplay = function(videoid) {
      console.log(videoid);
      DetailsAPI.videoId = videoid;
      console.log(DetailsAPI.videoId);
      console.log("enterd single play .");
      return App.navigate('init');
    };
    $scope.singlePlayService = function(videoData) {
      console.log(videoData);
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
    return $scope.test = function() {
      var device_height, device_width;
      $scope.checkNetwork = true;
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
      $scope.videoId = DetailsAPI.array.videoId;
      if (!App.isOnline()) {
        return $scope.checkNetwork = false;
      }
    };
  }
]);
