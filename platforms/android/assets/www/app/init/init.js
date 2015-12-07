angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', function($scope, $sce, App) {
    var Vtype, onPlayerReady, onPlayerStateChange, stopVideo;
    console.log('In Init');
    Vtype = '0';
    $scope.$on('$ionicView.afterEnter', function() {
      return console.log('after enter');
    });
    $scope.view = {
      init: function() {},
      playVideo: function() {
        var player;
        return player = new YT.Player('player', {
          height: '500',
          width: '400',
          videoId: 'M7lc1UVf-VE',
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
