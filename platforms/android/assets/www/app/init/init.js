angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', function($scope, $sce, App, DetailsAPI) {
    var Vtype;
    DetailsAPI.GetSingleVideo(DetailsAPI.videoId).then((function(_this) {
      return function(data) {
        return console.log("succ");
      };
    })(this), (function(_this) {
      return function(error) {
        return console.log('Error Loading data');
      };
    })(this));
    console.log(DetailsAPI.videoId);
    console.log('In Init');
    Vtype = '0';
    $scope.$on('$ionicView.afterEnter', function() {
      return console.log('after enter');
    });
    return $scope.view = {
      back: function() {
        var count;
        count = -1;
        return App.goBack(count);
      },
      playVideo: function() {
        return App.navigate('singlePlayer', {}, {});
      }
    };
  }
]);
