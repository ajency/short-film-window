angular.module('SFWApp.tabs').controller('singlePlaylist', [
  '$scope', '$rootScope', '$ionicScrollDelegate', '$ionicLoading', 'App', 'PlaylistAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', '$timeout', 'Storage', function($scope, $rootScope, $ionicScrollDelegate, $ionicLoading, App, PlaylistAPI, DetailsAPI, $ionicHistory, share, $window, $timeout, Storage) {
    $scope.display = 'loader';
    $scope.getwatchlistDetails = [];
    $rootScope.slideHeader = false;
    $rootScope.slideHeaderPrevious = 0;
    $scope.checkIfaddedToWatchList = function(movie_id) {
      var match;
      if ($scope.getwatchlistDetails.length > 0) {
        match = _.findIndex($scope.getwatchlistDetails, {
          "movie_id": movie_id
        });
        if (match !== -1) {
          return 'selected';
        } else {
          return 'notselected';
        }
      } else {
        return 'notselected';
      }
    };
    $scope.findIndexInWatchlist = function(movieId) {
      var match;
      return match = _.findIndex($scope.getwatchlistDetails, {
        "movie_id": movieId
      });
    };
    $scope.addwatchlist = function(movieData) {
      var matchInWatchList, obj;
      console.log(movieData);
      obj = {
        "movie_id": movieData.movie_id,
        "singleVideoarray": movieData
      };
      matchInWatchList = $scope.findIndexInWatchlist(movieData.movie_id);
      if (matchInWatchList === -1) {
        $scope.getwatchlistDetails.push(obj);
        return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
      } else {
        $scope.getwatchlistDetails.splice(matchInWatchList, 1);
        return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
      }
    };
    $scope.share = function() {
      return share.shareNative();
    };
    $scope.init = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var device_height, device_width;
        if (_.isNull(value)) {
          value = [];
        }
        $scope.getwatchlistDetails = value;
        if (DetailsAPI.GlobalChild_array.length > 0) {
          $scope.playlistData = DetailsAPI.GlobalChild_array;
          $scope.playlist = DetailsAPI.Global_array;
          $scope.display = 'result';
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          $scope.used_height = 44 + 120;
          $scope.hgt = device_height - $scope.used_height;
          return $scope.headerwidth = device_width - 100 - 27;
        } else {
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
              $scope.used_height = 44 + 120;
              $scope.hgt = device_height - $scope.used_height;
              $scope.headerwidth = device_width - 100 - 27;
              return $ionicLoading.hide();
            };
          })(this), (function(_this) {
            return function(error) {
              $scope.display = 'error';
              return $ionicLoading.hide();
            };
          })(this));
        }
      });
    };
    $scope.singlePlayService = function(videoData) {
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
