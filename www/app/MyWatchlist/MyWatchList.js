angular.module('SFWApp.watchlist', []).controller('watchlistCtrl', [
  '$scope', 'Storage', function($scope, Storage) {
    $scope.watchlistDetails = [];
    $scope.display = 'loader';
    return $scope.init = function() {
      console.log("watch list ");
      return Storage.watchlistDetails('get').then(function(value) {
        console.log(value);
        $scope.watchlistDetails = value;
        if ($scope.watchlistDetails.length > 0) {
          $scope.display = 'result';
          return $scope.$apply();
        } else {
          $scope.display = 'no_result';
          return $scope.$apply();
        }
      });
    };
  }
]);
