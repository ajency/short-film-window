angular.module('SFWApp.watchlist', []).controller('watchlistCtrl', [
  '$scope', 'Storage', 'DetailsAPI', 'App', '$window', function($scope, Storage, DetailsAPI, App, $window) {
    $scope.watchlistDetails = [];
    $scope.display = 'loader';
    $scope.init = function() {
      console.log("watch list ");
      return Storage.watchlistDetails('get').then(function(value) {
        var device_height, device_width;
        console.log(value);
        $scope.watchlistDetails = value;
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
      });
    };
    return $scope.singleplay = function(videoid) {
      console.log(videoid);
      DetailsAPI.videoId = videoid;
      console.log(DetailsAPI.videoId);
      console.log("enterd single play .");
      return App.navigate('init');
    };
  }
]);
