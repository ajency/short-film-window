angular.module('SFWApp', ['ionic', 'ngCordova', 'ngAnimate', 'SFWApp.landing', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global', 'SFWApp.sidebar', 'SFWApp.services', 'ngSanitize', 'SFWApp.singlePlayer', 'SFWApp.VideoDetailsAPI', 'SFWApp.tabs', 'ion-sticky', 'ionicLazyLoad', 'ionic.ion.imageCacheFactory', 'vimeoEmbed', 'SFWApp.storage', 'SFWApp.watchlist']).value('ParseConfiguration', {
  applicationId: '2T1prpN7BMpV0QcVNJS6BDuDr1jmgy0bspF8TY1E',
  javascriptKey: 'ZjvDbNoggTgKtbIJW8asuVw8huGoEBPVvcKbbXru',
  clientKey: 'qm7Z3fHnfXRrN2kirOySQXoiOWixKkLj7yeZeDJo'
}).run([
  '$ionicPlatform', '$state', '$rootScope', 'App', '$timeout', 'Set_Get', '$cordovaSplashscreen', '$window', '$cordovaNetwork', '$cordovaToast', 'DetailsAPI', 'ParseConfiguration', function($ionicPlatform, $state, $rootScope, App, $timeout, Set_Get, $cordovaSplashscreen, $window, $cordovaNetwork, $cordovaToast, DetailsAPI, ParseConfiguration) {
    var device_height, device_width, firstScriptTag, swiper, tag;
    $ionicPlatform.ready(function() {
      $rootScope.isAndroid = ionic.Platform.isAndroid();
      ParsePushPlugin.on('receivePN', function(pn) {
        console.log('yo i got this push notification:' + JSON.stringify(pn));
        return $rootScope.$broadcast('receivePN', {
          payload: pn
        });
      });
      return ParsePushPlugin.on('openPN', function(pn) {
        console.log('Yo, I get this when the user clicks open a notification from the tray:' + JSON.stringify(pn));
        return $rootScope.$broadcast('openPN', {
          payload: pn
        });
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
    $timeout(function() {
      return App.navigate('landingvideo');
    }, 3000);
  }
]);
