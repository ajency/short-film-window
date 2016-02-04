angular.module('SFWApp.watchlist', []).controller('watchlistCtrl', [
  '$scope', 'Storage', 'DetailsAPI', 'App', '$window', '$ionicScrollDelegate', '$timeout', function($scope, Storage, DetailsAPI, App, $window, $ionicScrollDelegate, $timeout) {
    $scope.watchlistDetails = [];
    $scope.display = 'loader';
    $scope.watchFlag = '0';
    $scope.refreshSwiper = true;
    $scope.addvideoDetails = [];
    $scope.init = function() {
      return $scope.getData();
    };
    $scope.getData = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var device_height, device_width;
        $scope.watchlistDetails = value;
        if (_.isNull($scope.watchlistDetails)) {
          $scope.display = 'no_result';
          return $scope.$apply();
        } else {
          if ($scope.watchlistDetails.length > 0) {
            device_width = $window.innerWidth;
            device_height = $window.innerHeight;
            console.log(device_width);
            console.log(device_height);
            $scope.used_height = 43 + 72;
            $scope.hgt = device_height - $scope.used_height;
            $scope.display = 'result';
            return $scope.$apply();
          } else {
            $scope.display = 'no_result';
            return $scope.$apply();
          }
        }
      });
    };
    $scope.updatewatchlist = function(Id) {
      console.log(Id);
      $scope.CheckWatchlist(Id);
      return $ionicScrollDelegate.resize();
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
    return $scope.CheckWatchlist = function(Id) {
      var matchIndex;
      matchIndex = _.findLastIndex($scope.watchlistDetails, {
        "movie_id": Id
      });
      console.log('remove from watchlist', matchIndex);
      $scope.watchlistDetails.splice(matchIndex, 1);
      Storage.watchlistDetails('set', $scope.watchlistDetails);
      if (_.isNull($scope.watchlistDetails) || $scope.watchlistDetails.length === 0) {
        return $scope.display = 'no_result';
      } else {
        $scope.refreshSwiper = false;
        return $timeout((function() {
          var device_height, device_width;
          $scope.refreshSwiper = true;
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          console.log(device_width);
          console.log(device_height);
          $scope.used_height = 43 + 72;
          return $scope.hgt = device_height - $scope.used_height;
        }), 100);
      }
    };
  }
]);
