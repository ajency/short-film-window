angular.module('SFWApp.navigate', []).controller('navigateCtrl', [function() {}]).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('home', {
      url: '/sidebar',
      cache: true,
      controller: 'sidebarCtrl',
      templateUrl: 'views/home/home.html'
    }).state('init', {
      url: '/init',
      cache: true,
      controller: 'InitCtrl',
      templateUrl: 'views/singlevideo/movieScreen.html'
    }).state('singlePlayer', {
      url: '/singlePlayer',
      cache: true,
      controller: 'playerCtrl',
      templateUrl: 'views/singlevideo/singlePlayer.html'
    }).state('landingvideo', {
      url: '/landing',
      cache: true,
      controller: 'landingCtrl',
      templateUrl: 'views/landingVideo/splash.html'
    });
  }
]);
