angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', '$ionicLoading', '$ionicHistory', function($scope, $sce, App, DetailsAPI, $ionicLoading, $ionicHistory) {
    var Vtype;
    $scope.Videodetails = [];
    $scope.init = function() {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 600,
        showDelay: 0
      });
      return DetailsAPI.GetSingleVideo(DetailsAPI.videoId).then((function(_this) {
        return function(data) {
          console.log("single video  data succ");
          DetailsAPI.singleVideoarray = data;
          $scope.Videodetails = data;
          console.log($scope.Videodetails);
          console.log($scope.Videodetails.image);
          $ionicLoading.hide();
          return document.getElementById('synopsis').outerHTML = $scope.Videodetails.content;
        };
      })(this), (function(_this) {
        return function(error) {
          console.log('Error Loading data');
          return $ionicLoading.hide();
        };
      })(this));
    };
    console.log(DetailsAPI.videoId);
    console.log('In Init');
    Vtype = '0';
    $scope.$on('$ionicView.afterEnter', function() {
      return console.log('after enter');
    });
    return $scope.view = {
      back: function() {
        return $ionicHistory.goBack();
      },
      playVideo: function() {
        return App.navigate('singlePlayer');
      }
    };
  }
]);
