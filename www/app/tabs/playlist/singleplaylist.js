angular.module('SFWApp.tabs').controller('singlePlaylist', [
  '$scope', '$ionicLoading', 'App', 'PlaylistAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', '$timeout', function($scope, $ionicLoading, App, PlaylistAPI, DetailsAPI, $ionicHistory, share, $window, $timeout) {
    $scope.display = 'loader';
    $scope.share = function() {
      return share.shareNative();
    };
    $scope.init = function() {
      var device_height, device_width, swiper;
      swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
      });
      if (DetailsAPI.GlobalChild_array.length > 0) {
        console.log("Playlist cached");
        $scope.playlistData = DetailsAPI.GlobalChild_array;
        $scope.playlist = DetailsAPI.Global_array;
        $scope.display = 'result';
        device_width = $window.innerWidth;
        device_height = $window.innerHeight;
        console.log(device_width);
        console.log(device_height);
        $scope.used_height = 44 + 120;
        $scope.hgt = device_height - $scope.used_height;
        return console.log($scope.hgt);
      } else {
        console.log("Playlist emplty");
        $scope.display = 'loader';
        return PlaylistAPI.GetSingleplaylist(DetailsAPI.videoId).then((function(_this) {
          return function(data) {
            DetailsAPI.Global_array = data.playlist;
            DetailsAPI.GlobalChild_array = data.movies;
            $scope.playlistData = data.movies;
            $scope.playlist = data.playlist;
            $scope.display = 'result';
            device_width = $window.innerWidth;
            device_height = $window.innerHeight;
            console.log(device_width);
            console.log(device_height);
            $scope.used_height = 44 + 120;
            $scope.hgt = device_height - $scope.used_height;
            console.log($scope.hgt);
            return $ionicLoading.hide();
          };
        })(this), (function(_this) {
          return function(error) {
            console.log('Error Loading data');
            $scope.display = 'error';
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
    return $scope.back = function() {
      var count;
      DetailsAPI.Global_array = [];
      DetailsAPI.GlobalChild_array = [];
      count = -1;
      return App.goBack(count);
    };
  }
]);
