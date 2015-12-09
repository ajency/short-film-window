angular.module('SFWApp.singlePlayer', []).controller('playerCtrl', [
  '$scope', '$sce', 'DetailsAPI', function($scope, $sce, DetailsAPI) {
    var onPlayerReady, onPlayerStateChange, stopVideo;
    console.log(DetailsAPI.array.image);
    $scope.view = {
      init: function() {
        var player, vType;
        vType = 'vimeo';
        if (vType === 'vimeo') {
          console.log("Viemo video Playing");
          return $scope.player1 = $sce.trustAsHtml('<iframe id="player1" src="http://player.vimeo.com/video/82125785?api=1& autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        } else {
          return player = new YT.Player('player2', {
            height: '100%',
            width: '100%',
            videoId: 'M7lc1UVf-vimeoVE',
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
