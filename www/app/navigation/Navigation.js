shortFilmWindow.controller('navigateCtrl', [function() {}]).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('appInitialize', {
      url: '/appInitialize',
      abstract: false,
      controller: 'appInitializeCtrl',
      templateUrl: 'landingVideo/appInitialize.html'
    }).state('home', {
      url: '/sidebar',
      cache: false,
      controller: 'sidebarCtrl',
      templateUrl: 'home/home.html'
    }).state('tabhome', {
      url: '/homeTab',
      parent: 'home',
      abstract: true,
      views: {
        "homeview": {
          templateUrl: 'home/homeTab.html'
        }
      }
    }).state('popular', {
      url: '/popular',
      parent: 'tabhome',
      views: {
        "popularContent": {
          templateUrl: 'tabs/popular/popular.html',
          controller: 'popularCtrl'
        }
      }
    }).state('genre', {
      cache: true,
      url: '/genre',
      parent: 'tabhome',
      views: {
        "genreContent": {
          templateUrl: 'tabs/genre/genre.html',
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
          templateUrl: 'tabs/playlist/playlist.html',
          controller: 'playlistCtrl'
        }
      }
    }).state('watchList', {
      url: '/watchList',
      cache: false,
      parent: 'home',
      views: {
        "homeview": {
          templateUrl: 'watchlist/myWatchlist.html',
          controller: 'watchlistCtrl'
        }
      }
    }).state('notifications', {
      url: '/notifications',
      cache: false,
      parent: 'home',
      views: {
        "homeview": {
          templateUrl: 'notification/notifications.html',
          controller: 'notificationsCtrl'
        }
      }
    }).state('init', {
      url: '/init',
      cache: false,
      controller: 'InitCtrl',
      templateUrl: 'singlevideo/movieScreen.html'
    }).state('singlePlayer', {
      url: '/singlePlayer',
      cache: false,
      controller: 'playerCtrl',
      templateUrl: 'singlevideo/singlePlayer.html'
    }).state('landingvideo', {
      url: '/landing',
      cache: false,
      controller: 'landingCtrl',
      templateUrl: 'landingVideo/splash.html'
    }).state('navbar', {
      url: '/navbar',
      abstract: false,
      templateUrl: 'home/navBar.html'
    }).state('singleGenre', {
      url: '/singleGenre',
      cache: false,
      controller: 'singleGenre',
      templateUrl: 'tabs/genre/singleGenre.html'
    }).state('singlePlaylist', {
      url: '/singlePlaylist',
      cache: false,
      controller: 'singlePlaylist',
      templateUrl: 'tabs/playlist/singlePlaylist.html'
    });
  }
]);
