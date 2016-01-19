angular.module('SFWApp.landing', []).controller('landingCtrl', [
  '$scope', 'App', 'DetailsAPI', '$sce', '$ionicLoading', '$ImageCacheFactory', '$cordovaToast', '$state', '$timeout', '$ionicPlatform', 'InitialiseService', function($scope, App, DetailsAPI, $sce, $ionicLoading, $ImageCacheFactory, $cordovaToast, $state, $timeout, $ionicPlatform, InitialiseService) {
    return $scope.view = {
      skip: true,
      skiplangingVideo: function() {
        land_vid_html5_api.pause();
        this.init();
        return $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 600,
          hideOnStateChange: true,
          showDelay: 0
        });
      },
      init: function() {
        console.log('init');
        return InitialiseService.initialize().then(function(data) {
          $ionicLoading.hide();
          return App.navigate('popular');
        }, function(error) {
          $ionicLoading.hide();
          $cordovaToast.show('Please Connect to Internet', 'long', 'bottom');
        });
      }
    };
  }
]);
