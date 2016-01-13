angular.module('SFWApp.navigate', []).controller('navigateCtrl', [function() {}]).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('home', {
      url: '/sidebar',
      abstract: true,
      controller: 'sidebarCtrl',
      templateUrl: 'views/home/home.html'
    }).state('tabhome', {
      url: '/homeTab',
      parent: 'home',
      abstract: true,
      views: {
        "homeview": {
          templateUrl: 'views/home/homeTab.html'
        }
      }
    }).state('popular', {
      url: '/popular',
      parent: 'tabhome',
      views: {
        "popularContent": {
          templateUrl: 'views/tabs/popular/popular.html',
          controller: 'popularCtrl'
        }
      }
    }).state('genre', {
      url: '/genre',
      parent: 'tabhome',
      views: {
        "genreContent": {
          templateUrl: 'views/tabs/genre/genre.html',
          controller: 'genreCtrl',
          params: {
            'data': null
          }
        }
      }
    }).state('playlist', {
      url: '/playlist',
      parent: 'tabhome',
      views: {
        "playlistContent": {
          templateUrl: 'views/tabs/playlist/playlist.html',
          controller: 'playlistCtrl'
        }
      }
    }).state('watchList', {
      url: '/watchList',
      parent: 'home',
      views: {
        "homeview": {
          templateUrl: 'views/watchlist/myWatchlist.html',
          controller: 'watchlistCtrl'
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
    }).state('navbar', {
      url: '/navbar',
      abstract: false,
      templateUrl: 'views/home/navBar.html'
    }).state('singleGenre', {
      url: '/singleGenre',
      cache: false,
      controller: 'singleGenre',
      templateUrl: 'views/tabs/genre/singleGenre.html'
    }).state('singlePlaylist', {
      url: '/singlePlaylist',
      cache: false,
      controller: 'singlePlaylist',
      templateUrl: 'views/tabs/playlist/singlePlaylist.html'
    });
  }
]);
