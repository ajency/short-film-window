angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', function($scope) {
    var onPlayerStateChange, stopVideo;
    console.log('In Init');
    $scope.$on('$ionicView.afterEnter', function() {
      var firstScriptTag, tag;
      console.log('after enter');
      if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        firstScriptTag = document.getElementsByTagName('script')[0];
        return firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    });
    $scope.view = {
      playVideo: function() {
        var onPlayerReady, player;
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        onPlayerReady = function(event) {
          console.log('Autostart player');
          return event.target.playVideo();
        };
      }
    };
    onPlayerStateChange = function(event) {
      var done;
      if (event.data === YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    };
    return stopVideo = function() {
      player.stopVideo();
    };
  }
]);
