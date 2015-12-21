angular.module('SFWApp', ['ionic', 'ngCordova', 'SFWApp.landing', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global', 'SFWApp.sidebar', 'ngSanitize', 'SFWApp.singlePlayer', 'SFWApp.VideoDetailsAPI', 'SFWApp.tabs']).run([
  '$rootScope', 'App', '$timeout', 'Set_Get', '$cordovaSplashscreen', function($rootScope, App, $timeout, Set_Get, $cordovaSplashscreen) {
    var firstScriptTag, swiper, tag;
    tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    $rootScope.App = App;
    swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
    });
    $timeout(function() {
      App.navigate('landingvideo', {}, {});
    }, 3000);
    return $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      App.previousState = from.name;
      return App.currentState = to.name;
    });
  }
]);
