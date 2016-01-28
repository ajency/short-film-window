angular.module('SFWApp.singlePlayer', []).controller('playerCtrl', [
  '$scope', '$sce', 'DetailsAPI', '$ionicHistory', 'App', '$timeout', function($scope, $sce, DetailsAPI, $ionicHistory, App, $timeout) {
    var onPlayerReady, onPlayerStateChange, stopVideo;
    console.log(DetailsAPI.singleVideoarray);
    $scope.switchHeaderBar = true;
    $timeout(function() {
      return $scope.switchHeaderBar = !$scope.switchHeaderBar;
    }, 5000);
    $scope.toggleHeader = function() {
      $scope.switchHeaderBar = !$scope.switchHeaderBar;
      return $timeout(function() {
        $scope.switchHeaderBar = !$scope.switchHeaderBar;
        return $scope.$apply();
      }, 5000);
    };
    $scope.view = {
      back: function() {
        var count;
        count = -1;
        return App.goBack(count);
      },
      vType: DetailsAPI.singleVideoarray.type,
      vimomeo: null,
      init: function() {
        var modifiedUrl, player;
        if (this.vType === 'vimeo') {
          modifiedUrl = DetailsAPI.singleVideoarray.embedurl;
          this.vimomeo = true;
          $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);
          return console.log($scope.player1);
        } else {
          this.vimomeo = false;
          return player = new YT.Player('player2', {
            height: '100%',
            width: '100%',
            videoId: DetailsAPI.singleVideoarray.videourl,
            playerVars: {
              'autoplay': 1,
              'rel': 0,
              'wmode': 'transparent'
            },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }
      }
    };
    onPlayerReady = function(event) {
      console.log(event);
      return event.target.playVideo();
    };
    onPlayerStateChange = function(event) {
      var done;
      if (event.data === YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        return done = true;
      }
    };
    return stopVideo = function() {
      return player.stopVideo();
    };
  }
]);
