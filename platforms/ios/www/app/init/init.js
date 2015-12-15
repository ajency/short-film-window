angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', '$ionicLoading', function($scope, $sce, App, DetailsAPI, $ionicLoading) {
    var Vtype;
    $scope.Videodetails = [];
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 600,
      showDelay: 0
    });
    DetailsAPI.GetSingleVideo(DetailsAPI.videoId).then((function(_this) {
      return function(data) {
        console.log("single video  data succ");
        DetailsAPI.singleVideoarray = data;
        $scope.Videodetails = data;
        console.log($scope.Videodetails);
        console.log($scope.Videodetails.image);
        return $ionicLoading.hide();
      };
    })(this), (function(_this) {
      return function(error) {
        console.log('Error Loading data');
        return $ionicLoading.hide();
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
        return App.navigate('popular', {}, {});
      },
      playVideo: function() {
        return App.navigate('singlePlayer', {}, {});
      }
    };
  }
]);
