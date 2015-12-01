angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', function($scope) {
    console.log('In Init');
    return YoutubeVideoPlayer.openVideo('XGSy3_Czz8k');
  }
]);
