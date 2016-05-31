angular.module('SFWApp', ['ionic', 'ngCordova', 'SFWApp.landing', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global', 'SFWApp.sidebar', 'SFWApp.services', 'ngSanitize', 'SFWApp.singlePlayer', 'SFWApp.VideoDetailsAPI', 'SFWApp.tabs', 'ion-sticky', 'ionicLazyLoad', 'ionic.ion.imageCacheFactory', 'vimeoEmbed', 'SFWApp.storage', 'SFWApp.watchlist']).value('ParseConfiguration', {
  applicationId: '2T1prpN7BMpV0QcVNJS6BDuDr1jmgy0bspF8TY1E',
  javascriptKey: 'ZjvDbNoggTgKtbIJW8asuVw8huGoEBPVvcKbbXru',
  clientKey: 'qm7Z3fHnfXRrN2kirOySQXoiOWixKkLj7yeZeDJo'
}).run([
  '$ionicPlatform', '$state', '$rootScope', 'App', '$timeout', 'Set_Get', '$cordovaSplashscreen', '$window', '$cordovaNetwork', '$cordovaToast', 'DetailsAPI', 'ParseConfiguration', 'InitialiseService', function($ionicPlatform, $state, $rootScope, App, $timeout, Set_Get, $cordovaSplashscreen, $window, $cordovaNetwork, $cordovaToast, DetailsAPI, ParseConfiguration, InitialiseService) {
    var device_height, device_width, firstScriptTag, swiper, tag;
    $ionicPlatform.ready(function() {
      $rootScope.isAndroid = ionic.Platform.isAndroid();
      return InitialiseService.initialize().then(function(data) {
        return App.navigate('popular');
      }, function(error) {
        return $cordovaToast.show('Please Connect to Internet', 'long', 'bottom');
      });
    });
    $rootScope.App = App;
    tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    device_width = $window.innerWidth;
    device_height = $window.innerHeight;
    console.log(device_width);
    console.log(device_height);
    swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
    });
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      if (from.name === "" && to.name === 'init') {
        App.fromNotification = 1;
      } else {
        App.previousState = from.name;
      }
      App.currentState = to.name;
    });
    $rootScope.$on('$stateChangeStart', function(ev, toState, toParams, fromState, fromParams) {
      if (fromState.name === 'init' && toState.name === 'landingvideo') {
        ev.preventDefault();
      }
    });
  }
]);
