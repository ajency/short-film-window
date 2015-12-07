angular.module('SFWApp.singlePlayer', []).controller('playerCtrl', [
  '$scope', '$sce', function($scope, $sce) {
    console.log("Viemo video Playing");
    return $scope.player1 = $sce.trustAsHtml('<iframe id="player1" src="https://player.vimeo.com/video/76979871?api=1&player_id=player1&autoplay=1" width="100%" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  }
]);
