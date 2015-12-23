angular.module('SFWApp.faq', []).controller('faqCtrl', [
  '$scope', '$sce', '$ionicHistory', '$ionicLoading', function($scope, $sce, $ionicHistory, $ionicLoading) {
    return $scope.view = {
      back: function() {
        return $ionicHistory.goBack();
      },
      init: function() {
        var modifiedUrl;
        $('#player1').ready(function() {
          return $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 600,
            hideOnStateChange: true,
            showDelay: 0
          });
        });
        $('#player1').load(function() {
          return $ionicLoading.hide();
        });
        modifiedUrl = "http://www.shortfilmwindow.com/faq/";
        return $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);
      }
    };
  }
]);
