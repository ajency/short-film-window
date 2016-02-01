angular.module('SFWApp', ['ionic', 'ngCordova', 'ngAnimate', 'SFWApp.landing', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global', 'SFWApp.sidebar', 'SFWApp.services', 'ngSanitize', 'SFWApp.singlePlayer', 'SFWApp.VideoDetailsAPI', 'SFWApp.tabs', 'ion-sticky', 'ionicLazyLoad', 'ionic.ion.imageCacheFactory', 'vimeoEmbed', 'SFWApp.storage', 'SFWApp.watchlist', 'SFWApp.directives']).value('ParseConfiguration', {
  applicationId: 'DMhdPZNQAUzklzpPb9Lhp8qHZFjcVU9klP0jxLsO',
  javascriptKey: 'TTrki92xoLK7s4POTGeFk4i2Ynm8tPbPl7QrKl7K',
  clientKey: 'gsGvDg9ZkEqzwqYZiFsTZZsMQxdCQ9EcNbrTWAY5',
  masterKey: 'LALmaz73J44ndeC2n7vuuySMVLGHUSTEQADmJPKN',
  installationId: ''
}).run([
  '$ionicPlatform', '$state', '$rootScope', 'App', '$timeout', 'Set_Get', '$cordovaSplashscreen', '$window', '$cordovaNetwork', '$cordovaToast', 'DetailsAPI', 'ParseConfiguration', 'InitialiseService', function($ionicPlatform, $state, $rootScope, App, $timeout, Set_Get, $cordovaSplashscreen, $window, $cordovaNetwork, $cordovaToast, DetailsAPI, ParseConfiguration, InitialiseService) {
    var device_height, device_width, firstScriptTag, tag;
    $ionicPlatform.ready(function() {
      if (App.isOnline()) {
        InitialiseService.initialize().then(function(response) {
         // $cordovaSplashscreen.hide();
          return App.navigate('popular');
        })["finally"](function() {
          return console.log('finally');
        });
      } else {
        $cordovaToast.show('No internet availability', 'long', 'bottom').then(function() {
          $cordovaSplashscreen.hide();
          return App.navigate('popular');
        });
      }
      return Parse.initialize(ParseConfiguration.applicationId, ParseConfiguration.javascriptKey, ParseConfiguration.masterKey);
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
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      if (to.name === 'notifications') {
        $rootScope.pageHeader = 'Notifications';
        return;
      } else {
        $rootScope.pageHeader = 'Shortfilm Window';
        return;
      }
      if (from.name === "" && to.name === 'init') {
        App.fromNotification = 1;
      } else {
        App.previousState = from.name;
      }
      App.currentState = to.name;
    });
    return $rootScope.$on('$stateChangeStart', function(ev, toState, toParams, fromState, fromParams) {
      if (fromState.name === 'init' && toState.name === 'landingvideo') {
        ev.preventDefault();
      }
    });
  }
]).config([
  '$ionicConfigProvider', function($ionicConfigProvider) {
    return $ionicConfigProvider.views.forwardCache(true);
  }
]);
