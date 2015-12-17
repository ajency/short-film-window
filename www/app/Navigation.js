angular.module('SFWApp.navigate', []).controller('navigateCtrl', [function() {}]).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('home', {
      url: '/sidebar',
      abstract: true,
      controller: 'sidebarCtrl',
      templateUrl: 'views/home/home.html'
    }).state('popular', {
      url: '/popular',
      parent: 'home',
      views: {
        "popularContent": {
          templateUrl: 'views/tabs/popular/popular.html',
          controller: 'popularCtrl'
        }
      }
    }).state('genre', {
      url: '/genre',
      parent: 'home',
      views: {
        "genreContent": {
          templateUrl: 'views/tabs/genre/genre.html',
          controller: 'genreCtrl'
        }
      }
    }).state('playlist', {
      url: '/playlist',
      parent: 'home',
      views: {
        "playlistContent": {
          templateUrl: 'views/tabs/playlist/playlist.html',
          controller: 'playlistCtrl'
        }
      }
    }).state('init', {
      url: '/init',
      cache: false,
      controller: 'InitCtrl',
      templateUrl: 'views/singlevideo/movieScreen.html'
    }).state('singlePlayer', {
      url: '/singlePlayer',
      cache: false,
      controller: 'playerCtrl',
      templateUrl: 'views/singlevideo/singlePlayer.html'
    }).state('landingvideo', {
      url: '/landing',
      cache: false,
      controller: 'landingCtrl',
      templateUrl: 'views/landingVideo/splash.html'
    }).state('singleGenre', {
      url: '/singleGenre',
      cache: false,
      controller: 'singleGenre',
      templateUrl: 'views/tabs/genre/singleGenre.html'
    }).state('filterGenreCtrl', {
      url: '/filterGenreCtrl',
      cache: false,
      controller: 'filterGenreCtrl',
      templateUrl: 'views/filterPopup/filterPopup.html'
    });
  }
]);
