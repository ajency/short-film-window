angular.module('SFWApp', ['ionic', 'ngCordova', 'SFWApp.landing', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global', 'SFWApp.sidebar', 'ngSanitize', 'SFWApp.singlePlayer', 'SFWApp.VideoDetailsAPI', 'SFWApp.tabs', 'SFWApp.submit', 'ion-sticky', 'ionicLazyLoad', 'ionic.ion.imageCacheFactory', 'vimeoEmbed', 'SFWApp.storage', 'SFWApp.watchlist']).run([
  '$rootScope', 'App', '$timeout', 'Set_Get', '$cordovaSplashscreen', '$window', '$cordovaNetwork', '$cordovaToast', function($rootScope, App, $timeout, Set_Get, $cordovaSplashscreen, $window, $cordovaNetwork, $cordovaToast) {
    var device_height, device_width, firstScriptTag, swiper, tag;
    console.log("run method called");
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
    $timeout(function() {
      App.navigate('landingvideo');
    }, 5000);
    return $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      App.previousState = from.name;
      return App.currentState = to.name;
    });
  }
]);
