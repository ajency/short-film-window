angular.module('SFWApp.landing', []).controller('landingCtrl', [
  '$scope', 'App', 'DetailsAPI', '$sce', '$ionicLoading', '$ImageCacheFactory', '$cordovaToast', '$state', '$timeout', '$ionicPlatform', 'InitialiseService', function($scope, App, DetailsAPI, $sce, $ionicLoading, $ImageCacheFactory, $cordovaToast, $state, $timeout, $ionicPlatform, InitialiseService) {
    $scope.view = {
      skip: true,
      land_vid_html5_api: angular.element("#land_vid_html5_api"),
      skiplangingVideo: function() {
        land_vid_html5_api.pause();
        console.log("skip videoa");
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 600,
          hideOnStateChange: true,
          showDelay: 0
        });
        return App.navigate('popular');
      },
      init: function() {
        console.log('sadsasadad');
        return InitialiseService.initialize().then(function(data) {
          return $ionicLoading.hide();
        }, function(error) {
          return $cordovaToast.show('Please Connect to Internet', 'long', 'bottom');
        });
      },
      viedoEnded: function() {
        console.log('ended', 1);
        return App.navigate('popular');
      }
    };
    return $scope.$on('$ionicView.afterEnter', function() {
      $scope.view.land_vid_html5_api = angular.element("#land_vid_html5_api");
      console.log($scope.view.land_vid_html5_api[0].onended);
      return $scope.view.land_vid_html5_api[0].onended = $scope.view.viedoEnded;
    });
  }
]);
