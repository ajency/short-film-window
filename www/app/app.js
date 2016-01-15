angular.module('SFWApp', ['ionic', 'ngCordova', 'SFWApp.landing', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global', 'SFWApp.sidebar', 'SFWApp.services', 'ngSanitize', 'SFWApp.singlePlayer', 'SFWApp.VideoDetailsAPI', 'SFWApp.tabs', 'ion-sticky', 'ionicLazyLoad', 'ionic.ion.imageCacheFactory', 'vimeoEmbed', 'SFWApp.storage', 'SFWApp.watchlist']).value('ParseConfiguration', {
  applicationId: '2T1prpN7BMpV0QcVNJS6BDuDr1jmgy0bspF8TY1E',
  javascriptKey: 'ZjvDbNoggTgKtbIJW8asuVw8huGoEBPVvcKbbXru',
  clientKey: 'qm7Z3fHnfXRrN2kirOySQXoiOWixKkLj7yeZeDJo',
  USING_PARSE: true,
  initialized: false
}).run([
  '$ionicPlatform', '$state', '$rootScope', 'App', '$timeout', 'Set_Get', '$cordovaSplashscreen', '$window', '$cordovaNetwork', '$cordovaToast', 'ParseService', 'DetailsAPI', function($ionicPlatform, $state, $rootScope, App, $timeout, Set_Get, $cordovaSplashscreen, $window, $cordovaNetwork, $cordovaToast, ParseService, DetailsAPI) {
    var device_height, device_width, firstScriptTag, swiper, tag;
    $ionicPlatform.ready(function() {
      $rootScope.isAndroid = ionic.Platform.isAndroid();
      return ParseService.initialize().then(function() {
        return ParseService.getInstallationId();
      }).then(function(_response) {
        return ParseService.registerCallback(function(pnObj) {
          return console.log('in assigned callback ' + JSON.stringify(pnObj));
        });
      }).then(function(success) {
        return console.log('Parse callback registered ' + success);
      }, function(_error) {
        return console.log(_error);
      });
    });
    $window.onNotification = function(pnObj) {
      console.log('notifications: ' + JSON.stringify(pnObj));
      if (pnObj.receivedInForeground === false) {
        DetailsAPI.videoId = 565;
        return $state.go('init');
      }
    };
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
