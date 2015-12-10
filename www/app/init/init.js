angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', function($scope, $sce, App, DetailsAPI) {
    var Vtype;
    $scope.Videodetails = [];
    DetailsAPI.GetSingleVideo(DetailsAPI.videoId).then((function(_this) {
      return function(data) {
        console.log("single video  data succ");
        DetailsAPI.singleVideoarray = data;
        $scope.Videodetails = data;
        console.log($scope.Videodetails);
        return console.log($scope.Videodetails.image);
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
        return App.navigate('home', {}, {});
      },
      playVideo: function() {
        return App.navigate('singlePlayer', {}, {});
      }
    };
  }
]);
