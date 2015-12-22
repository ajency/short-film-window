angular.module('SFWApp.faq', []).controller('faqCtrl', [
  '$scope', '$sce', '$ionicHistory', function($scope, $sce, $ionicHistory) {
    return $scope.view = {
      back: function() {
        return $ionicHistory.goBack();
      },
      init: function() {
        var modifiedUrl;
        modifiedUrl = "http://www.shortfilmwindow.com/faq/";
        return $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);
      }
    };
  }
]);
