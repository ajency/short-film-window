angular.module('SFWApp.tabs').controller('singlePlaylist', [
  '$scope', '$rootScope', '$ionicScrollDelegate', '$ionicLoading', 'App', 'PlaylistAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', '$timeout', function($scope, $rootScope, $ionicScrollDelegate, $ionicLoading, App, PlaylistAPI, DetailsAPI, $ionicHistory, share, $window, $timeout) {
    $scope.display = 'loader';
    $rootScope.slideHeader = false;
    $rootScope.slideHeaderPrevious = 0;
    $scope.share = function() {
      return share.shareNative();
    };
    $scope.init = function() {
      var device_height, device_width;
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
        console.log('******', $scope.used_height);
        $scope.hgt = device_height - $scope.used_height;
        console.log($scope.hgt);
        return $scope.headerwidth = device_width - 100 - 27;
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
            $scope.headerwidth = device_width - 100 - 27;
            console.log('-----', $scope.used_height);
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
    $scope.singlePlayService = function(videoData) {
      console.log(videoData);
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
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
