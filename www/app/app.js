var URL, device_height, device_width;

URL = 'http://shortfilm.staging.wpengine.com';

device_width = '';

device_height = '';

var shortFilmWindow;

shortFilmWindow = angular.module('SFWApp', ['ionic', 'ngCordova', 'ngAnimate', 'ngSanitize', 'ion-sticky', 'ionicLazyLoad', 'vimeoEmbed', 'ionic.ion.imageCacheFactory', 'templates']);

shortFilmWindow.value('ParseConfiguration', {
  applicationId: 'DMhdPZNQAUzklzpPb9Lhp8qHZFjcVU9klP0jxLsO',
  javascriptKey: 'TTrki92xoLK7s4POTGeFk4i2Ynm8tPbPl7QrKl7K',
  clientKey: 'gsGvDg9ZkEqzwqYZiFsTZZsMQxdCQ9EcNbrTWAY5',
  masterKey: 'LALmaz73J44ndeC2n7vuuySMVLGHUSTEQADmJPKN',
  installationId: ''
});

shortFilmWindow.run([
  '$ionicPlatform', '$state', '$rootScope', 'App', '$timeout', '$window', '$cordovaNetwork', '$cordovaToast', 'DetailsAPI', 'ParseConfiguration', function($ionicPlatform, $state, $rootScope, App, $timeout, $window, $cordovaNetwork, $cordovaToast, DetailsAPI, ParseConfiguration) {
    $ionicPlatform.ready(function() {
      var device_height, device_width;
      $rootScope.App = App;
      device_width = $window.innerWidth;
      device_height = $window.innerHeight;
      return App.navigate('appInitialize');
    });
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      if (to.name === 'notifications') {
        $rootScope.pageHeader = 'Notifications';
      } else {
        $rootScope.pageHeader = 'Shortfilm Window';
      }
      if (from.name === "" && to.name === 'init') {
        App.fromNotification = 1;
      } else {
        App.previousState = from.name;
      }
      return App.currentState = to.name;
    });
    return $rootScope.$on('$stateChangeStart', function(ev, toState, toParams, fromState, fromParams) {
      if (fromState.name !== '' && toState.name === 'appInitialize') {
        console.log('prevent');
        return ev.preventDefault();
      }
    });
  }
]);

shortFilmWindow.controller('watchlistCtrl', [
  '$scope', 'Storage', 'DetailsAPI', 'App', '$window', '$ionicScrollDelegate', '$timeout', function($scope, Storage, DetailsAPI, App, $window, $ionicScrollDelegate, $timeout) {
    $scope.watchlistDetails = [];
    $scope.display = 'loader';
    $scope.watchFlag = '0';
    $scope.refreshSwiper = true;
    $scope.addvideoDetails = [];
    $scope.init = function() {
      return $scope.getData();
    };
    $scope.getData = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var device_height, device_width;
        $scope.watchlistDetails = value;
        if (_.isNull($scope.watchlistDetails)) {
          $scope.display = 'no_result';
          return $scope.$apply();
        } else {
          if ($scope.watchlistDetails.length > 0) {
            device_width = $window.innerWidth;
            device_height = $window.innerHeight;
            console.log(device_width);
            console.log(device_height);
            $scope.used_height = 43 + 72;
            $scope.hgt = device_height - $scope.used_height;
            $scope.display = 'result';
            return $scope.$apply();
          } else {
            $scope.display = 'no_result';
            return $scope.$apply();
          }
        }
      });
    };
    $scope.updatewatchlist = function(Id) {
      console.log(Id);
      $scope.CheckWatchlist(Id);
      return $ionicScrollDelegate.resize();
    };
    $scope.singleplay = function(videoid) {
      console.log(videoid);
      DetailsAPI.videoId = videoid;
      console.log(DetailsAPI.videoId);
      console.log("enterd single play .");
      return App.navigate('init');
    };
    $scope.singlePlayService = function(videoData) {
      console.log(videoData);
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
    return $scope.CheckWatchlist = function(Id) {
      var matchIndex;
      matchIndex = _.findLastIndex($scope.watchlistDetails, {
        "movie_id": Id
      });
      console.log('remove from watchlist', matchIndex);
      $scope.watchlistDetails.splice(matchIndex, 1);
      Storage.watchlistDetails('set', $scope.watchlistDetails);
      if (_.isNull($scope.watchlistDetails) || $scope.watchlistDetails.length === 0) {
        return $scope.display = 'no_result';
      } else {
        $scope.refreshSwiper = false;
        return $timeout((function() {
          var device_height, device_width;
          $scope.refreshSwiper = true;
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          console.log(device_width);
          console.log(device_height);
          $scope.used_height = 43 + 72;
          return $scope.hgt = device_height - $scope.used_height;
        }), 100);
      }
    };
  }
]);

shortFilmWindow.factory('App', [
  '$state', '$ionicHistory', '$window', '$cordovaNetwork', function($state, $ionicHistory, $window, $cordovaNetwork) {
    var App;
    App = void 0;
    return App = {
      start: true,
      unreadNotifications: 0,
      menuEnabled: {
        left: false,
        right: false
      },
      previousState: '',
      currentState: '',
      fromNotification: 0,
      notificationPayload: [],
      navigate: function(state, params, opts) {
        var animate, back;
        animate = void 0;
        back = void 0;
        if (params === null) {
          params = {};
        }
        if (opts === null) {
          opts = {};
        }
        if (!_.isEmpty(opts)) {
          animate = _.has(opts, 'animate') ? opts.animate : false;
          back = _.has(opts, 'back') ? opts.back : false;
          $ionicHistory.nextViewOptions({
            disableAnimate: !animate,
            disableBack: !back
          });
        }
        return $state.go(state, params);
      },
      getbackView: function() {
        return console.log($ionicHistory.backView());
      },
      goBack: function(count) {
        if (this.fromNotification) {
          this.fromNotification = 0;
          return $state.go("popular");
        } else {
          return $ionicHistory.goBack(count);
        }
      },
      isAndroid: function() {
        return ionic.Platform.isAndroid();
      },
      isIOS: function() {
        return ionic.Platform.isIOS();
      },
      isWebView: function() {
        return ionic.Platform.isWebView();
      },
      isOnline: function() {
        if (this.isWebView()) {
          console.log($cordovaNetwork.getNetwork());
          return $cordovaNetwork.isOnline();
        } else {
          return navigator.onLine;
        }
      },
      deviceUUID: function() {
        if (this.isWebView()) {
          return device.uuid;
        } else {
          return 'DUMMYUUID';
        }
      },
      hideKeyboardAccessoryBar: function() {
        if ($window.cordova && $window.cordova.plugins.Keyboard) {
          return $cordovaKeyboard.hideAccessoryBar(true);
        }
      }
    };
  }
]);

shortFilmWindow.directive('ajError', [
  function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/Global/error.html',
      scope: {
        tapToRetry: '&',
        errorType: '='
      },
      link: function(scope, el, attr) {
        var button, errorMsg, errorTitle;
        switch (scope.errorType) {
          case 'offline':
            errorMsg = 'No internet availability';
            errorTitle = 'Error';
            button = 'Retry';
            break;
          case 'server_error':
            errorMsg = 'Could not connect to server';
            break;
          case 'no_Search_result':
            errorMsg = 'No results found';
            errorTitle = 'Result';
            button = 'Close';
            break;
          default:
            errorMsg = 'Something Went Wrong';
            errorTitle = 'Error';
            button = 'Retry';
        }
        scope.errorMsg = errorMsg;
        scope.errorTitle = errorTitle;
        scope.button = button;
        return scope.onTryAgain = function() {
          return scope.tapToRetry();
        };
      }
    };
  }
]);

shortFilmWindow.factory('share', [
  '$q', 'App', '$http', function($q, App, $http) {
    var share;
    share = {};
    share.shareNative = function() {
      console.log("Sharing video");
      if (window.plugins && window.plugins.socialsharing) {
        return window.plugins.socialsharing.share('I\'ll be attending the session:.', 'PhoneGap Day 2014', null, 'http://pgday.phonegap.com/us2014', (function() {
          return console.log('Success');
        }), function(error) {
          return console.log('Share fail ' + error);
        });
      } else {
        return console.log('Share plugin not available');
      }
    };
    return share;
  }
]);

shortFilmWindow.controller('playerCtrl', [
  '$scope', '$sce', 'DetailsAPI', '$ionicHistory', 'App', '$timeout', function($scope, $sce, DetailsAPI, $ionicHistory, App, $timeout) {
    var onPlayerReady, onPlayerStateChange, stopVideo;
    $scope.videoDetails = DetailsAPI.singleVideoarray;
    $scope.videourl = $scope.videoDetails.singleVideoarray.videourl;
    console.log($scope.videourl);
    $scope.switchHeaderBar = true;
    $timeout(function() {
      return $scope.switchHeaderBar = !$scope.switchHeaderBar;
    }, 5000);
    $scope.toggleHeader = function() {
      $scope.switchHeaderBar = !$scope.switchHeaderBar;
      return $timeout(function() {
        $scope.switchHeaderBar = !$scope.switchHeaderBar;
        return $scope.$apply();
      }, 5000);
    };
    $scope.view = {
      back: function() {
        var count;
        count = -1;
        return App.goBack(count);
      },
      vType: $scope.videoDetails.singleVideoarray.type,
      vimomeo: true,
      init: function() {
        var modifiedUrl, player;
        if (this.vType === 'vimeo') {
          modifiedUrl = $scope.videoDetails.singleVideoarray.embedurl;
          this.vimomeo = true;
          return $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);
        } else {
          this.vimomeo = false;
          return player = new YT.Player('player2', {
            height: '100%',
            width: '100%',
            videoId: $scope.videourl,
            playerVars: {
              'autoplay': 1,
              'rel': 0,
              'wmode': 'transparent',
              'modestbranding': 1
            },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }
      }
    };
    onPlayerReady = function(event) {
      return event.target.playVideo();
    };
    onPlayerStateChange = function(event) {
      var done;
      if (event.data === YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        return done = true;
      }
    };
    return stopVideo = function() {
      return player.stopVideo();
    };
  }
]);

shortFilmWindow.factory('DetailsAPI', [
  '$q', 'App', '$http', '$ImageCacheFactory', function($q, App, $http, $ImageCacheFactory) {
    var DetailsAPI;
    DetailsAPI = {};
    DetailsAPI.videoId = '';
    DetailsAPI.array_addition = [];
    DetailsAPI.array_noteworthy = [];
    DetailsAPI.array_awplaylist = [];
    DetailsAPI.genre_array = [];
    DetailsAPI.playlist_array = [];
    DetailsAPI.Global_array = [];
    DetailsAPI.GlobalChild_array = [];
    DetailsAPI.Filter = [];
    DetailsAPI.Sort = [];
    DetailsAPI.array = [];
    DetailsAPI.singleVideoarray = [];
    DetailsAPI.imagArray = [];
    DetailsAPI.initialize = 0;
    DetailsAPI.GetVideoDetails = function() {
      var defer;
      defer = $q.defer();
      $http.get(URL + '/wp-json/get_defaults').then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.GetSingleVideo = function(VideoId) {
      var defer;
      defer = $q.defer();
      $http.get(URL + ("/wp-json/get_video?id=" + VideoId)).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.searchResult = function(txt) {
      var defer;
      defer = $q.defer();
      $http.get(URL + ("/wp-json/search?str=" + txt)).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.setData = function(opts) {
      if (opts == null) {
        opts = {};
      }
      DetailsAPI.array = opts.premiere;
      DetailsAPI.array_addition = opts.new_addition;
      DetailsAPI.array_noteworthy = opts.noteworthy;
      DetailsAPI.array_awplalist = opts.awesome_playlist;
      DetailsAPI.genre_array = opts.genre;
      DetailsAPI.playlist_array = opts.playlist;
      return DetailsAPI.initialize = 1;
    };
    return DetailsAPI;
  }
]);

shortFilmWindow.factory('PulltorefreshAPI', [
  '$q', 'App', '$http', 'DetailsAPI', function($q, App, $http, DetailsAPI) {
    var PulltorefreshAPI;
    PulltorefreshAPI = {};
    PulltorefreshAPI.pullrequest = function() {
      var defer;
      defer = $q.defer();
      $http.get(URL + '/wp-json/get_defaults').then(function(data) {
        console.log('succ');
        console.log(data);
        return defer.resolve(data.data);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    PulltorefreshAPI.saveData = function(opts) {
      if (opts == null) {
        opts = {};
      }
      console.log(opts);
      DetailsAPI.array = opts.premiere;
      DetailsAPI.array_addition = opts.new_addition;
      DetailsAPI.array_noteworthy = opts.noteworthy;
      DetailsAPI.array_awplalist = opts.awesome_playlist;
      DetailsAPI.genre_array = opts.genre;
      return DetailsAPI.playlist_array = opts.playlist;
    };
    return PulltorefreshAPI;
  }
]);

shortFilmWindow.directive('isLoaded', function() {
  return {
    scope: false,
    restrict: 'A',
    link: function(scope, elements, args) {
      if (scope.$last) {
        scope.$emit('content-changed');
        return console.log('page Is Ready!');
      }
    }
  };
});

shortFilmWindow.directive('scrollWatch', function($rootScope) {
  return function(scope, elem, attr) {
    var start, threshold;
    start = 0;
    threshold = 150;
    return elem.bind('scroll', function(e) {
      if (e.detail.scrollTop - start > threshold) {
        $rootScope.slideHeader = true;
      } else {
        $rootScope.slideHeader = false;
      }
      if ($rootScope.slideHeaderPrevious >= e.detail.scrollTop - start) {
        $rootScope.slideHeader = false;
      }
      $rootScope.slideHeaderPrevious = e.detail.scrollTop - start;
      return $rootScope.$apply();
    });
  };
});

shortFilmWindow.directive('swiper', function() {
  return {
    link: function(scope, element, attr) {
      return scope.$on('content-changed', function() {
        return new Swiper(element, {
          direction: 'vertical',
          pagination: '.swiper-pagination',
          paginationClickable: true
        });
      });
    }
  };
});

shortFilmWindow.controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', '$ionicLoading', '$ionicHistory', 'share', 'Storage', 'InitialiseService', 'ParseNotificationService', '$rootScope', function($scope, $sce, App, DetailsAPI, $ionicLoading, $ionicHistory, share, Storage, InitialiseService, ParseNotificationService, $rootScope) {
    var onPlayerReady, onPlayerStateChange, stopVideo;
    $scope.Videodetails = [];
    $scope.addvideoDetails = [];
    $scope.getwatchlistDetails = [];
    $scope.watchFlag = '0';
    $scope.intFlag = '0';
    $scope.watchlistimg = '';
    $scope.showLoaderOrSynopsis = true;
    $scope.showVideo = false;
    $scope.share = function() {
      console.log("social sharing ");
      return share.shareNative();
    };
    $scope.addwatchlist = function() {
      return $scope.CheckWatchlist();
    };
    $scope.checkIfaddedlist = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var i;
        console.log(value);
        $scope.getwatchlistDetails = value;
        if (_.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length === 0) {
          console.log("new video  entry");
          $scope.watchlistimg = 'icon-favorite';
          return $scope.$apply();
        } else {
          i = 0;
          while (i < $scope.getwatchlistDetails.length) {
            if ($scope.getwatchlistDetails[i].movie_id === $scope.Videodetails.movie_id) {
              console.log("Movie already added ");
              $scope.intFlag = '1';
            } else {
              console.log("New movie entry ");
            }
            i++;
          }
          if ($scope.intFlag === '1') {
            $scope.watchlistimg = 'icon-unfavorite';
            return $scope.$apply();
          } else {
            $scope.watchlistimg = 'icon-favorite';
            return $scope.$apply();
          }
        }
      });
    };
    $scope.CheckWatchlist = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var matchIndex, wl;
        $scope.getwatchlistDetails = value;
        if (_.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length === 0) {
          console.log('first entry');
          $scope.addvideoDetails.push(DetailsAPI.singleVideoarray);
          Storage.watchlistDetails('set', $scope.addvideoDetails);
          $scope.watchlistimg = 'icon-unfavorite';
          return $scope.$apply();
        } else {
          console.log('some data present');
          matchIndex = _.findLastIndex($scope.getwatchlistDetails, {
            "movie_id": DetailsAPI.singleVideoarray.movie_id
          });
          if (matchIndex !== -1) {
            console.log('remove from watchlist');
            $scope.getwatchlistDetails.splice(matchIndex, 1);
            wl = $scope.getwatchlistDetails;
            $scope.addvideoDetails = wl;
            Storage.watchlistDetails('set', $scope.addvideoDetails);
            $scope.watchlistimg = 'icon-favorite';
            return $scope.$apply();
          } else {
            console.log('add');
            $scope.getwatchlistDetails.push(DetailsAPI.singleVideoarray);
            wl = $scope.getwatchlistDetails;
            $scope.addvideoDetails = wl;
            Storage.watchlistDetails('set', $scope.addvideoDetails);
            $scope.watchlistimg = 'icon-unfavorite';
            return $scope.$apply();
          }
        }
      });
    };
    $scope.init = function(movieId) {
      if (movieId == null) {
        movieId = '';
      }
      console.log(movieId);
      if (!angular.isUndefined(DetailsAPI.singleVideoarray.movie_id)) {
        $scope.display = 'result';
        $scope.Videodetails = DetailsAPI.singleVideoarray.singleVideoarray;
        console.log($scope.Videodetails);
        DetailsAPI.GetSingleVideo(DetailsAPI.singleVideoarray.movie_id).then(function(data) {
          $scope.showLoaderOrSynopsis = false;
          return document.getElementById('synopsis').outerHTML = data.content;
        });
        $scope.checkIfaddedlist();
        return $scope.initPlayer();
      } else {
        return DetailsAPI.GetSingleVideo(movieId).then((function(_this) {
          return function(data) {
            var obj;
            $scope.display = 'result';
            obj = {
              "movie_id": data.movie_id,
              "singleVideoarray": data
            };
            DetailsAPI.singleVideoarray = obj;
            $scope.Videodetails = data;
            $scope.Videodetails;
            $scope.showLoaderOrSynopsis = false;
            document.getElementById('synopsis').outerHTML = $scope.Videodetails.content;
            return $scope.initPlayer();
          };
        })(this), (function(_this) {
          return function(error) {
            return $scope.display = 'error';
          };
        })(this));
      }
    };
    $scope.initPlayer = function() {
      var modifiedUrl, player;
      $scope.vType = DetailsAPI.singleVideoarray.singleVideoarray.type;
      $scope.videourl = DetailsAPI.singleVideoarray.singleVideoarray.videourl;
      if ($scope.vType === 'vimeo') {
        modifiedUrl = DetailsAPI.singleVideoarray.singleVideoarray.embedurl;
        console.log(modifiedUrl);
        $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);
        return console.log($scope.player1);
      } else {
        console.log($scope.videourl);
        return player = new YT.Player('player2', {
          height: '100%',
          width: '100%',
          videoId: $scope.videourl,
          playerVars: {
            'autoplay': 0,
            'rel': 0,
            'wmode': 'transparent',
            'modestbranding': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
    };
    onPlayerReady = function(event) {
      return event.target.playVideo();
    };
    onPlayerStateChange = function(event) {
      var done;
      if (event.data === YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        return done = true;
      }
    };
    stopVideo = function() {
      return player.stopVideo();
    };
    $scope.initializeApp = function() {
      console.log(App.notificationPayload.payload.notificationId);
      $scope.display = 'loader';
      return ParseNotificationService.updateNotificationStatus(App.notificationPayload.payload.notificationId).then(function(data) {
        console.log(data);
        return $scope.init(DetailsAPI.videoId);
      })["catch"](function(error) {
        console.log(error);
        return $scope.init(DetailsAPI.videoId);
      });
    };
    $scope.$on('$ionicView.afterEnter', function() {
      return console.log('after enter');
    });
    $scope.view = {
      back: function() {
        var count;
        DetailsAPI.singleVideoarray = [];
        count = -1;
        return App.goBack(count);
      },
      playVideo: function() {
        return $scope.showVideo = true;
      }
    };
    if (App.fromNotification) {
      $scope.initializeApp();
    } else {
      $scope.init();
    }
    return $scope.showSynopsisDiv = false;
  }
]);

shortFilmWindow.controller('appInitializeCtrl', [
  '$scope', 'App', 'DetailsAPI', 'InitialiseService', 'ParseConfiguration', '$rootScope', function($scope, App, DetailsAPI, InitialiseService, ParseConfiguration, $rootScope) {
    return $scope.initApp = function() {
      var firstScriptTag, tag;
      Parse.initialize(ParseConfiguration.applicationId, ParseConfiguration.javascriptKey, ParseConfiguration.masterKey);
      if (App.isWebView()) {
        ParsePushPlugin.getInstallationObjectId(function(id) {
          console.log(id);
          return ParseConfiguration.installationId = id;
        }, function(e) {
          return ParseConfiguration.installationId = 0;
        });
        window.ParsePushPlugin.on('openPN', function(pn) {
          return $rootScope.$broadcast('openNotification', {
            payload: pn
          });
        });
        window.ParsePushPlugin.on('receivePN', function(pn) {
          return $rootScope.$broadcast('receiveNotification', {
            payload: pn
          });
        });
      }
      tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      $scope.display = 'loader';
      $scope.errorType = 'offline';
      return InitialiseService.initialize().then(function(data) {
        if (!App.isOnline()) {
          return $scope.display = 'error';
        } else {
          return App.navigate('popular');
        }
      }, function(error) {
        return $scope.display = 'error';
      });
    };
  }
]);

shortFilmWindow.controller('navigateCtrl', [function() {}]).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('appInitialize', {
      url: '/appInitialize',
      abstract: false,
      controller: 'appInitializeCtrl',
      templateUrl: 'landingVideo/appInitialize.html'
    }).state('home', {
      url: '/sidebar',
      abstract: true,
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

shortFilmWindow.controller('notificationsCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', 'ParseNotificationService', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams, ParseNotificationService) {
    $scope.notificationArray = [];
    $rootScope.$on('receiveNotification', function(event, pn) {
      return $scope.getNotifications();
    });
    $scope.getNotifications = function() {
      if (App.isOnline()) {
        $scope.result = 'loader';
        return ParseNotificationService.getNotificationsWithStatus().then(function(data) {
          if (data.length === 0) {
            return $scope.result = 'no-new-notifications';
          } else {
            $scope.notificationArray = data;
            return $scope.result = 'display';
          }
        })["catch"](function(error) {
          return $scope.result = 'error';
        });
      } else {
        return $scope.result = 'error';
      }
    };
    $scope.clearNotifications = function() {
      if (App.isOnline()) {
        $scope.notificationArray = [];
        $scope.result = 'no-new-notifications';
        $rootScope.unreadNotificationCount = 0;
        return ParseNotificationService.deleteNotifications().then(function(data) {
          return console.log(data);
        })["catch"](function(error) {
          return $scope.result = 'error';
        });
      } else {
        return $scope.result = 'error';
      }
    };
    return $scope.markNotificationAsRead = function(notification_id) {
      var matchIndex;
      if (App.isOnline()) {
        matchIndex = _.findLastIndex($scope.notificationArray, {
          "notificationId": '' + notification_id + ''
        });
        $scope.notificationArray[matchIndex].status = 'read';
        if ($rootScope.unreadNotificationCount) {
          $rootScope.unreadNotificationCount--;
        }
        return ParseNotificationService.updateNotificationStatus(notification_id).then(function(data) {
          return console.log(data);
        })["catch"](function(error) {
          return $scope.result = 'error';
        });
      } else {
        return $scope.result = 'error';
      }
    };
  }
]);

shortFilmWindow.service('InitialiseService', [
  '$q', 'DetailsAPI', 'App', '$rootScope', '$ImageCacheFactory', function($q, DetailsAPI, App, $rootScope, $ImageCacheFactory) {
    return {
      initialize: function() {
        var deferred;
        deferred = void 0;
        deferred = void 0;
        deferred = $q.defer();
        if (App.isOnline()) {
          DetailsAPI.GetVideoDetails().then(function(data) {
            return $rootScope.vData = data;
          }).then(function(data) {
            return $ImageCacheFactory.Cache([data.defaults.content.popular.weekly_premiere.image]).then(function(cachedata) {
              return console.log(cachedata);
            })["finally"](function() {
              return DetailsAPI.setData({
                premiere: $rootScope.vData.defaults.content.popular.weekly_premiere,
                new_addition: $rootScope.vData.defaults.content.popular.new_additions,
                noteworthy: $rootScope.vData.defaults.content.popular.noteworthy,
                awesome_playlist: $rootScope.vData.defaults.content.popular.awesome_playlist,
                genre: $rootScope.vData.defaults.content.genre,
                playlist: $rootScope.vData.defaults.content.playlists
              });
            }).then(function(data) {
              return deferred.resolve($rootScope.vData);
            });
          });
        } else {
          deferred.reject();
        }
        return deferred.promise;
      }
    };
  }
]);

shortFilmWindow.service('ParseNotificationService', [
  '$q', '$window', 'ParseConfiguration', '$rootScope', function($q, $window, ParseConfiguration, $rootScope) {
    return {
      getNotificationsWithStatus: function() {
        var deferred, installation_id;
        deferred = $q.defer();
        installation_id = ParseConfiguration.installationId;
        console.log("******" + installation_id);
        Parse.Cloud.run('listAllNotificationsForUser', {
          "installation_id": installation_id
        }, {
          success: function(results) {
            var notificationArray;
            notificationArray = [];
            _.each(results, function(value) {
              var dt, obj;
              dt = moment(value.attributes.createdAt).format('LLLL');
              obj = {
                "createdAt": dt,
                "notificationId": value.attributes.notificationId.id,
                "installationId": value.attributes.installationId.id,
                "alert": value.attributes.notificationId.attributes.alert,
                "status": value.attributes.status
              };
              return notificationArray.push(obj);
            });
            deferred.resolve(notificationArray);
          },
          error: function(error) {
            deferred.reject(error);
          }
        });
        return deferred.promise;
      },
      getUnreadNotificationsCount: function() {
        var deferred, installation_id;
        deferred = $q.defer();
        installation_id = ParseConfiguration.installationId;
        Parse.Cloud.run('countUnreadNotifications', {
          "installation_id": installation_id
        }, {
          success: function(count) {
            deferred.resolve(count);
          },
          error: function(error) {
            console.log(error);
            deferred.reject('0');
          }
        });
        return deferred.promise;
      },
      updateNotificationStatus: function(notification_id) {
        var deferred, installation_id;
        deferred = $q.defer();
        installation_id = ParseConfiguration.installationId;
        Parse.Cloud.run('updateNotificationStatusAsRead', {
          "installation_id": installation_id,
          "notification_id": notification_id
        }, {
          success: function(results) {
            deferred.resolve(results);
          },
          error: function(error) {
            deferred.reject(error);
          }
        });
        return deferred.promise;
      },
      deleteNotifications: function() {
        var deferred, installation_id;
        deferred = $q.defer();
        installation_id = ParseConfiguration.installationId;
        Parse.Cloud.run('deleteAllNotification', {
          "installation_id": installation_id
        }, {
          success: function(results) {
            deferred.resolve(results);
          },
          error: function(error) {
            deferred.reject(error);
          }
        });
        return deferred.promise;
      }
    };
  }
]);

shortFilmWindow.controller('sidebarCtrl', function($scope, $rootScope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, App, DetailsAPI, $ionicLoading, $window, Storage, ParseNotificationService) {
  $scope.showsearchbar = false;
  $scope.display = 'tabview';
  $scope.errorType = '';
  $scope.SearchResult = [];
  $scope.classname = '';
  $scope.watchListCount = '0';
  $scope.afterSearch = false;
  $rootScope.unreadNotificationCount = 0;
  $scope.getwatchlistDetails = [];
  $scope.checkIfaddedToWatchList = function(movie_id) {
    var match;
    if ($scope.getwatchlistDetails.length > 0) {
      match = _.findIndex($scope.getwatchlistDetails, {
        "movie_id": movie_id
      });
      if (match !== -1) {
        return 'selected';
      } else {
        return 'notselected';
      }
    } else {
      return 'notselected';
    }
  };
  $scope.findIndexInWatchlist = function(movieId) {
    var match;
    return match = _.findIndex($scope.getwatchlistDetails, {
      "movie_id": movieId
    });
  };
  $scope.addwatchlist = function(movieData) {
    var matchInWatchList, obj;
    console.log(movieData);
    obj = {
      "movie_id": movieData.movie_id,
      "singleVideoarray": movieData
    };
    matchInWatchList = $scope.findIndexInWatchlist(movieData.movie_id);
    if (matchInWatchList === -1) {
      $scope.getwatchlistDetails.push(obj);
      return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
    } else {
      $scope.getwatchlistDetails.splice(matchInWatchList, 1);
      return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
    }
  };
  $rootScope.$on('openNotification', function(event, pn) {
    App.fromNotification = 1;
    DetailsAPI.videoId = 131;
    if ($rootScope.unreadNotificationCount) {
      $rootScope.unreadNotificationCount--;
    }
    App.notificationPayload = pn;
    return App.navigate('init');
  });
  $rootScope.$on('receiveNotification', function(event, pn) {
    return $rootScope.unreadNotificationCount++;
  });
  $scope.device_height = $window.innerHeight;
  $scope.hgt = parseInt($scope.device_height) - parseInt(45);
  $scope.getwatchlistcount = function() {
    return Storage.watchlistDetails('get').then(function(value) {
      if (_.isNull(value)) {
        value = [];
      }
      $scope.watchlistDetails = value;
      if ($scope.watchlistDetails.length === 0) {
        $scope.watchListCount = '0';
        return $scope.$apply();
      } else {
        if ($scope.watchlistDetails.length > 0) {
          $scope.watchListCount = $scope.watchlistDetails.length;
          return $scope.$apply();
        } else {
          $scope.watchListCount = '0';
          return $scope.$apply();
        }
      }
    });
  };
  $rootScope.getnotificationcount = function() {
    return ParseNotificationService.getUnreadNotificationsCount().then(function(value) {
      return $rootScope.unreadNotificationCount = value;
    });
  };
  $scope.singlePlayService = function(videoData) {
    DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
    DetailsAPI.singleVideoarray.singleVideoarray = videoData;
    return App.navigate('init');
  };
  $scope.searchMovie = function() {
    return Storage.watchlistDetails('get').then(function(value) {
      var txt, txtvalue;
      if (_.isNull(value)) {
        value = [];
      }
      $scope.watchlistDetails = value;
      console.log($scope.watchlistDetails);
      $scope.afterSearch = false;
      txt = document.getElementById("autocomplete");
      txtvalue = txt.value;
      $scope.display = 'loader';
      return DetailsAPI.searchResult(txtvalue).then((function(_this) {
        return function(data) {
          var device_height, device_width;
          $scope.afterSearch = true;
          $scope.SearchResult = data;
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          $scope.used_height = 32;
          $scope.hgt = device_height - $scope.used_height;
          if ($scope.SearchResult.length === 0) {
            $scope.errorType = 'no_Search_result';
            return $scope.display = 'error';
          } else {
            $scope.classname = 'searchResult';
            return $scope.display = 'searchresult';
          }
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.errorType = 'offline';
          return $scope.display = 'error';
        };
      })(this));
    });
  };
  $scope.onTapToRetry = function() {
    console.log($scope.errorType);
    if ($scope.errorType === '') {
      return $scope.searchMovie();
    } else {
      return $scope.hideSearch();
    }
  };
  $scope.hideSearch = function() {
    console.log("hide Search Bar");
    return $scope.display = 'tabview';
  };
  $scope.SeacrchClicked = function() {
    console.log("search");
    return $scope.showsearchbar = true;
  };
  $scope.hide = function() {
    $ionicLoading.hide();
    return {
      hideOnStateChange: false
    };
  };
  $scope.displayWeb = function(Url) {
    $ionicSideMenuDelegate.toggleLeft();
    window.open(Url, '_system');
    return true;
  };
  $scope.submit = function() {
    return App.navigate("onlineSubmit");
  };
  $scope.slideContent = function() {
    $scope.getwatchlistcount();
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.openModal = function() {
    $scope.taskModal.show();
  };
  $scope.closeModal = function() {
    $scope.taskModal.hide();
  };
  $scope.showPopup = function() {
    var myPopup;
    $scope.data = {};
    myPopup = $ionicPopup.show({
      template: '<input class="padding" type="password" ng-modal="data-wifi">',
      title: 'Enter Wi-Fi Password',
      subTitle: 'Please use normal things',
      scope: $scope,
      buttons: [
        {
          text: 'Cancel'
        }, {
          text: 'Save',
          cssClass: 'test',
          type: 'button-positive'
        }
      ]
    });
  };
});

shortFilmWindow.factory('Storage', [
  '$rootScope', function($rootScope) {
    var Storage;
    Storage = {};
    Storage.watchlistDetails = function(action, params) {
      switch (action) {
        case 'set':
          return localforage.setItem('watchlist_details', params, function(err, value) {
            console.log('update', value);
            return $rootScope.$broadcast('watchListUpdate', params);
          });
        case 'get':
          return localforage.getItem('watchlist_details');
        case 'remove':
          return localforage.removeItem('watchlist_details');
      }
    };
    return Storage;
  }
]);

shortFilmWindow.controller('genreCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams) {
    $scope.notificationPayload = $stateParams.data;
    $scope.doRefresh = function() {
      return PulltorefreshAPI.pullrequest().then((function(_this) {
        return function(data) {
          console.log(data.defaults.content.popular.weekly_premiere.image);
          PulltorefreshAPI.saveData({
            premiere: data.defaults.content.popular.weekly_premiere,
            new_addition: data.defaults.content.popular.new_additions,
            noteworthy: data.defaults.content.popular.noteworthy,
            awesome_playlist: data.defaults.content.popular.awesome_playlist,
            genre: data.defaults.content.genre,
            playlist: data.defaults.content.playlists
          });
          $scope.genre = DetailsAPI.genre_array;
          $scope.$broadcast('scroll.refreshComplete');
          return $ionicLoading.hide();
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.$broadcast('scroll.refreshComplete');
          console.log('Error Loading data');
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.init = function() {
      console.log('in genre');
      $scope.genre = DetailsAPI.genre_array;
      return console.log($scope.genre);
    };
    return $scope.singleGenre = function(genreId) {
      DetailsAPI.videoId = genreId;
      return App.navigate("singleGenre");
    };
  }
]);

shortFilmWindow.factory('GenreAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var GenreAPI;
    GenreAPI = {};
    GenreAPI.GetSingleGenre = function(GenreId) {
      var defer;
      console.log(GenreId);
      defer = $q.defer();
      $http.get(URL + ("/wp-json/get_genre_videos?genre_id=" + GenreId)).then(function(data) {
        console.log('single genre data succ');
        console.log(data);
        return defer.resolve(data.data);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    GenreAPI.ApplyFilter = function(param) {
      var defer;
      console.log(param);
      defer = $q.defer();
      $http.get(URL + ("/wp-json/get_genre_videos?genre_id=" + param[0] + "&sort_key=" + param[1] + "&language_id=" + param[2])).then(function(data) {
        console.log('single video data succ');
        console.log(data);
        return defer.resolve(data.data);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    return GenreAPI;
  }
]);

shortFilmWindow.controller('singleGenre', [
  '$scope', '$ionicLoading', 'App', 'GenreAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', 'Storage', function($scope, $ionicLoading, App, GenreAPI, DetailsAPI, $ionicHistory, share, $window, Storage) {
    $scope.lang = null;
    $scope.sort_key = null;
    $scope.errorType = '';
    $scope.filterimg = 'img/icons/filter_grey.png';
    $scope.sortimg = 'img/icons/sort_notapplied.png';
    $scope.display = 'loader';
    $scope.Popuparray = [];
    $scope.PopuparrayClicked = ['img/icons/fresh_red.png', 'img/icons/popularity_red.png', 'img/icons/length-Red.png'];
    $scope.PopuparrayImages = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
    $scope.share = function() {
      return share.shareNative();
    };
    $scope.checkIfaddedToWatchList = function(movie_id) {
      var match;
      if ($scope.getwatchlistDetails.length > 0) {
        match = _.findIndex($scope.getwatchlistDetails, {
          "movie_id": movie_id
        });
        if (match !== -1) {
          return 'selected';
        } else {
          return 'notselected';
        }
      } else {
        return 'notselected';
      }
    };
    $scope.findIndexInWatchlist = function(movieId) {
      var match;
      return match = _.findIndex($scope.getwatchlistDetails, {
        "movie_id": movieId
      });
    };
    $scope.addwatchlist = function(movieData) {
      var matchInWatchList, obj;
      console.log(movieData);
      obj = {
        "movie_id": movieData.movie_id,
        "singleVideoarray": movieData
      };
      matchInWatchList = $scope.findIndexInWatchlist(movieData.movie_id);
      if (matchInWatchList === -1) {
        $scope.getwatchlistDetails.push(obj);
        return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
      } else {
        $scope.getwatchlistDetails.splice(matchInWatchList, 1);
        return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
      }
    };
    $scope.init = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var device_height, device_width;
        if (_.isNull(value)) {
          value = [];
        }
        $scope.getwatchlistDetails = value;
        console.log(DetailsAPI.GlobalChild_array);
        if (DetailsAPI.GlobalChild_array.length > 0) {
          $scope.genreData = DetailsAPI.GlobalChild_array;
          $scope.genre = DetailsAPI.Global_array;
          $scope.sortData = DetailsAPI.Sort;
          $scope.language = DetailsAPI.Filter;
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          $scope.used_height = 88 + 73;
          $scope.hgt = device_height - $scope.used_height;
          return $scope.display = 'result';
        } else {
          return GenreAPI.GetSingleGenre(DetailsAPI.videoId).then((function(_this) {
            return function(data) {
              DetailsAPI.GlobalChild_array = data.movies;
              DetailsAPI.Global_array = data.genre;
              DetailsAPI.Filter = data.filters.languages;
              DetailsAPI.Sort = data.sort_keys;
              $scope.genreData = data.movies;
              $scope.genre = data.genre;
              $scope.sortData = data.sort_keys;
              $scope.language = data.filters.languages;
              $scope.display = 'result';
              device_width = $window.innerWidth;
              device_height = $window.innerHeight;
              $scope.used_height = 88 + 73;
              return $scope.hgt = device_height + 3 - $scope.used_height;
            };
          })(this), (function(_this) {
            return function(error) {
              return $scope.display = 'error';
            };
          })(this));
        }
      });
    };
    $scope.sortGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/filterPopup/sortPopupgener.html',
        hideOnStateChange: true
      });
    };
    $scope.langSelected = function(language_id) {
      return $scope.lang = language_id;
    };
    $scope.filterGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/filterPopup/filterpopup.html',
        hideOnStateChange: true
      });
    };
    $scope.getId = function(sort_id) {
      $scope.sort_key = sort_id;
      $scope.Popuparray = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
      $scope.Popuparray[sort_id] = $scope.PopuparrayClicked[sort_id];
      $scope.txtcolor = ['', '', ''];
      return $scope.txtcolor[sort_id] = 'color:#AF152F';
    };
    $scope.popup = function() {
      if (_.isNull($scope.sort_key)) {
        return $scope.Popuparray = $scope.PopuparrayImages;
      } else {
        $scope.Popuparray = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
        $scope.Popuparray[$scope.sort_key] = $scope.PopuparrayClicked[$scope.sort_key];
        $scope.txtcolor = ['', '', ''];
        return $scope.txtcolor[$scope.sort_key] = 'color:#AF152F';
      }
    };
    $scope.FiltersortApply = function() {
      var arr;
      console.log($scope.lang);
      console.log($scope.sort_key);
      if (_.isNull($scope.lang)) {
        $scope.filterimg = 'img/icons/filter_grey.png';
      } else {
        $scope.filterimg = 'img/icons/filter_red.png';
      }
      if (_.isNull($scope.sort_key)) {
        $scope.sortimg = 'img/icons/sort_notapplied.png';
      } else {
        $scope.sortimg = $scope.PopuparrayClicked[$scope.sort_key];
      }
      arr = [DetailsAPI.Global_array.genre_id, $scope.sort_key, $scope.lang];
      $ionicLoading.hide();
      ({
        hideOnStateChange: false
      });
      $scope.display = 'loader';
      return GenreAPI.ApplyFilter(arr).then((function(_this) {
        return function(data) {
          DetailsAPI.GlobalChild_array = data.movies;
          DetailsAPI.Global_array = data.genre;
          DetailsAPI.Filter = data.filters.languages;
          DetailsAPI.Sort = data.sort_keys;
          if (DetailsAPI.GlobalChild_array.length > 0) {
            $scope.display = 'result';
          } else {
            $scope.errorType = 'no_Search_result';
            $scope.display = 'error';
          }
          $scope.genreData = data.movies;
          $scope.genre = data.genre;
          $scope.sortData = data.sort_keys;
          $scope.language = data.filters.languages;
          return $ionicLoading.hide();
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.errorType = '';
          $scope.display = 'error';
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.hide = function() {
      $ionicLoading.hide();
      return {
        hideOnStateChange: false
      };
    };
    $scope.reset = function() {
      var arr;
      $scope.sortimg = 'img/icons/sort_notapplied.png';
      $scope.filterimg = 'img/icons/filter_grey.png';
      $scope.sort_key = null;
      $scope.lang = '';
      arr = [DetailsAPI.Global_array.genre_id, $scope.sort_key, $scope.lang];
      $ionicLoading.hide();
      ({
        hideOnStateChange: false
      });
      $scope.display = 'loader';
      return GenreAPI.ApplyFilter(arr).then((function(_this) {
        return function(data) {
          DetailsAPI.GlobalChild_array = data.movies;
          DetailsAPI.Global_array = data.genre;
          DetailsAPI.Filter = data.filters.languages;
          DetailsAPI.Sort = data.sort_keys;
          $scope.genreData = data.movies;
          $scope.genre = data.genre;
          $scope.sortData = data.sort_keys;
          $scope.language = data.filters.languages;
          $ionicLoading.hide();
          return $scope.display = 'result';
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.errorType = '';
          $scope.display = 'error';
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.hideNoReset = function() {
      $scope.sortimg = 'img/icons/sort_notapplied.png';
      $scope.filterimg = 'img/icons/filter_grey.png';
      $scope.sort_key = null;
      $scope.lang = '';
      $ionicLoading.hide();
      return {
        hideOnStateChange: false
      };
    };
    $scope.singlePlayService = function(videoData) {
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
    $scope.back = function() {
      var count;
      DetailsAPI.GlobalChild_array = [];
      DetailsAPI.Global_array = [];
      DetailsAPI.Filter = [];
      DetailsAPI.Sort = [];
      count = -1;
      return App.goBack(count);
    };
    return $scope.view = {
      onTapToRetry: function() {
        $scope.reset();
        return $scope.display = 'loader';
      }
    };
  }
]);

shortFilmWindow.controller('playlistCtrl', [
  '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', function($scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading) {
    $scope.doRefresh = function() {
      return PulltorefreshAPI.pullrequest().then((function(_this) {
        return function(data) {
          console.log(data.defaults.content.popular.weekly_premiere.image);
          PulltorefreshAPI.saveData({
            premiere: data.defaults.content.popular.weekly_premiere,
            new_addition: data.defaults.content.popular.new_additions,
            noteworthy: data.defaults.content.popular.noteworthy,
            awesome_playlist: data.defaults.content.popular.awesome_playlist,
            genre: data.defaults.content.genre,
            playlist: data.defaults.content.playlists
          });
          $scope.playlist = DetailsAPI.playlist_array;
          $scope.$broadcast('scroll.refreshComplete');
          return $ionicLoading.hide();
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.$broadcast('scroll.refreshComplete');
          console.log('Error Loading data');
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.test = function() {
      return $scope.playlist = DetailsAPI.playlist_array;
    };
    return $scope.singleplaylist = function(playlistId) {
      console.log(playlistId);
      DetailsAPI.videoId = playlistId;
      console.log(DetailsAPI.videoId);
      return App.navigate("singlePlaylist");
    };
  }
]);

shortFilmWindow.factory('PlaylistAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var GenreAPI;
    GenreAPI = {};
    GenreAPI.GetSingleplaylist = function(playlistId) {
      var defer;
      defer = $q.defer();
      $http.get(URL + ("/wp-json/get_playlist_videos/?playlist_id=" + playlistId)).then(function(data) {
        var j;
        j = angular.fromJson(data.data);
        return defer.resolve(j);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    return GenreAPI;
  }
]);

shortFilmWindow.controller('singlePlaylist', [
  '$scope', '$rootScope', '$ionicScrollDelegate', '$ionicLoading', 'App', 'PlaylistAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', '$timeout', 'Storage', function($scope, $rootScope, $ionicScrollDelegate, $ionicLoading, App, PlaylistAPI, DetailsAPI, $ionicHistory, share, $window, $timeout, Storage) {
    $scope.display = 'loader';
    $scope.getwatchlistDetails = [];
    $rootScope.slideHeader = false;
    $rootScope.slideHeaderPrevious = 0;
    $scope.checkIfaddedToWatchList = function(movie_id) {
      var match;
      if ($scope.getwatchlistDetails.length > 0) {
        match = _.findIndex($scope.getwatchlistDetails, {
          "movie_id": movie_id
        });
        if (match !== -1) {
          return 'selected';
        } else {
          return 'notselected';
        }
      } else {
        return 'notselected';
      }
    };
    $scope.findIndexInWatchlist = function(movieId) {
      var match;
      return match = _.findIndex($scope.getwatchlistDetails, {
        "movie_id": movieId
      });
    };
    $scope.addwatchlist = function(movieData) {
      var matchInWatchList, obj;
      console.log(movieData);
      obj = {
        "movie_id": movieData.movie_id,
        "singleVideoarray": movieData
      };
      matchInWatchList = $scope.findIndexInWatchlist(movieData.movie_id);
      if (matchInWatchList === -1) {
        $scope.getwatchlistDetails.push(obj);
        return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
      } else {
        $scope.getwatchlistDetails.splice(matchInWatchList, 1);
        return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
      }
    };
    $scope.share = function() {
      return share.shareNative();
    };
    $scope.init = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var device_height, device_width;
        if (_.isNull(value)) {
          value = [];
        }
        $scope.getwatchlistDetails = value;
        if (DetailsAPI.GlobalChild_array.length > 0) {
          $scope.playlistData = DetailsAPI.GlobalChild_array;
          $scope.playlist = DetailsAPI.Global_array;
          $scope.display = 'result';
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          $scope.used_height = 44 + 120;
          $scope.hgt = device_height - $scope.used_height;
          return $scope.headerwidth = device_width - 100 - 27;
        } else {
          $scope.display = 'loader';
          return PlaylistAPI.GetSingleplaylist(DetailsAPI.videoId).then((function(_this) {
            return function(data) {
              DetailsAPI.Global_array = data.playlist;
              DetailsAPI.GlobalChild_array = data.movies;
              $scope.playlistData = data.movies;
              $scope.playlist = data.playlist;
              $scope.display = 'result';
              device_width = $window.innerWidth;
              device_height = $window.innerHeight;
              $scope.used_height = 44 + 120;
              $scope.hgt = device_height - $scope.used_height;
              $scope.headerwidth = device_width - 100 - 27;
              return $ionicLoading.hide();
            };
          })(this), (function(_this) {
            return function(error) {
              $scope.display = 'error';
              return $ionicLoading.hide();
            };
          })(this));
        }
      });
    };
    $scope.singlePlayService = function(videoData) {
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
    return $scope.back = function() {
      var count;
      DetailsAPI.Global_array = [];
      DetailsAPI.GlobalChild_array = [];
      count = -1;
      return App.goBack(count);
    };
  }
]);

shortFilmWindow.controller('popularCtrl', [
  '$scope', '$rootScope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$window', 'InitialiseService', 'Storage', function($scope, $rootScope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $window, InitialiseService, Storage) {
    $scope.getwatchlistDetails = [];
    $rootScope.$on('watchListUpdate', function(event, data) {
      $scope.getwatchlistDetails = data;
      return $scope.checkIfaddedlist();
    });
    $scope.singleplaylist = function(playlistId) {
      DetailsAPI.videoId = playlistId;
      return App.navigate("singlePlaylist");
    };
    $scope.checkIfaddedlist = function() {
      _.each($scope.allContentArray, function(val, key) {
        return $scope.allContentArray[key].addedToWatchList = 0;
      });
      if ($scope.getwatchlistDetails.length > 0) {
        return _.each($scope.getwatchlistDetails, function(watchlistData) {
          var match;
          match = _.findIndex($scope.allContentArray, {
            "movieId": watchlistData.movie_id
          });
          if (match !== -1) {
            return $scope.allContentArray[match].addedToWatchList = 1;
          }
        });
      }
    };
    $scope.findIndexInallContentArray = function(movieId) {
      var match;
      return match = _.findIndex($scope.allContentArray, {
        "movieId": movieId
      });
    };
    $scope.findIndexInWatchlist = function(movieId) {
      var match;
      return match = _.findIndex($scope.getwatchlistDetails, {
        "movie_id": movieId
      });
    };
    $scope.updateFlagInallContentArray = function(movieId, flag) {
      var matchIndex;
      matchIndex = $scope.findIndexInallContentArray(movieId);
      return $scope.allContentArray[matchIndex].addedToWatchList = flag;
    };
    $scope.addwatchlist = function(movieData) {
      var matchInWatchList, obj;
      obj = {
        "movie_id": movieData.movieId,
        "singleVideoarray": movieData.content
      };
      matchInWatchList = $scope.findIndexInWatchlist(movieData.movieId);
      if (matchInWatchList === -1) {
        $scope.updateFlagInallContentArray(movieData.movieId, 1);
        $scope.getwatchlistDetails.push(obj);
        return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
      } else {
        $scope.updateFlagInallContentArray(movieData.movieId, 0);
        $scope.getwatchlistDetails.splice(matchInWatchList, 1);
        return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
      }
    };
    $scope.doRefresh = function() {
      if (!App.isOnline()) {
        return $scope.checkNetwork = false;
      } else {
        return PulltorefreshAPI.pullrequest().then((function(_this) {
          return function(data) {
            $scope.checkNetwork = true;
            PulltorefreshAPI.saveData({
              premiere: data.defaults.content.popular.weekly_premiere,
              new_addition: data.defaults.content.popular.new_additions,
              noteworthy: data.defaults.content.popular.noteworthy,
              awesome_playlist: data.defaults.content.popular.awesome_playlist,
              genre: data.defaults.content.genre,
              playlist: data.defaults.content.playlists
            });
            $scope.premeiere = DetailsAPI.array;
            $scope.addition = DetailsAPI.array_addition;
            $scope.noteworthy = DetailsAPI.array_noteworthy;
            $scope.awplalist = DetailsAPI.array_awplalist;
            $scope.videoId = DetailsAPI.array.videoId;
            $scope.$broadcast('scroll.refreshComplete');
            return $ionicLoading.hide();
          };
        })(this), (function(_this) {
          return function(error) {
            $scope.$broadcast('scroll.refreshComplete');
            if (App.isOnline) {
              $scope.errorType = 'offline';
              $scope.display = 'error';
            } else {
              $scope.classname = 'no_Search_result';
              $scope.display = 'error';
            }
            return $ionicLoading.hide();
          };
        })(this));
      }
    };
    $scope.singleplay = function(videoid) {
      DetailsAPI.videoId = videoid;
      return App.navigate('init');
    };
    $scope.singlePlayService = function(videoData) {
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
    $scope.initApp = function() {
      var device_height, device_width;
      device_width = $window.innerWidth;
      device_height = $window.innerHeight;
      $scope.used_height = 86 + 73;
      $scope.hgt = device_height + 3 - $scope.used_height;
      if (!App.isOnline()) {
        $scope.checkNetwork = false;
        return $scope.display = 'nonetwork';
      } else {
        $scope.initDetailsApi();
        return $scope.display = 'result';
      }
    };
    $scope.initDetailsApi = function() {
      var additionArr, awPlalistArr, noteworthyArr, premierArr;
      premierArr = [];
      additionArr = [];
      noteworthyArr = [];
      awPlalistArr = [];
      $scope.allContentArray = [];
      premierArr.push({
        "order": 1,
        "cardtitle": "Weekly Premiere",
        "p": "Carefully handpicked, just for you.",
        "iconimg": "weekly_premiere",
        "content": DetailsAPI.array,
        "addedToWatchList": 0,
        "movieId": DetailsAPI.array.movie_id
      });
      additionArr = _.map(DetailsAPI.array_addition, function(value, key, list) {
        return {
          "order": 2,
          "cardtitle": "New Additions",
          "p": "Just starting out on their big journey!",
          "iconimg": "new_additions",
          "content": value,
          "addedToWatchList": 0,
          "movieId": value.movie_id
        };
      });
      noteworthyArr = _.map(DetailsAPI.array_noteworthy, function(value, key, list) {
        return {
          "order": 3,
          "cardtitle": "Noteworthy",
          "p": "Completely out of the ordinary",
          "iconimg": "noteworthy",
          "content": value,
          "addedToWatchList": 0,
          "movieId": value.movie_id
        };
      });
      awPlalistArr.push({
        "order": 4,
        "cardtitle": "Awesome Playlist",
        "p": "Sit back and relax with some popcorn!",
        "iconimg": "awesome_playlists",
        "content": DetailsAPI.array_awplalist,
        "addedToWatchList": 0,
        "movieId": ""
      });
      $scope.allContentArray = _.union(premierArr, additionArr, noteworthyArr, awPlalistArr);
      return $scope.initWatchlist();
    };
    return $scope.initWatchlist = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        if (_.isNull(value)) {
          value = [];
        }
        $scope.getwatchlistDetails = value;
        return $scope.checkIfaddedlist();
      });
    };
  }
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJVcmxzLmpzIiwiYXBwLmpzIiwiTXlXYXRjaGxpc3QvTXlXYXRjaExpc3QuanMiLCJHbG9iYWwvQXBwVXRpbGl0eS5qcyIsIkdsb2JhbC9lcnJvci5qcyIsIkdsb2JhbC9zaGFyZS5qcyIsIlNpbmdsZVBsYXllci9zaW5nbGVQbGF5ZXIuanMiLCJWaWRlb0RldGFpbHNfQVBJL1ZpZGVvRGV0YWlsc0FQSS5qcyIsIlZpZGVvRGV0YWlsc19BUEkvcHVsbF90b19yZWZyZXNoLmpzIiwiZGlyZWN0aXZlcy9sb2FkZWQtZGlyZWN0aXZlLmpzIiwiZGlyZWN0aXZlcy9zY3JvbGwtZGlyZWN0aXZlLmpzIiwiZGlyZWN0aXZlcy9zd2lwZXItZGlyZWN0aXZlLmpzIiwiaW5pdC9pbml0LmpzIiwibGFuZGluZ1ZpZGVvL2FwcEluaXRpYWxpemUuanMiLCJuYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCJub3RpZmljYXRpb24vbm90aWZpY2F0aW9ucy5qcyIsInNlcnZpY2VzL3NlcnZpY2UtaW5pdGlhbGlzZS5qcyIsInNlcnZpY2VzL3NlcnZpY2UtcGFyc2Utbm90aWZpY2F0aW9ucy5qcyIsInNpZGVCYXIvc2lkZWJhci5qcyIsInN0b3JhZ2Uvc3RvcmFnZS5qcyIsInRhYnMvZ2VucmUvZ2VucmUuanMiLCJ0YWJzL2dlbnJlL2dlbnJlQVBJLmpzIiwidGFicy9nZW5yZS9zaW5nbGVHZW5yZS5qcyIsInRhYnMvcGxheWxpc3QvcGxheWxpc3QuanMiLCJ0YWJzL3BsYXlsaXN0L3BsYXlsaXN0QXBpLmpzIiwidGFicy9wbGF5bGlzdC9zaW5nbGVwbGF5bGlzdC5qcyIsInRhYnMvcG9wdWxhci9wb3B1bGFyLmpzIl0sIm5hbWVzIjpbIlVSTCIsImRldmljZV9oZWlnaHQiLCJkZXZpY2Vfd2lkdGgiLCJzaG9ydEZpbG1XaW5kb3ciLCJhbmd1bGFyIiwibW9kdWxlIiwidmFsdWUiLCJhcHBsaWNhdGlvbklkIiwiamF2YXNjcmlwdEtleSIsImNsaWVudEtleSIsIm1hc3RlcktleSIsImluc3RhbGxhdGlvbklkIiwicnVuIiwiJGlvbmljUGxhdGZvcm0iLCIkc3RhdGUiLCIkcm9vdFNjb3BlIiwiQXBwIiwiJHRpbWVvdXQiLCIkd2luZG93IiwiJGNvcmRvdmFOZXR3b3JrIiwiJGNvcmRvdmFUb2FzdCIsIkRldGFpbHNBUEkiLCJQYXJzZUNvbmZpZ3VyYXRpb24iLCJyZWFkeSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm5hdmlnYXRlIiwiJG9uIiwiZXYiLCJ0byIsInRvUGFyYW1zIiwiZnJvbSIsImZyb21QYXJhbXMiLCJuYW1lIiwicGFnZUhlYWRlciIsImZyb21Ob3RpZmljYXRpb24iLCJwcmV2aW91c1N0YXRlIiwiY3VycmVudFN0YXRlIiwidG9TdGF0ZSIsImZyb21TdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJTdG9yYWdlIiwiJGlvbmljU2Nyb2xsRGVsZWdhdGUiLCJ3YXRjaGxpc3REZXRhaWxzIiwiZGlzcGxheSIsIndhdGNoRmxhZyIsInJlZnJlc2hTd2lwZXIiLCJhZGR2aWRlb0RldGFpbHMiLCJpbml0IiwiZ2V0RGF0YSIsInRoZW4iLCJfIiwiaXNOdWxsIiwiJGFwcGx5IiwibGVuZ3RoIiwidXNlZF9oZWlnaHQiLCJoZ3QiLCJ1cGRhdGV3YXRjaGxpc3QiLCJJZCIsIkNoZWNrV2F0Y2hsaXN0IiwicmVzaXplIiwic2luZ2xlcGxheSIsInZpZGVvaWQiLCJ2aWRlb0lkIiwic2luZ2xlUGxheVNlcnZpY2UiLCJ2aWRlb0RhdGEiLCJzaW5nbGVWaWRlb2FycmF5IiwibW92aWVfaWQiLCJtYXRjaEluZGV4IiwiZmluZExhc3RJbmRleCIsInNwbGljZSIsImZhY3RvcnkiLCIkaW9uaWNIaXN0b3J5Iiwic3RhcnQiLCJ1bnJlYWROb3RpZmljYXRpb25zIiwibWVudUVuYWJsZWQiLCJsZWZ0IiwicmlnaHQiLCJub3RpZmljYXRpb25QYXlsb2FkIiwic3RhdGUiLCJwYXJhbXMiLCJvcHRzIiwiYW5pbWF0ZSIsImJhY2siLCJpc0VtcHR5IiwiaGFzIiwibmV4dFZpZXdPcHRpb25zIiwiZGlzYWJsZUFuaW1hdGUiLCJkaXNhYmxlQmFjayIsImdvIiwiZ2V0YmFja1ZpZXciLCJiYWNrVmlldyIsImdvQmFjayIsImNvdW50IiwidGhpcyIsImlzQW5kcm9pZCIsImlvbmljIiwiUGxhdGZvcm0iLCJpc0lPUyIsImlzV2ViVmlldyIsImlzT25saW5lIiwiZ2V0TmV0d29yayIsIm5hdmlnYXRvciIsIm9uTGluZSIsImRldmljZVVVSUQiLCJkZXZpY2UiLCJ1dWlkIiwiaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyIiwiY29yZG92YSIsInBsdWdpbnMiLCJLZXlib2FyZCIsIiRjb3Jkb3ZhS2V5Ym9hcmQiLCJoaWRlQWNjZXNzb3J5QmFyIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwidGVtcGxhdGVVcmwiLCJzY29wZSIsInRhcFRvUmV0cnkiLCJlcnJvclR5cGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwiYnV0dG9uIiwiZXJyb3JNc2ciLCJlcnJvclRpdGxlIiwib25UcnlBZ2FpbiIsIiRxIiwiJGh0dHAiLCJzaGFyZSIsInNoYXJlTmF0aXZlIiwid2luZG93Iiwic29jaWFsc2hhcmluZyIsImVycm9yIiwiJHNjZSIsIm9uUGxheWVyUmVhZHkiLCJvblBsYXllclN0YXRlQ2hhbmdlIiwic3RvcFZpZGVvIiwidmlkZW9EZXRhaWxzIiwidmlkZW91cmwiLCJzd2l0Y2hIZWFkZXJCYXIiLCJ0b2dnbGVIZWFkZXIiLCJ2aWV3IiwidlR5cGUiLCJ0eXBlIiwidmltb21lbyIsIm1vZGlmaWVkVXJsIiwicGxheWVyIiwiZW1iZWR1cmwiLCJwbGF5ZXIxIiwidHJ1c3RBc1Jlc291cmNlVXJsIiwiWVQiLCJQbGF5ZXIiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsInJlbCIsIndtb2RlIiwibW9kZXN0YnJhbmRpbmciLCJldmVudHMiLCJvblJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwicGxheVZpZGVvIiwiZG9uZSIsImRhdGEiLCJQbGF5ZXJTdGF0ZSIsIlBMQVlJTkciLCJzZXRUaW1lb3V0IiwiJEltYWdlQ2FjaGVGYWN0b3J5IiwiYXJyYXlfYWRkaXRpb24iLCJhcnJheV9ub3Rld29ydGh5IiwiYXJyYXlfYXdwbGF5bGlzdCIsImdlbnJlX2FycmF5IiwicGxheWxpc3RfYXJyYXkiLCJHbG9iYWxfYXJyYXkiLCJHbG9iYWxDaGlsZF9hcnJheSIsIkZpbHRlciIsIlNvcnQiLCJhcnJheSIsImltYWdBcnJheSIsImluaXRpYWxpemUiLCJHZXRWaWRlb0RldGFpbHMiLCJkZWZlciIsImdldCIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9taXNlIiwiR2V0U2luZ2xlVmlkZW8iLCJWaWRlb0lkIiwic2VhcmNoUmVzdWx0IiwidHh0Iiwic2V0RGF0YSIsInByZW1pZXJlIiwibmV3X2FkZGl0aW9uIiwibm90ZXdvcnRoeSIsImFycmF5X2F3cGxhbGlzdCIsImF3ZXNvbWVfcGxheWxpc3QiLCJnZW5yZSIsInBsYXlsaXN0IiwiUHVsbHRvcmVmcmVzaEFQSSIsInB1bGxyZXF1ZXN0Iiwic2F2ZURhdGEiLCJlbGVtZW50cyIsImFyZ3MiLCIkbGFzdCIsIiRlbWl0IiwiZWxlbSIsInRocmVzaG9sZCIsImJpbmQiLCJlIiwiZGV0YWlsIiwic2Nyb2xsVG9wIiwic2xpZGVIZWFkZXIiLCJzbGlkZUhlYWRlclByZXZpb3VzIiwiZWxlbWVudCIsIlN3aXBlciIsImRpcmVjdGlvbiIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uQ2xpY2thYmxlIiwiJGlvbmljTG9hZGluZyIsIkluaXRpYWxpc2VTZXJ2aWNlIiwiUGFyc2VOb3RpZmljYXRpb25TZXJ2aWNlIiwiVmlkZW9kZXRhaWxzIiwiZ2V0d2F0Y2hsaXN0RGV0YWlscyIsImludEZsYWciLCJ3YXRjaGxpc3RpbWciLCJzaG93TG9hZGVyT3JTeW5vcHNpcyIsInNob3dWaWRlbyIsImFkZHdhdGNobGlzdCIsImNoZWNrSWZhZGRlZGxpc3QiLCJpIiwid2wiLCJwdXNoIiwibW92aWVJZCIsImlzVW5kZWZpbmVkIiwiX3RoaXMiLCJvYmoiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImluaXRQbGF5ZXIiLCJpbml0aWFsaXplQXBwIiwicGF5bG9hZCIsIm5vdGlmaWNhdGlvbklkIiwidXBkYXRlTm90aWZpY2F0aW9uU3RhdHVzIiwic2hvd1N5bm9wc2lzRGl2IiwiaW5pdEFwcCIsImZpcnN0U2NyaXB0VGFnIiwidGFnIiwiUGFyc2UiLCJQYXJzZVB1c2hQbHVnaW4iLCJnZXRJbnN0YWxsYXRpb25PYmplY3RJZCIsImlkIiwib24iLCJwbiIsIiRicm9hZGNhc3QiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJ1cmwiLCJhYnN0cmFjdCIsInBhcmVudCIsInZpZXdzIiwiaG9tZXZpZXciLCJwb3B1bGFyQ29udGVudCIsImdlbnJlQ29udGVudCIsInBsYXlsaXN0Q29udGVudCIsImNhY2hlIiwiJHN0YXRlUGFyYW1zIiwibm90aWZpY2F0aW9uQXJyYXkiLCJnZXROb3RpZmljYXRpb25zIiwicmVzdWx0IiwiZ2V0Tm90aWZpY2F0aW9uc1dpdGhTdGF0dXMiLCJjbGVhck5vdGlmaWNhdGlvbnMiLCJ1bnJlYWROb3RpZmljYXRpb25Db3VudCIsImRlbGV0ZU5vdGlmaWNhdGlvbnMiLCJtYXJrTm90aWZpY2F0aW9uQXNSZWFkIiwibm90aWZpY2F0aW9uX2lkIiwic3RhdHVzIiwic2VydmljZSIsImRlZmVycmVkIiwidkRhdGEiLCJDYWNoZSIsImRlZmF1bHRzIiwicG9wdWxhciIsIndlZWtseV9wcmVtaWVyZSIsImltYWdlIiwiY2FjaGVkYXRhIiwibmV3X2FkZGl0aW9ucyIsInBsYXlsaXN0cyIsImluc3RhbGxhdGlvbl9pZCIsIkNsb3VkIiwic3VjY2VzcyIsInJlc3VsdHMiLCJlYWNoIiwiZHQiLCJtb21lbnQiLCJhdHRyaWJ1dGVzIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiYWxlcnQiLCJnZXRVbnJlYWROb3RpZmljYXRpb25zQ291bnQiLCIkaW9uaWNNb2RhbCIsIiRpb25pY1BvcHVwIiwiJGlvbmljU2lkZU1lbnVEZWxlZ2F0ZSIsInNob3dzZWFyY2hiYXIiLCJTZWFyY2hSZXN1bHQiLCJjbGFzc25hbWUiLCJ3YXRjaExpc3RDb3VudCIsImFmdGVyU2VhcmNoIiwiY2hlY2tJZmFkZGVkVG9XYXRjaExpc3QiLCJtYXRjaCIsImZpbmRJbmRleCIsImZpbmRJbmRleEluV2F0Y2hsaXN0IiwibW92aWVEYXRhIiwibWF0Y2hJbldhdGNoTGlzdCIsInBhcnNlSW50IiwiZ2V0d2F0Y2hsaXN0Y291bnQiLCJnZXRub3RpZmljYXRpb25jb3VudCIsInNlYXJjaE1vdmllIiwidHh0dmFsdWUiLCJvblRhcFRvUmV0cnkiLCJoaWRlU2VhcmNoIiwiU2VhY3JjaENsaWNrZWQiLCJoaWRlIiwiaGlkZU9uU3RhdGVDaGFuZ2UiLCJkaXNwbGF5V2ViIiwiVXJsIiwidG9nZ2xlTGVmdCIsIm9wZW4iLCJzdWJtaXQiLCJzbGlkZUNvbnRlbnQiLCJvcGVuTW9kYWwiLCJ0YXNrTW9kYWwiLCJzaG93IiwiY2xvc2VNb2RhbCIsInNob3dQb3B1cCIsIm15UG9wdXAiLCJ0ZW1wbGF0ZSIsInRpdGxlIiwic3ViVGl0bGUiLCJidXR0b25zIiwidGV4dCIsImNzc0NsYXNzIiwiYWN0aW9uIiwibG9jYWxmb3JhZ2UiLCJzZXRJdGVtIiwiZXJyIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJkb1JlZnJlc2giLCJzaW5nbGVHZW5yZSIsImdlbnJlSWQiLCJHZW5yZUFQSSIsIkdldFNpbmdsZUdlbnJlIiwiR2VucmVJZCIsIkFwcGx5RmlsdGVyIiwicGFyYW0iLCJsYW5nIiwic29ydF9rZXkiLCJmaWx0ZXJpbWciLCJzb3J0aW1nIiwiUG9wdXBhcnJheSIsIlBvcHVwYXJyYXlDbGlja2VkIiwiUG9wdXBhcnJheUltYWdlcyIsImdlbnJlRGF0YSIsInNvcnREYXRhIiwibGFuZ3VhZ2UiLCJtb3ZpZXMiLCJmaWx0ZXJzIiwibGFuZ3VhZ2VzIiwic29ydF9rZXlzIiwic29ydEdlbnJlIiwibGFuZ1NlbGVjdGVkIiwibGFuZ3VhZ2VfaWQiLCJmaWx0ZXJHZW5yZSIsImdldElkIiwic29ydF9pZCIsInR4dGNvbG9yIiwicG9wdXAiLCJGaWx0ZXJzb3J0QXBwbHkiLCJhcnIiLCJnZW5yZV9pZCIsInJlc2V0IiwiaGlkZU5vUmVzZXQiLCJ0ZXN0Iiwic2luZ2xlcGxheWxpc3QiLCJwbGF5bGlzdElkIiwiR2V0U2luZ2xlcGxheWxpc3QiLCJqIiwiZnJvbUpzb24iLCJQbGF5bGlzdEFQSSIsInBsYXlsaXN0RGF0YSIsImhlYWRlcndpZHRoIiwiYWxsQ29udGVudEFycmF5IiwidmFsIiwia2V5IiwiYWRkZWRUb1dhdGNoTGlzdCIsIndhdGNobGlzdERhdGEiLCJmaW5kSW5kZXhJbmFsbENvbnRlbnRBcnJheSIsInVwZGF0ZUZsYWdJbmFsbENvbnRlbnRBcnJheSIsImZsYWciLCJjaGVja05ldHdvcmsiLCJwcmVtZWllcmUiLCJhZGRpdGlvbiIsImF3cGxhbGlzdCIsImluaXREZXRhaWxzQXBpIiwiYWRkaXRpb25BcnIiLCJhd1BsYWxpc3RBcnIiLCJub3Rld29ydGh5QXJyIiwicHJlbWllckFyciIsIm9yZGVyIiwiY2FyZHRpdGxlIiwicCIsImljb25pbWciLCJtYXAiLCJsaXN0IiwidW5pb24iLCJpbml0V2F0Y2hsaXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxLQUFBQyxjQUFBQyxZQUVBRixLQUFBLHdDQUVBRSxhQUFBLEdBRUFELGNBQUEsRUNOQSxJQUFBRSxnQkFFQUEsaUJBQUFDLFFBQUFDLE9BQUEsVUFBQSxRQUFBLFlBQUEsWUFBQSxhQUFBLGFBQUEsZ0JBQUEsYUFBQSw4QkFBQSxjQUVBRixnQkFBQUcsTUFBQSxzQkFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFVSTCwgZGV2aWNlX2hlaWdodCwgZGV2aWNlX3dpZHRoO1xuXG5VUkwgPSAnaHR0cDovL3Nob3J0ZmlsbS5zdGFnaW5nLndwZW5naW5lLmNvbSc7XG5cbmRldmljZV93aWR0aCA9ICcnO1xuXG5kZXZpY2VfaGVpZ2h0ID0gJyc7XG4iLCJ2YXIgc2hvcnRGaWxtV2luZG93O1xuXG5zaG9ydEZpbG1XaW5kb3cgPSBhbmd1bGFyLm1vZHVsZSgnU0ZXQXBwJywgWydpb25pYycsICduZ0NvcmRvdmEnLCAnbmdBbmltYXRlJywgJ25nU2FuaXRpemUnLCAnaW9uLXN0aWNreScsICdpb25pY0xhenlMb2FkJywgJ3ZpbWVvRW1iZWQnLCAnaW9uaWMuaW9uLmltYWdlQ2FjaGVGYWN0b3J5JywgJ3RlbXBsYXRlcyddKTtcblxuc2hvcnRGaWxtV2luZG93LnZhbHVlKCdQYXJzZUNvbmZpZ3VyYXRpb24nLCB7XG4gIGFwcGxpY2F0aW9uSWQ6ICdETWhkUFpOUUFVemtsenBQYjlMaHA4cUhaRmpjVlU5a2xQMGp4THNPJyxcbiAgamF2YXNjcmlwdEtleTogJ1RUcmtpOTJ4b0xLN3M0UE9UR2VGazRpMllubTh0UGJQbDdRcktsN0snLFxuICBjbGllbnRLZXk6ICdnc0d2RGc5WmtFcXp3cVlaaUZzVFpac01ReGRDUTlFY05iclRXQVk1JyxcbiAgbWFzdGVyS2V5OiAnTEFMbWF6NzNKNDRuZGVDMm43dnV1eVNNVkxHSFVTVEVRQURtSlBLTicsXG4gIGluc3RhbGxhdGlvbklkOiAnJ1xufSk7XG5cbnNob3J0RmlsbVdpbmRvdy5ydW4oW1xuICAnJGlvbmljUGxhdGZvcm0nLCAnJHN0YXRlJywgJyRyb290U2NvcGUnLCAnQXBwJywgJyR0aW1lb3V0JywgJyR3aW5kb3cnLCAnJGNvcmRvdmFOZXR3b3JrJywgJyRjb3Jkb3ZhVG9hc3QnLCAnRGV0YWlsc0FQSScsICdQYXJzZUNvbmZpZ3VyYXRpb24nLCBmdW5jdGlvbigkaW9uaWNQbGF0Zm9ybSwgJHN0YXRlLCAkcm9vdFNjb3BlLCBBcHAsICR0aW1lb3V0LCAkd2luZG93LCAkY29yZG92YU5ldHdvcmssICRjb3Jkb3ZhVG9hc3QsIERldGFpbHNBUEksIFBhcnNlQ29uZmlndXJhdGlvbikge1xuICAgICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRldmljZV9oZWlnaHQsIGRldmljZV93aWR0aDtcbiAgICAgICRyb290U2NvcGUuQXBwID0gQXBwO1xuICAgICAgZGV2aWNlX3dpZHRoID0gJHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgZGV2aWNlX2hlaWdodCA9ICR3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICByZXR1cm4gQXBwLm5hdmlnYXRlKCdhcHBJbml0aWFsaXplJyk7XG4gICAgfSk7XG4gICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbihldiwgdG8sIHRvUGFyYW1zLCBmcm9tLCBmcm9tUGFyYW1zKSB7XG4gICAgICBpZiAodG8ubmFtZSA9PT0gJ25vdGlmaWNhdGlvbnMnKSB7XG4gICAgICAgICRyb290U2NvcGUucGFnZUhlYWRlciA9ICdOb3RpZmljYXRpb25zJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRyb290U2NvcGUucGFnZUhlYWRlciA9ICdTaG9ydGZpbG0gV2luZG93JztcbiAgICAgIH1cbiAgICAgIGlmIChmcm9tLm5hbWUgPT09IFwiXCIgJiYgdG8ubmFtZSA9PT0gJ2luaXQnKSB7XG4gICAgICAgIEFwcC5mcm9tTm90aWZpY2F0aW9uID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFwcC5wcmV2aW91c1N0YXRlID0gZnJvbS5uYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEFwcC5jdXJyZW50U3RhdGUgPSB0by5uYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbihldiwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xuICAgICAgaWYgKGZyb21TdGF0ZS5uYW1lICE9PSAnJyAmJiB0b1N0YXRlLm5hbWUgPT09ICdhcHBJbml0aWFsaXplJykge1xuICAgICAgICBjb25zb2xlLmxvZygncHJldmVudCcpO1xuICAgICAgICByZXR1cm4gZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuY29udHJvbGxlcignd2F0Y2hsaXN0Q3RybCcsIFtcbiAgJyRzY29wZScsICdTdG9yYWdlJywgJ0RldGFpbHNBUEknLCAnQXBwJywgJyR3aW5kb3cnLCAnJGlvbmljU2Nyb2xsRGVsZWdhdGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbigkc2NvcGUsIFN0b3JhZ2UsIERldGFpbHNBUEksIEFwcCwgJHdpbmRvdywgJGlvbmljU2Nyb2xsRGVsZWdhdGUsICR0aW1lb3V0KSB7XG4gICAgJHNjb3BlLndhdGNobGlzdERldGFpbHMgPSBbXTtcbiAgICAkc2NvcGUuZGlzcGxheSA9ICdsb2FkZXInO1xuICAgICRzY29wZS53YXRjaEZsYWcgPSAnMCc7XG4gICAgJHNjb3BlLnJlZnJlc2hTd2lwZXIgPSB0cnVlO1xuICAgICRzY29wZS5hZGR2aWRlb0RldGFpbHMgPSBbXTtcbiAgICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRzY29wZS5nZXREYXRhKCk7XG4gICAgfTtcbiAgICAkc2NvcGUuZ2V0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnZ2V0JykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YXIgZGV2aWNlX2hlaWdodCwgZGV2aWNlX3dpZHRoO1xuICAgICAgICAkc2NvcGUud2F0Y2hsaXN0RGV0YWlscyA9IHZhbHVlO1xuICAgICAgICBpZiAoXy5pc051bGwoJHNjb3BlLndhdGNobGlzdERldGFpbHMpKSB7XG4gICAgICAgICAgJHNjb3BlLmRpc3BsYXkgPSAnbm9fcmVzdWx0JztcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgkc2NvcGUud2F0Y2hsaXN0RGV0YWlscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkZXZpY2Vfd2lkdGggPSAkd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBkZXZpY2VfaGVpZ2h0ID0gJHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRldmljZV93aWR0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZXZpY2VfaGVpZ2h0KTtcbiAgICAgICAgICAgICRzY29wZS51c2VkX2hlaWdodCA9IDQzICsgNzI7XG4gICAgICAgICAgICAkc2NvcGUuaGd0ID0gZGV2aWNlX2hlaWdodCAtICRzY29wZS51c2VkX2hlaWdodDtcbiAgICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ3Jlc3VsdCc7XG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUuZGlzcGxheSA9ICdub19yZXN1bHQnO1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnVwZGF0ZXdhdGNobGlzdCA9IGZ1bmN0aW9uKElkKSB7XG4gICAgICBjb25zb2xlLmxvZyhJZCk7XG4gICAgICAkc2NvcGUuQ2hlY2tXYXRjaGxpc3QoSWQpO1xuICAgICAgcmV0dXJuICRpb25pY1Njcm9sbERlbGVnYXRlLnJlc2l6ZSgpO1xuICAgIH07XG4gICAgJHNjb3BlLnNpbmdsZXBsYXkgPSBmdW5jdGlvbih2aWRlb2lkKSB7XG4gICAgICBjb25zb2xlLmxvZyh2aWRlb2lkKTtcbiAgICAgIERldGFpbHNBUEkudmlkZW9JZCA9IHZpZGVvaWQ7XG4gICAgICBjb25zb2xlLmxvZyhEZXRhaWxzQVBJLnZpZGVvSWQpO1xuICAgICAgY29uc29sZS5sb2coXCJlbnRlcmQgc2luZ2xlIHBsYXkgLlwiKTtcbiAgICAgIHJldHVybiBBcHAubmF2aWdhdGUoJ2luaXQnKTtcbiAgICB9O1xuICAgICRzY29wZS5zaW5nbGVQbGF5U2VydmljZSA9IGZ1bmN0aW9uKHZpZGVvRGF0YSkge1xuICAgICAgY29uc29sZS5sb2codmlkZW9EYXRhKTtcbiAgICAgIERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheS5tb3ZpZV9pZCA9IHZpZGVvRGF0YS5tb3ZpZV9pZDtcbiAgICAgIERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheS5zaW5nbGVWaWRlb2FycmF5ID0gdmlkZW9EYXRhO1xuICAgICAgcmV0dXJuIEFwcC5uYXZpZ2F0ZSgnaW5pdCcpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5DaGVja1dhdGNobGlzdCA9IGZ1bmN0aW9uKElkKSB7XG4gICAgICB2YXIgbWF0Y2hJbmRleDtcbiAgICAgIG1hdGNoSW5kZXggPSBfLmZpbmRMYXN0SW5kZXgoJHNjb3BlLndhdGNobGlzdERldGFpbHMsIHtcbiAgICAgICAgXCJtb3ZpZV9pZFwiOiBJZFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlIGZyb20gd2F0Y2hsaXN0JywgbWF0Y2hJbmRleCk7XG4gICAgICAkc2NvcGUud2F0Y2hsaXN0RGV0YWlscy5zcGxpY2UobWF0Y2hJbmRleCwgMSk7XG4gICAgICBTdG9yYWdlLndhdGNobGlzdERldGFpbHMoJ3NldCcsICRzY29wZS53YXRjaGxpc3REZXRhaWxzKTtcbiAgICAgIGlmIChfLmlzTnVsbCgkc2NvcGUud2F0Y2hsaXN0RGV0YWlscykgfHwgJHNjb3BlLndhdGNobGlzdERldGFpbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAkc2NvcGUuZGlzcGxheSA9ICdub19yZXN1bHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNjb3BlLnJlZnJlc2hTd2lwZXIgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuICR0aW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZGV2aWNlX2hlaWdodCwgZGV2aWNlX3dpZHRoO1xuICAgICAgICAgICRzY29wZS5yZWZyZXNoU3dpcGVyID0gdHJ1ZTtcbiAgICAgICAgICBkZXZpY2Vfd2lkdGggPSAkd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgZGV2aWNlX2hlaWdodCA9ICR3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgY29uc29sZS5sb2coZGV2aWNlX3dpZHRoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkZXZpY2VfaGVpZ2h0KTtcbiAgICAgICAgICAkc2NvcGUudXNlZF9oZWlnaHQgPSA0MyArIDcyO1xuICAgICAgICAgIHJldHVybiAkc2NvcGUuaGd0ID0gZGV2aWNlX2hlaWdodCAtICRzY29wZS51c2VkX2hlaWdodDtcbiAgICAgICAgfSksIDEwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuZmFjdG9yeSgnQXBwJywgW1xuICAnJHN0YXRlJywgJyRpb25pY0hpc3RvcnknLCAnJHdpbmRvdycsICckY29yZG92YU5ldHdvcmsnLCBmdW5jdGlvbigkc3RhdGUsICRpb25pY0hpc3RvcnksICR3aW5kb3csICRjb3Jkb3ZhTmV0d29yaykge1xuICAgIHZhciBBcHA7XG4gICAgQXBwID0gdm9pZCAwO1xuICAgIHJldHVybiBBcHAgPSB7XG4gICAgICBzdGFydDogdHJ1ZSxcbiAgICAgIHVucmVhZE5vdGlmaWNhdGlvbnM6IDAsXG4gICAgICBtZW51RW5hYmxlZDoge1xuICAgICAgICBsZWZ0OiBmYWxzZSxcbiAgICAgICAgcmlnaHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgcHJldmlvdXNTdGF0ZTogJycsXG4gICAgICBjdXJyZW50U3RhdGU6ICcnLFxuICAgICAgZnJvbU5vdGlmaWNhdGlvbjogMCxcbiAgICAgIG5vdGlmaWNhdGlvblBheWxvYWQ6IFtdLFxuICAgICAgbmF2aWdhdGU6IGZ1bmN0aW9uKHN0YXRlLCBwYXJhbXMsIG9wdHMpIHtcbiAgICAgICAgdmFyIGFuaW1hdGUsIGJhY2s7XG4gICAgICAgIGFuaW1hdGUgPSB2b2lkIDA7XG4gICAgICAgIGJhY2sgPSB2b2lkIDA7XG4gICAgICAgIGlmIChwYXJhbXMgPT09IG51bGwpIHtcbiAgICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cyA9PT0gbnVsbCkge1xuICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV8uaXNFbXB0eShvcHRzKSkge1xuICAgICAgICAgIGFuaW1hdGUgPSBfLmhhcyhvcHRzLCAnYW5pbWF0ZScpID8gb3B0cy5hbmltYXRlIDogZmFsc2U7XG4gICAgICAgICAgYmFjayA9IF8uaGFzKG9wdHMsICdiYWNrJykgPyBvcHRzLmJhY2sgOiBmYWxzZTtcbiAgICAgICAgICAkaW9uaWNIaXN0b3J5Lm5leHRWaWV3T3B0aW9ucyh7XG4gICAgICAgICAgICBkaXNhYmxlQW5pbWF0ZTogIWFuaW1hdGUsXG4gICAgICAgICAgICBkaXNhYmxlQmFjazogIWJhY2tcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJHN0YXRlLmdvKHN0YXRlLCBwYXJhbXMpO1xuICAgICAgfSxcbiAgICAgIGdldGJhY2tWaWV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCRpb25pY0hpc3RvcnkuYmFja1ZpZXcoKSk7XG4gICAgICB9LFxuICAgICAgZ29CYWNrOiBmdW5jdGlvbihjb3VudCkge1xuICAgICAgICBpZiAodGhpcy5mcm9tTm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mcm9tTm90aWZpY2F0aW9uID0gMDtcbiAgICAgICAgICByZXR1cm4gJHN0YXRlLmdvKFwicG9wdWxhclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJGlvbmljSGlzdG9yeS5nb0JhY2soY291bnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXNBbmRyb2lkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGlvbmljLlBsYXRmb3JtLmlzQW5kcm9pZCgpO1xuICAgICAgfSxcbiAgICAgIGlzSU9TOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGlvbmljLlBsYXRmb3JtLmlzSU9TKCk7XG4gICAgICB9LFxuICAgICAgaXNXZWJWaWV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGlvbmljLlBsYXRmb3JtLmlzV2ViVmlldygpO1xuICAgICAgfSxcbiAgICAgIGlzT25saW5lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNXZWJWaWV3KCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygkY29yZG92YU5ldHdvcmsuZ2V0TmV0d29yaygpKTtcbiAgICAgICAgICByZXR1cm4gJGNvcmRvdmFOZXR3b3JrLmlzT25saW5lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5vbkxpbmU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZXZpY2VVVUlEOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNXZWJWaWV3KCkpIHtcbiAgICAgICAgICByZXR1cm4gZGV2aWNlLnV1aWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdEVU1NWVVVSUQnO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCR3aW5kb3cuY29yZG92YSAmJiAkd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgICAgIHJldHVybiAkY29yZG92YUtleWJvYXJkLmhpZGVBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsInNob3J0RmlsbVdpbmRvdy5kaXJlY3RpdmUoJ2FqRXJyb3InLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvR2xvYmFsL2Vycm9yLmh0bWwnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgdGFwVG9SZXRyeTogJyYnLFxuICAgICAgICBlcnJvclR5cGU6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cikge1xuICAgICAgICB2YXIgYnV0dG9uLCBlcnJvck1zZywgZXJyb3JUaXRsZTtcbiAgICAgICAgc3dpdGNoIChzY29wZS5lcnJvclR5cGUpIHtcbiAgICAgICAgICBjYXNlICdvZmZsaW5lJzpcbiAgICAgICAgICAgIGVycm9yTXNnID0gJ05vIGludGVybmV0IGF2YWlsYWJpbGl0eSc7XG4gICAgICAgICAgICBlcnJvclRpdGxlID0gJ0Vycm9yJztcbiAgICAgICAgICAgIGJ1dHRvbiA9ICdSZXRyeSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzZXJ2ZXJfZXJyb3InOlxuICAgICAgICAgICAgZXJyb3JNc2cgPSAnQ291bGQgbm90IGNvbm5lY3QgdG8gc2VydmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25vX1NlYXJjaF9yZXN1bHQnOlxuICAgICAgICAgICAgZXJyb3JNc2cgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gICAgICAgICAgICBlcnJvclRpdGxlID0gJ1Jlc3VsdCc7XG4gICAgICAgICAgICBidXR0b24gPSAnQ2xvc2UnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVycm9yTXNnID0gJ1NvbWV0aGluZyBXZW50IFdyb25nJztcbiAgICAgICAgICAgIGVycm9yVGl0bGUgPSAnRXJyb3InO1xuICAgICAgICAgICAgYnV0dG9uID0gJ1JldHJ5JztcbiAgICAgICAgfVxuICAgICAgICBzY29wZS5lcnJvck1zZyA9IGVycm9yTXNnO1xuICAgICAgICBzY29wZS5lcnJvclRpdGxlID0gZXJyb3JUaXRsZTtcbiAgICAgICAgc2NvcGUuYnV0dG9uID0gYnV0dG9uO1xuICAgICAgICByZXR1cm4gc2NvcGUub25UcnlBZ2FpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzY29wZS50YXBUb1JldHJ5KCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuZmFjdG9yeSgnc2hhcmUnLCBbXG4gICckcScsICdBcHAnLCAnJGh0dHAnLCBmdW5jdGlvbigkcSwgQXBwLCAkaHR0cCkge1xuICAgIHZhciBzaGFyZTtcbiAgICBzaGFyZSA9IHt9O1xuICAgIHNoYXJlLnNoYXJlTmF0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNoYXJpbmcgdmlkZW9cIik7XG4gICAgICBpZiAod2luZG93LnBsdWdpbnMgJiYgd2luZG93LnBsdWdpbnMuc29jaWFsc2hhcmluZykge1xuICAgICAgICByZXR1cm4gd2luZG93LnBsdWdpbnMuc29jaWFsc2hhcmluZy5zaGFyZSgnSVxcJ2xsIGJlIGF0dGVuZGluZyB0aGUgc2Vzc2lvbjouJywgJ1Bob25lR2FwIERheSAyMDE0JywgbnVsbCwgJ2h0dHA6Ly9wZ2RheS5waG9uZWdhcC5jb20vdXMyMDE0JywgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnU3VjY2VzcycpO1xuICAgICAgICB9KSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ1NoYXJlIGZhaWwgJyArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ1NoYXJlIHBsdWdpbiBub3QgYXZhaWxhYmxlJyk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gc2hhcmU7XG4gIH1cbl0pO1xuIiwic2hvcnRGaWxtV2luZG93LmNvbnRyb2xsZXIoJ3BsYXllckN0cmwnLCBbXG4gICckc2NvcGUnLCAnJHNjZScsICdEZXRhaWxzQVBJJywgJyRpb25pY0hpc3RvcnknLCAnQXBwJywgJyR0aW1lb3V0JywgZnVuY3Rpb24oJHNjb3BlLCAkc2NlLCBEZXRhaWxzQVBJLCAkaW9uaWNIaXN0b3J5LCBBcHAsICR0aW1lb3V0KSB7XG4gICAgdmFyIG9uUGxheWVyUmVhZHksIG9uUGxheWVyU3RhdGVDaGFuZ2UsIHN0b3BWaWRlbztcbiAgICAkc2NvcGUudmlkZW9EZXRhaWxzID0gRGV0YWlsc0FQSS5zaW5nbGVWaWRlb2FycmF5O1xuICAgICRzY29wZS52aWRlb3VybCA9ICRzY29wZS52aWRlb0RldGFpbHMuc2luZ2xlVmlkZW9hcnJheS52aWRlb3VybDtcbiAgICBjb25zb2xlLmxvZygkc2NvcGUudmlkZW91cmwpO1xuICAgICRzY29wZS5zd2l0Y2hIZWFkZXJCYXIgPSB0cnVlO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRzY29wZS5zd2l0Y2hIZWFkZXJCYXIgPSAhJHNjb3BlLnN3aXRjaEhlYWRlckJhcjtcbiAgICB9LCA1MDAwKTtcbiAgICAkc2NvcGUudG9nZ2xlSGVhZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuc3dpdGNoSGVhZGVyQmFyID0gISRzY29wZS5zd2l0Y2hIZWFkZXJCYXI7XG4gICAgICByZXR1cm4gJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5zd2l0Y2hIZWFkZXJCYXIgPSAhJHNjb3BlLnN3aXRjaEhlYWRlckJhcjtcbiAgICAgICAgcmV0dXJuICRzY29wZS4kYXBwbHkoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH07XG4gICAgJHNjb3BlLnZpZXcgPSB7XG4gICAgICBiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvdW50O1xuICAgICAgICBjb3VudCA9IC0xO1xuICAgICAgICByZXR1cm4gQXBwLmdvQmFjayhjb3VudCk7XG4gICAgICB9LFxuICAgICAgdlR5cGU6ICRzY29wZS52aWRlb0RldGFpbHMuc2luZ2xlVmlkZW9hcnJheS50eXBlLFxuICAgICAgdmltb21lbzogdHJ1ZSxcbiAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbW9kaWZpZWRVcmwsIHBsYXllcjtcbiAgICAgICAgaWYgKHRoaXMudlR5cGUgPT09ICd2aW1lbycpIHtcbiAgICAgICAgICBtb2RpZmllZFVybCA9ICRzY29wZS52aWRlb0RldGFpbHMuc2luZ2xlVmlkZW9hcnJheS5lbWJlZHVybDtcbiAgICAgICAgICB0aGlzLnZpbW9tZW8gPSB0cnVlO1xuICAgICAgICAgIHJldHVybiAkc2NvcGUucGxheWVyMSA9ICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKG1vZGlmaWVkVXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZpbW9tZW8gPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gcGxheWVyID0gbmV3IFlULlBsYXllcigncGxheWVyMicsIHtcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIHZpZGVvSWQ6ICRzY29wZS52aWRlb3VybCxcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgICAgJ2F1dG9wbGF5JzogMSxcbiAgICAgICAgICAgICAgJ3JlbCc6IDAsXG4gICAgICAgICAgICAgICd3bW9kZSc6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICdtb2Rlc3RicmFuZGluZyc6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgb25QbGF5ZXJSZWFkeSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuICAgIH07XG4gICAgb25QbGF5ZXJTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgZG9uZTtcbiAgICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICYmICFkb25lKSB7XG4gICAgICAgIHNldFRpbWVvdXQoc3RvcFZpZGVvLCA2MDAwKTtcbiAgICAgICAgcmV0dXJuIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHN0b3BWaWRlbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBsYXllci5zdG9wVmlkZW8oKTtcbiAgICB9O1xuICB9XG5dKTtcbiIsInNob3J0RmlsbVdpbmRvdy5mYWN0b3J5KCdEZXRhaWxzQVBJJywgW1xuICAnJHEnLCAnQXBwJywgJyRodHRwJywgJyRJbWFnZUNhY2hlRmFjdG9yeScsIGZ1bmN0aW9uKCRxLCBBcHAsICRodHRwLCAkSW1hZ2VDYWNoZUZhY3RvcnkpIHtcbiAgICB2YXIgRGV0YWlsc0FQSTtcbiAgICBEZXRhaWxzQVBJID0ge307XG4gICAgRGV0YWlsc0FQSS52aWRlb0lkID0gJyc7XG4gICAgRGV0YWlsc0FQSS5hcnJheV9hZGRpdGlvbiA9IFtdO1xuICAgIERldGFpbHNBUEkuYXJyYXlfbm90ZXdvcnRoeSA9IFtdO1xuICAgIERldGFpbHNBUEkuYXJyYXlfYXdwbGF5bGlzdCA9IFtdO1xuICAgIERldGFpbHNBUEkuZ2VucmVfYXJyYXkgPSBbXTtcbiAgICBEZXRhaWxzQVBJLnBsYXlsaXN0X2FycmF5ID0gW107XG4gICAgRGV0YWlsc0FQSS5HbG9iYWxfYXJyYXkgPSBbXTtcbiAgICBEZXRhaWxzQVBJLkdsb2JhbENoaWxkX2FycmF5ID0gW107XG4gICAgRGV0YWlsc0FQSS5GaWx0ZXIgPSBbXTtcbiAgICBEZXRhaWxzQVBJLlNvcnQgPSBbXTtcbiAgICBEZXRhaWxzQVBJLmFycmF5ID0gW107XG4gICAgRGV0YWlsc0FQSS5zaW5nbGVWaWRlb2FycmF5ID0gW107XG4gICAgRGV0YWlsc0FQSS5pbWFnQXJyYXkgPSBbXTtcbiAgICBEZXRhaWxzQVBJLmluaXRpYWxpemUgPSAwO1xuICAgIERldGFpbHNBUEkuR2V0VmlkZW9EZXRhaWxzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGVmZXI7XG4gICAgICBkZWZlciA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5nZXQoVVJMICsgJy93cC1qc29uL2dldF9kZWZhdWx0cycpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gZGVmZXIucmVzb2x2ZShkYXRhLmRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGRlZmVyLnJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xuICAgIH07XG4gICAgRGV0YWlsc0FQSS5HZXRTaW5nbGVWaWRlbyA9IGZ1bmN0aW9uKFZpZGVvSWQpIHtcbiAgICAgIHZhciBkZWZlcjtcbiAgICAgIGRlZmVyID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLmdldChVUkwgKyAoXCIvd3AtanNvbi9nZXRfdmlkZW8/aWQ9XCIgKyBWaWRlb0lkKSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiBkZWZlci5yZXNvbHZlKGRhdGEuZGF0YSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZXR1cm4gZGVmZXIucmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XG4gICAgfTtcbiAgICBEZXRhaWxzQVBJLnNlYXJjaFJlc3VsdCA9IGZ1bmN0aW9uKHR4dCkge1xuICAgICAgdmFyIGRlZmVyO1xuICAgICAgZGVmZXIgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAuZ2V0KFVSTCArIChcIi93cC1qc29uL3NlYXJjaD9zdHI9XCIgKyB0eHQpKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRlZmVyLnJlc29sdmUoZGF0YS5kYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBkZWZlci5yZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcbiAgICB9O1xuICAgIERldGFpbHNBUEkuc2V0RGF0YSA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIGlmIChvcHRzID09IG51bGwpIHtcbiAgICAgICAgb3B0cyA9IHt9O1xuICAgICAgfVxuICAgICAgRGV0YWlsc0FQSS5hcnJheSA9IG9wdHMucHJlbWllcmU7XG4gICAgICBEZXRhaWxzQVBJLmFycmF5X2FkZGl0aW9uID0gb3B0cy5uZXdfYWRkaXRpb247XG4gICAgICBEZXRhaWxzQVBJLmFycmF5X25vdGV3b3J0aHkgPSBvcHRzLm5vdGV3b3J0aHk7XG4gICAgICBEZXRhaWxzQVBJLmFycmF5X2F3cGxhbGlzdCA9IG9wdHMuYXdlc29tZV9wbGF5bGlzdDtcbiAgICAgIERldGFpbHNBUEkuZ2VucmVfYXJyYXkgPSBvcHRzLmdlbnJlO1xuICAgICAgRGV0YWlsc0FQSS5wbGF5bGlzdF9hcnJheSA9IG9wdHMucGxheWxpc3Q7XG4gICAgICByZXR1cm4gRGV0YWlsc0FQSS5pbml0aWFsaXplID0gMTtcbiAgICB9O1xuICAgIHJldHVybiBEZXRhaWxzQVBJO1xuICB9XG5dKTtcbiIsInNob3J0RmlsbVdpbmRvdy5mYWN0b3J5KCdQdWxsdG9yZWZyZXNoQVBJJywgW1xuICAnJHEnLCAnQXBwJywgJyRodHRwJywgJ0RldGFpbHNBUEknLCBmdW5jdGlvbigkcSwgQXBwLCAkaHR0cCwgRGV0YWlsc0FQSSkge1xuICAgIHZhciBQdWxsdG9yZWZyZXNoQVBJO1xuICAgIFB1bGx0b3JlZnJlc2hBUEkgPSB7fTtcbiAgICBQdWxsdG9yZWZyZXNoQVBJLnB1bGxyZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGVmZXI7XG4gICAgICBkZWZlciA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5nZXQoVVJMICsgJy93cC1qc29uL2dldF9kZWZhdWx0cycpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjYycpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRlZmVyLnJlc29sdmUoZGF0YS5kYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcm9vcicpO1xuICAgICAgICByZXR1cm4gZGVmZXIucmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XG4gICAgfTtcbiAgICBQdWxsdG9yZWZyZXNoQVBJLnNhdmVEYXRhID0gZnVuY3Rpb24ob3B0cykge1xuICAgICAgaWYgKG9wdHMgPT0gbnVsbCkge1xuICAgICAgICBvcHRzID0ge307XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhvcHRzKTtcbiAgICAgIERldGFpbHNBUEkuYXJyYXkgPSBvcHRzLnByZW1pZXJlO1xuICAgICAgRGV0YWlsc0FQSS5hcnJheV9hZGRpdGlvbiA9IG9wdHMubmV3X2FkZGl0aW9uO1xuICAgICAgRGV0YWlsc0FQSS5hcnJheV9ub3Rld29ydGh5ID0gb3B0cy5ub3Rld29ydGh5O1xuICAgICAgRGV0YWlsc0FQSS5hcnJheV9hd3BsYWxpc3QgPSBvcHRzLmF3ZXNvbWVfcGxheWxpc3Q7XG4gICAgICBEZXRhaWxzQVBJLmdlbnJlX2FycmF5ID0gb3B0cy5nZW5yZTtcbiAgICAgIHJldHVybiBEZXRhaWxzQVBJLnBsYXlsaXN0X2FycmF5ID0gb3B0cy5wbGF5bGlzdDtcbiAgICB9O1xuICAgIHJldHVybiBQdWxsdG9yZWZyZXNoQVBJO1xuICB9XG5dKTtcbiIsInNob3J0RmlsbVdpbmRvdy5kaXJlY3RpdmUoJ2lzTG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgc2NvcGU6IGZhbHNlLFxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnRzLCBhcmdzKSB7XG4gICAgICBpZiAoc2NvcGUuJGxhc3QpIHtcbiAgICAgICAgc2NvcGUuJGVtaXQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ3BhZ2UgSXMgUmVhZHkhJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuZGlyZWN0aXZlKCdzY3JvbGxXYXRjaCcsIGZ1bmN0aW9uKCRyb290U2NvcGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRyKSB7XG4gICAgdmFyIHN0YXJ0LCB0aHJlc2hvbGQ7XG4gICAgc3RhcnQgPSAwO1xuICAgIHRocmVzaG9sZCA9IDE1MDtcbiAgICByZXR1cm4gZWxlbS5iaW5kKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5kZXRhaWwuc2Nyb2xsVG9wIC0gc3RhcnQgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgJHJvb3RTY29wZS5zbGlkZUhlYWRlciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcm9vdFNjb3BlLnNsaWRlSGVhZGVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoJHJvb3RTY29wZS5zbGlkZUhlYWRlclByZXZpb3VzID49IGUuZGV0YWlsLnNjcm9sbFRvcCAtIHN0YXJ0KSB7XG4gICAgICAgICRyb290U2NvcGUuc2xpZGVIZWFkZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgICRyb290U2NvcGUuc2xpZGVIZWFkZXJQcmV2aW91cyA9IGUuZGV0YWlsLnNjcm9sbFRvcCAtIHN0YXJ0O1xuICAgICAgcmV0dXJuICRyb290U2NvcGUuJGFwcGx5KCk7XG4gICAgfSk7XG4gIH07XG59KTtcbiIsInNob3J0RmlsbVdpbmRvdy5kaXJlY3RpdmUoJ3N3aXBlcicsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG4gICAgICByZXR1cm4gc2NvcGUuJG9uKCdjb250ZW50LWNoYW5nZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTd2lwZXIoZWxlbWVudCwge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICBwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuY29udHJvbGxlcignSW5pdEN0cmwnLCBbXG4gICckc2NvcGUnLCAnJHNjZScsICdBcHAnLCAnRGV0YWlsc0FQSScsICckaW9uaWNMb2FkaW5nJywgJyRpb25pY0hpc3RvcnknLCAnc2hhcmUnLCAnU3RvcmFnZScsICdJbml0aWFsaXNlU2VydmljZScsICdQYXJzZU5vdGlmaWNhdGlvblNlcnZpY2UnLCAnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgJHNjZSwgQXBwLCBEZXRhaWxzQVBJLCAkaW9uaWNMb2FkaW5nLCAkaW9uaWNIaXN0b3J5LCBzaGFyZSwgU3RvcmFnZSwgSW5pdGlhbGlzZVNlcnZpY2UsIFBhcnNlTm90aWZpY2F0aW9uU2VydmljZSwgJHJvb3RTY29wZSkge1xuICAgIHZhciBvblBsYXllclJlYWR5LCBvblBsYXllclN0YXRlQ2hhbmdlLCBzdG9wVmlkZW87XG4gICAgJHNjb3BlLlZpZGVvZGV0YWlscyA9IFtdO1xuICAgICRzY29wZS5hZGR2aWRlb0RldGFpbHMgPSBbXTtcbiAgICAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscyA9IFtdO1xuICAgICRzY29wZS53YXRjaEZsYWcgPSAnMCc7XG4gICAgJHNjb3BlLmludEZsYWcgPSAnMCc7XG4gICAgJHNjb3BlLndhdGNobGlzdGltZyA9ICcnO1xuICAgICRzY29wZS5zaG93TG9hZGVyT3JTeW5vcHNpcyA9IHRydWU7XG4gICAgJHNjb3BlLnNob3dWaWRlbyA9IGZhbHNlO1xuICAgICRzY29wZS5zaGFyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJzb2NpYWwgc2hhcmluZyBcIik7XG4gICAgICByZXR1cm4gc2hhcmUuc2hhcmVOYXRpdmUoKTtcbiAgICB9O1xuICAgICRzY29wZS5hZGR3YXRjaGxpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuQ2hlY2tXYXRjaGxpc3QoKTtcbiAgICB9O1xuICAgICRzY29wZS5jaGVja0lmYWRkZWRsaXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gU3RvcmFnZS53YXRjaGxpc3REZXRhaWxzKCdnZXQnKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzID0gdmFsdWU7XG4gICAgICAgIGlmIChfLmlzTnVsbCgkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscykgfHwgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJuZXcgdmlkZW8gIGVudHJ5XCIpO1xuICAgICAgICAgICRzY29wZS53YXRjaGxpc3RpbWcgPSAnaWNvbi1mYXZvcml0ZSc7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgICB3aGlsZSAoaSA8ICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzW2ldLm1vdmllX2lkID09PSAkc2NvcGUuVmlkZW9kZXRhaWxzLm1vdmllX2lkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW92aWUgYWxyZWFkeSBhZGRlZCBcIik7XG4gICAgICAgICAgICAgICRzY29wZS5pbnRGbGFnID0gJzEnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgbW92aWUgZW50cnkgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJHNjb3BlLmludEZsYWcgPT09ICcxJykge1xuICAgICAgICAgICAgJHNjb3BlLndhdGNobGlzdGltZyA9ICdpY29uLXVuZmF2b3JpdGUnO1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlLndhdGNobGlzdGltZyA9ICdpY29uLWZhdm9yaXRlJztcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgICRzY29wZS5DaGVja1dhdGNobGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnZ2V0JykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YXIgbWF0Y2hJbmRleCwgd2w7XG4gICAgICAgICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzID0gdmFsdWU7XG4gICAgICAgIGlmIChfLmlzTnVsbCgkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscykgfHwgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0IGVudHJ5Jyk7XG4gICAgICAgICAgJHNjb3BlLmFkZHZpZGVvRGV0YWlscy5wdXNoKERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheSk7XG4gICAgICAgICAgU3RvcmFnZS53YXRjaGxpc3REZXRhaWxzKCdzZXQnLCAkc2NvcGUuYWRkdmlkZW9EZXRhaWxzKTtcbiAgICAgICAgICAkc2NvcGUud2F0Y2hsaXN0aW1nID0gJ2ljb24tdW5mYXZvcml0ZSc7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc29tZSBkYXRhIHByZXNlbnQnKTtcbiAgICAgICAgICBtYXRjaEluZGV4ID0gXy5maW5kTGFzdEluZGV4KCRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLCB7XG4gICAgICAgICAgICBcIm1vdmllX2lkXCI6IERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheS5tb3ZpZV9pZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtYXRjaEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZSBmcm9tIHdhdGNobGlzdCcpO1xuICAgICAgICAgICAgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMuc3BsaWNlKG1hdGNoSW5kZXgsIDEpO1xuICAgICAgICAgICAgd2wgPSAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscztcbiAgICAgICAgICAgICRzY29wZS5hZGR2aWRlb0RldGFpbHMgPSB3bDtcbiAgICAgICAgICAgIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnc2V0JywgJHNjb3BlLmFkZHZpZGVvRGV0YWlscyk7XG4gICAgICAgICAgICAkc2NvcGUud2F0Y2hsaXN0aW1nID0gJ2ljb24tZmF2b3JpdGUnO1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCcpO1xuICAgICAgICAgICAgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMucHVzaChEZXRhaWxzQVBJLnNpbmdsZVZpZGVvYXJyYXkpO1xuICAgICAgICAgICAgd2wgPSAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscztcbiAgICAgICAgICAgICRzY29wZS5hZGR2aWRlb0RldGFpbHMgPSB3bDtcbiAgICAgICAgICAgIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnc2V0JywgJHNjb3BlLmFkZHZpZGVvRGV0YWlscyk7XG4gICAgICAgICAgICAkc2NvcGUud2F0Y2hsaXN0aW1nID0gJ2ljb24tdW5mYXZvcml0ZSc7XG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uKG1vdmllSWQpIHtcbiAgICAgIGlmIChtb3ZpZUlkID09IG51bGwpIHtcbiAgICAgICAgbW92aWVJZCA9ICcnO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cobW92aWVJZCk7XG4gICAgICBpZiAoIWFuZ3VsYXIuaXNVbmRlZmluZWQoRGV0YWlsc0FQSS5zaW5nbGVWaWRlb2FycmF5Lm1vdmllX2lkKSkge1xuICAgICAgICAkc2NvcGUuZGlzcGxheSA9ICdyZXN1bHQnO1xuICAgICAgICAkc2NvcGUuVmlkZW9kZXRhaWxzID0gRGV0YWlsc0FQSS5zaW5nbGVWaWRlb2FycmF5LnNpbmdsZVZpZGVvYXJyYXk7XG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5WaWRlb2RldGFpbHMpO1xuICAgICAgICBEZXRhaWxzQVBJLkdldFNpbmdsZVZpZGVvKERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheS5tb3ZpZV9pZCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJHNjb3BlLnNob3dMb2FkZXJPclN5bm9wc2lzID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5vcHNpcycpLm91dGVySFRNTCA9IGRhdGEuY29udGVudDtcbiAgICAgICAgfSk7XG4gICAgICAgICRzY29wZS5jaGVja0lmYWRkZWRsaXN0KCk7XG4gICAgICAgIHJldHVybiAkc2NvcGUuaW5pdFBsYXllcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIERldGFpbHNBUEkuR2V0U2luZ2xlVmlkZW8obW92aWVJZCkudGhlbigoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgdmFyIG9iajtcbiAgICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ3Jlc3VsdCc7XG4gICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgIFwibW92aWVfaWRcIjogZGF0YS5tb3ZpZV9pZCxcbiAgICAgICAgICAgICAgXCJzaW5nbGVWaWRlb2FycmF5XCI6IGRhdGFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBEZXRhaWxzQVBJLnNpbmdsZVZpZGVvYXJyYXkgPSBvYmo7XG4gICAgICAgICAgICAkc2NvcGUuVmlkZW9kZXRhaWxzID0gZGF0YTtcbiAgICAgICAgICAgICRzY29wZS5WaWRlb2RldGFpbHM7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd0xvYWRlck9yU3lub3BzaXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5vcHNpcycpLm91dGVySFRNTCA9ICRzY29wZS5WaWRlb2RldGFpbHMuY29udGVudDtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuaW5pdFBsYXllcigpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuZGlzcGxheSA9ICdlcnJvcic7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmluaXRQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtb2RpZmllZFVybCwgcGxheWVyO1xuICAgICAgJHNjb3BlLnZUeXBlID0gRGV0YWlsc0FQSS5zaW5nbGVWaWRlb2FycmF5LnNpbmdsZVZpZGVvYXJyYXkudHlwZTtcbiAgICAgICRzY29wZS52aWRlb3VybCA9IERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheS5zaW5nbGVWaWRlb2FycmF5LnZpZGVvdXJsO1xuICAgICAgaWYgKCRzY29wZS52VHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgICBtb2RpZmllZFVybCA9IERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheS5zaW5nbGVWaWRlb2FycmF5LmVtYmVkdXJsO1xuICAgICAgICBjb25zb2xlLmxvZyhtb2RpZmllZFVybCk7XG4gICAgICAgICRzY29wZS5wbGF5ZXIxID0gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwobW9kaWZpZWRVcmwpO1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJHNjb3BlLnBsYXllcjEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnZpZGVvdXJsKTtcbiAgICAgICAgcmV0dXJuIHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ3BsYXllcjInLCB7XG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICB2aWRlb0lkOiAkc2NvcGUudmlkZW91cmwsXG4gICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgJ2F1dG9wbGF5JzogMCxcbiAgICAgICAgICAgICdyZWwnOiAwLFxuICAgICAgICAgICAgJ3dtb2RlJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICdtb2Rlc3RicmFuZGluZyc6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiBvblBsYXllclN0YXRlQ2hhbmdlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIG9uUGxheWVyUmVhZHkgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcbiAgICB9O1xuICAgIG9uUGxheWVyU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIGRvbmU7XG4gICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gWVQuUGxheWVyU3RhdGUuUExBWUlORyAmJiAhZG9uZSkge1xuICAgICAgICBzZXRUaW1lb3V0KHN0b3BWaWRlbywgNjAwMCk7XG4gICAgICAgIHJldHVybiBkb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHN0b3BWaWRlbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBsYXllci5zdG9wVmlkZW8oKTtcbiAgICB9O1xuICAgICRzY29wZS5pbml0aWFsaXplQXBwID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhBcHAubm90aWZpY2F0aW9uUGF5bG9hZC5wYXlsb2FkLm5vdGlmaWNhdGlvbklkKTtcbiAgICAgICRzY29wZS5kaXNwbGF5ID0gJ2xvYWRlcic7XG4gICAgICByZXR1cm4gUGFyc2VOb3RpZmljYXRpb25TZXJ2aWNlLnVwZGF0ZU5vdGlmaWNhdGlvblN0YXR1cyhBcHAubm90aWZpY2F0aW9uUGF5bG9hZC5wYXlsb2FkLm5vdGlmaWNhdGlvbklkKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHJldHVybiAkc2NvcGUuaW5pdChEZXRhaWxzQVBJLnZpZGVvSWQpO1xuICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiAkc2NvcGUuaW5pdChEZXRhaWxzQVBJLnZpZGVvSWQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUuJG9uKCckaW9uaWNWaWV3LmFmdGVyRW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnYWZ0ZXIgZW50ZXInKTtcbiAgICB9KTtcbiAgICAkc2NvcGUudmlldyA9IHtcbiAgICAgIGJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY291bnQ7XG4gICAgICAgIERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheSA9IFtdO1xuICAgICAgICBjb3VudCA9IC0xO1xuICAgICAgICByZXR1cm4gQXBwLmdvQmFjayhjb3VudCk7XG4gICAgICB9LFxuICAgICAgcGxheVZpZGVvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICRzY29wZS5zaG93VmlkZW8gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKEFwcC5mcm9tTm90aWZpY2F0aW9uKSB7XG4gICAgICAkc2NvcGUuaW5pdGlhbGl6ZUFwcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUuaW5pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gJHNjb3BlLnNob3dTeW5vcHNpc0RpdiA9IGZhbHNlO1xuICB9XG5dKTtcbiIsInNob3J0RmlsbVdpbmRvdy5jb250cm9sbGVyKCdhcHBJbml0aWFsaXplQ3RybCcsIFtcbiAgJyRzY29wZScsICdBcHAnLCAnRGV0YWlsc0FQSScsICdJbml0aWFsaXNlU2VydmljZScsICdQYXJzZUNvbmZpZ3VyYXRpb24nLCAnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgQXBwLCBEZXRhaWxzQVBJLCBJbml0aWFsaXNlU2VydmljZSwgUGFyc2VDb25maWd1cmF0aW9uLCAkcm9vdFNjb3BlKSB7XG4gICAgcmV0dXJuICRzY29wZS5pbml0QXBwID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZmlyc3RTY3JpcHRUYWcsIHRhZztcbiAgICAgIFBhcnNlLmluaXRpYWxpemUoUGFyc2VDb25maWd1cmF0aW9uLmFwcGxpY2F0aW9uSWQsIFBhcnNlQ29uZmlndXJhdGlvbi5qYXZhc2NyaXB0S2V5LCBQYXJzZUNvbmZpZ3VyYXRpb24ubWFzdGVyS2V5KTtcbiAgICAgIGlmIChBcHAuaXNXZWJWaWV3KCkpIHtcbiAgICAgICAgUGFyc2VQdXNoUGx1Z2luLmdldEluc3RhbGxhdGlvbk9iamVjdElkKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgIHJldHVybiBQYXJzZUNvbmZpZ3VyYXRpb24uaW5zdGFsbGF0aW9uSWQgPSBpZDtcbiAgICAgICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiBQYXJzZUNvbmZpZ3VyYXRpb24uaW5zdGFsbGF0aW9uSWQgPSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LlBhcnNlUHVzaFBsdWdpbi5vbignb3BlblBOJywgZnVuY3Rpb24ocG4pIHtcbiAgICAgICAgICByZXR1cm4gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdvcGVuTm90aWZpY2F0aW9uJywge1xuICAgICAgICAgICAgcGF5bG9hZDogcG5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5QYXJzZVB1c2hQbHVnaW4ub24oJ3JlY2VpdmVQTicsIGZ1bmN0aW9uKHBuKSB7XG4gICAgICAgICAgcmV0dXJuICRyb290U2NvcGUuJGJyb2FkY2FzdCgncmVjZWl2ZU5vdGlmaWNhdGlvbicsIHtcbiAgICAgICAgICAgIHBheWxvYWQ6IHBuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB0YWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xuICAgICAgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcbiAgICAgICRzY29wZS5kaXNwbGF5ID0gJ2xvYWRlcic7XG4gICAgICAkc2NvcGUuZXJyb3JUeXBlID0gJ29mZmxpbmUnO1xuICAgICAgcmV0dXJuIEluaXRpYWxpc2VTZXJ2aWNlLmluaXRpYWxpemUoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgaWYgKCFBcHAuaXNPbmxpbmUoKSkge1xuICAgICAgICAgIHJldHVybiAkc2NvcGUuZGlzcGxheSA9ICdlcnJvcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIEFwcC5uYXZpZ2F0ZSgncG9wdWxhcicpO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZXR1cm4gJHNjb3BlLmRpc3BsYXkgPSAnZXJyb3InO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuY29udHJvbGxlcignbmF2aWdhdGVDdHJsJywgW2Z1bmN0aW9uKCkge31dKS5jb25maWcoW1xuICAnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgIHJldHVybiAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYXBwSW5pdGlhbGl6ZScsIHtcbiAgICAgIHVybDogJy9hcHBJbml0aWFsaXplJyxcbiAgICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICAgIGNvbnRyb2xsZXI6ICdhcHBJbml0aWFsaXplQ3RybCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2xhbmRpbmdWaWRlby9hcHBJbml0aWFsaXplLmh0bWwnXG4gICAgfSkuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvc2lkZWJhcicsXG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIGNvbnRyb2xsZXI6ICdzaWRlYmFyQ3RybCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUvaG9tZS5odG1sJ1xuICAgIH0pLnN0YXRlKCd0YWJob21lJywge1xuICAgICAgdXJsOiAnL2hvbWVUYWInLFxuICAgICAgcGFyZW50OiAnaG9tZScsXG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgIFwiaG9tZXZpZXdcIjoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnaG9tZS9ob21lVGFiLmh0bWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5zdGF0ZSgncG9wdWxhcicsIHtcbiAgICAgIHVybDogJy9wb3B1bGFyJyxcbiAgICAgIHBhcmVudDogJ3RhYmhvbWUnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgXCJwb3B1bGFyQ29udGVudFwiOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0YWJzL3BvcHVsYXIvcG9wdWxhci5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAncG9wdWxhckN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5zdGF0ZSgnZ2VucmUnLCB7XG4gICAgICB1cmw6ICcvZ2VucmUnLFxuICAgICAgcGFyZW50OiAndGFiaG9tZScsXG4gICAgICB2aWV3czoge1xuICAgICAgICBcImdlbnJlQ29udGVudFwiOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0YWJzL2dlbnJlL2dlbnJlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdnZW5yZUN0cmwnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgJ2RhdGEnOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuc3RhdGUoJ3BsYXlsaXN0Jywge1xuICAgICAgdXJsOiAnL3BsYXlsaXN0JyxcbiAgICAgIHBhcmVudDogJ3RhYmhvbWUnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgXCJwbGF5bGlzdENvbnRlbnRcIjoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGFicy9wbGF5bGlzdC9wbGF5bGlzdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAncGxheWxpc3RDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuc3RhdGUoJ3dhdGNoTGlzdCcsIHtcbiAgICAgIHVybDogJy93YXRjaExpc3QnLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgcGFyZW50OiAnaG9tZScsXG4gICAgICB2aWV3czoge1xuICAgICAgICBcImhvbWV2aWV3XCI6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3dhdGNobGlzdC9teVdhdGNobGlzdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnd2F0Y2hsaXN0Q3RybCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLnN0YXRlKCdub3RpZmljYXRpb25zJywge1xuICAgICAgdXJsOiAnL25vdGlmaWNhdGlvbnMnLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgcGFyZW50OiAnaG9tZScsXG4gICAgICB2aWV3czoge1xuICAgICAgICBcImhvbWV2aWV3XCI6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb25zLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdub3RpZmljYXRpb25zQ3RybCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLnN0YXRlKCdpbml0Jywge1xuICAgICAgdXJsOiAnL2luaXQnLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgY29udHJvbGxlcjogJ0luaXRDdHJsJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnc2luZ2xldmlkZW8vbW92aWVTY3JlZW4uaHRtbCdcbiAgICB9KS5zdGF0ZSgnc2luZ2xlUGxheWVyJywge1xuICAgICAgdXJsOiAnL3NpbmdsZVBsYXllcicsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBjb250cm9sbGVyOiAncGxheWVyQ3RybCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3NpbmdsZXZpZGVvL3NpbmdsZVBsYXllci5odG1sJ1xuICAgIH0pLnN0YXRlKCdsYW5kaW5ndmlkZW8nLCB7XG4gICAgICB1cmw6ICcvbGFuZGluZycsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBjb250cm9sbGVyOiAnbGFuZGluZ0N0cmwnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdsYW5kaW5nVmlkZW8vc3BsYXNoLmh0bWwnXG4gICAgfSkuc3RhdGUoJ25hdmJhcicsIHtcbiAgICAgIHVybDogJy9uYXZiYXInLFxuICAgICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgICAgdGVtcGxhdGVVcmw6ICdob21lL25hdkJhci5odG1sJ1xuICAgIH0pLnN0YXRlKCdzaW5nbGVHZW5yZScsIHtcbiAgICAgIHVybDogJy9zaW5nbGVHZW5yZScsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBjb250cm9sbGVyOiAnc2luZ2xlR2VucmUnLFxuICAgICAgdGVtcGxhdGVVcmw6ICd0YWJzL2dlbnJlL3NpbmdsZUdlbnJlLmh0bWwnXG4gICAgfSkuc3RhdGUoJ3NpbmdsZVBsYXlsaXN0Jywge1xuICAgICAgdXJsOiAnL3NpbmdsZVBsYXlsaXN0JyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIGNvbnRyb2xsZXI6ICdzaW5nbGVQbGF5bGlzdCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3RhYnMvcGxheWxpc3Qvc2luZ2xlUGxheWxpc3QuaHRtbCdcbiAgICB9KTtcbiAgfVxuXSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuY29udHJvbGxlcignbm90aWZpY2F0aW9uc0N0cmwnLCBbXG4gICckcm9vdFNjb3BlJywgJyRzY29wZScsICdBcHAnLCAnUHVsbHRvcmVmcmVzaEFQSScsICdEZXRhaWxzQVBJJywgJyRpb25pY0xvYWRpbmcnLCAnJHN0YXRlUGFyYW1zJywgJ1BhcnNlTm90aWZpY2F0aW9uU2VydmljZScsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRzY29wZSwgQXBwLCBQdWxsdG9yZWZyZXNoQVBJLCBEZXRhaWxzQVBJLCAkaW9uaWNMb2FkaW5nLCAkc3RhdGVQYXJhbXMsIFBhcnNlTm90aWZpY2F0aW9uU2VydmljZSkge1xuICAgICRzY29wZS5ub3RpZmljYXRpb25BcnJheSA9IFtdO1xuICAgICRyb290U2NvcGUuJG9uKCdyZWNlaXZlTm90aWZpY2F0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHBuKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmdldE5vdGlmaWNhdGlvbnMoKTtcbiAgICB9KTtcbiAgICAkc2NvcGUuZ2V0Tm90aWZpY2F0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKEFwcC5pc09ubGluZSgpKSB7XG4gICAgICAgICRzY29wZS5yZXN1bHQgPSAnbG9hZGVyJztcbiAgICAgICAgcmV0dXJuIFBhcnNlTm90aWZpY2F0aW9uU2VydmljZS5nZXROb3RpZmljYXRpb25zV2l0aFN0YXR1cygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5yZXN1bHQgPSAnbm8tbmV3LW5vdGlmaWNhdGlvbnMnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUubm90aWZpY2F0aW9uQXJyYXkgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5yZXN1bHQgPSAnZGlzcGxheSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS5yZXN1bHQgPSAnZXJyb3InO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAkc2NvcGUucmVzdWx0ID0gJ2Vycm9yJztcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5jbGVhck5vdGlmaWNhdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChBcHAuaXNPbmxpbmUoKSkge1xuICAgICAgICAkc2NvcGUubm90aWZpY2F0aW9uQXJyYXkgPSBbXTtcbiAgICAgICAgJHNjb3BlLnJlc3VsdCA9ICduby1uZXctbm90aWZpY2F0aW9ucyc7XG4gICAgICAgICRyb290U2NvcGUudW5yZWFkTm90aWZpY2F0aW9uQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gUGFyc2VOb3RpZmljYXRpb25TZXJ2aWNlLmRlbGV0ZU5vdGlmaWNhdGlvbnMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlc3VsdCA9ICdlcnJvcic7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICRzY29wZS5yZXN1bHQgPSAnZXJyb3InO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5tYXJrTm90aWZpY2F0aW9uQXNSZWFkID0gZnVuY3Rpb24obm90aWZpY2F0aW9uX2lkKSB7XG4gICAgICB2YXIgbWF0Y2hJbmRleDtcbiAgICAgIGlmIChBcHAuaXNPbmxpbmUoKSkge1xuICAgICAgICBtYXRjaEluZGV4ID0gXy5maW5kTGFzdEluZGV4KCRzY29wZS5ub3RpZmljYXRpb25BcnJheSwge1xuICAgICAgICAgIFwibm90aWZpY2F0aW9uSWRcIjogJycgKyBub3RpZmljYXRpb25faWQgKyAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgJHNjb3BlLm5vdGlmaWNhdGlvbkFycmF5W21hdGNoSW5kZXhdLnN0YXR1cyA9ICdyZWFkJztcbiAgICAgICAgaWYgKCRyb290U2NvcGUudW5yZWFkTm90aWZpY2F0aW9uQ291bnQpIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLnVucmVhZE5vdGlmaWNhdGlvbkNvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNlTm90aWZpY2F0aW9uU2VydmljZS51cGRhdGVOb3RpZmljYXRpb25TdGF0dXMobm90aWZpY2F0aW9uX2lkKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlc3VsdCA9ICdlcnJvcic7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICRzY29wZS5yZXN1bHQgPSAnZXJyb3InO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwic2hvcnRGaWxtV2luZG93LnNlcnZpY2UoJ0luaXRpYWxpc2VTZXJ2aWNlJywgW1xuICAnJHEnLCAnRGV0YWlsc0FQSScsICdBcHAnLCAnJHJvb3RTY29wZScsICckSW1hZ2VDYWNoZUZhY3RvcnknLCBmdW5jdGlvbigkcSwgRGV0YWlsc0FQSSwgQXBwLCAkcm9vdFNjb3BlLCAkSW1hZ2VDYWNoZUZhY3RvcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZDtcbiAgICAgICAgZGVmZXJyZWQgPSB2b2lkIDA7XG4gICAgICAgIGRlZmVycmVkID0gdm9pZCAwO1xuICAgICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgIGlmIChBcHAuaXNPbmxpbmUoKSkge1xuICAgICAgICAgIERldGFpbHNBUEkuR2V0VmlkZW9EZXRhaWxzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gJHJvb3RTY29wZS52RGF0YSA9IGRhdGE7XG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gJEltYWdlQ2FjaGVGYWN0b3J5LkNhY2hlKFtkYXRhLmRlZmF1bHRzLmNvbnRlbnQucG9wdWxhci53ZWVrbHlfcHJlbWllcmUuaW1hZ2VdKS50aGVuKGZ1bmN0aW9uKGNhY2hlZGF0YSkge1xuICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coY2FjaGVkYXRhKTtcbiAgICAgICAgICAgIH0pW1wiZmluYWxseVwiXShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIERldGFpbHNBUEkuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgcHJlbWllcmU6ICRyb290U2NvcGUudkRhdGEuZGVmYXVsdHMuY29udGVudC5wb3B1bGFyLndlZWtseV9wcmVtaWVyZSxcbiAgICAgICAgICAgICAgICBuZXdfYWRkaXRpb246ICRyb290U2NvcGUudkRhdGEuZGVmYXVsdHMuY29udGVudC5wb3B1bGFyLm5ld19hZGRpdGlvbnMsXG4gICAgICAgICAgICAgICAgbm90ZXdvcnRoeTogJHJvb3RTY29wZS52RGF0YS5kZWZhdWx0cy5jb250ZW50LnBvcHVsYXIubm90ZXdvcnRoeSxcbiAgICAgICAgICAgICAgICBhd2Vzb21lX3BsYXlsaXN0OiAkcm9vdFNjb3BlLnZEYXRhLmRlZmF1bHRzLmNvbnRlbnQucG9wdWxhci5hd2Vzb21lX3BsYXlsaXN0LFxuICAgICAgICAgICAgICAgIGdlbnJlOiAkcm9vdFNjb3BlLnZEYXRhLmRlZmF1bHRzLmNvbnRlbnQuZ2VucmUsXG4gICAgICAgICAgICAgICAgcGxheWxpc3Q6ICRyb290U2NvcGUudkRhdGEuZGVmYXVsdHMuY29udGVudC5wbGF5bGlzdHNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnJlc29sdmUoJHJvb3RTY29wZS52RGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsInNob3J0RmlsbVdpbmRvdy5zZXJ2aWNlKCdQYXJzZU5vdGlmaWNhdGlvblNlcnZpY2UnLCBbXG4gICckcScsICckd2luZG93JywgJ1BhcnNlQ29uZmlndXJhdGlvbicsICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHEsICR3aW5kb3csIFBhcnNlQ29uZmlndXJhdGlvbiwgJHJvb3RTY29wZSkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXROb3RpZmljYXRpb25zV2l0aFN0YXR1czogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCwgaW5zdGFsbGF0aW9uX2lkO1xuICAgICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgIGluc3RhbGxhdGlvbl9pZCA9IFBhcnNlQ29uZmlndXJhdGlvbi5pbnN0YWxsYXRpb25JZDtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKipcIiArIGluc3RhbGxhdGlvbl9pZCk7XG4gICAgICAgIFBhcnNlLkNsb3VkLnJ1bignbGlzdEFsbE5vdGlmaWNhdGlvbnNGb3JVc2VyJywge1xuICAgICAgICAgIFwiaW5zdGFsbGF0aW9uX2lkXCI6IGluc3RhbGxhdGlvbl9pZFxuICAgICAgICB9LCB7XG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgICAgICAgdmFyIG5vdGlmaWNhdGlvbkFycmF5O1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIF8uZWFjaChyZXN1bHRzLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICB2YXIgZHQsIG9iajtcbiAgICAgICAgICAgICAgZHQgPSBtb21lbnQodmFsdWUuYXR0cmlidXRlcy5jcmVhdGVkQXQpLmZvcm1hdCgnTExMTCcpO1xuICAgICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogZHQsXG4gICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25JZFwiOiB2YWx1ZS5hdHRyaWJ1dGVzLm5vdGlmaWNhdGlvbklkLmlkLFxuICAgICAgICAgICAgICAgIFwiaW5zdGFsbGF0aW9uSWRcIjogdmFsdWUuYXR0cmlidXRlcy5pbnN0YWxsYXRpb25JZC5pZCxcbiAgICAgICAgICAgICAgICBcImFsZXJ0XCI6IHZhbHVlLmF0dHJpYnV0ZXMubm90aWZpY2F0aW9uSWQuYXR0cmlidXRlcy5hbGVydCxcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiB2YWx1ZS5hdHRyaWJ1dGVzLnN0YXR1c1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uQXJyYXkucHVzaChvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKG5vdGlmaWNhdGlvbkFycmF5KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgIH0sXG4gICAgICBnZXRVbnJlYWROb3RpZmljYXRpb25zQ291bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQsIGluc3RhbGxhdGlvbl9pZDtcbiAgICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICBpbnN0YWxsYXRpb25faWQgPSBQYXJzZUNvbmZpZ3VyYXRpb24uaW5zdGFsbGF0aW9uSWQ7XG4gICAgICAgIFBhcnNlLkNsb3VkLnJ1bignY291bnRVbnJlYWROb3RpZmljYXRpb25zJywge1xuICAgICAgICAgIFwiaW5zdGFsbGF0aW9uX2lkXCI6IGluc3RhbGxhdGlvbl9pZFxuICAgICAgICB9LCB7XG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oY291bnQpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY291bnQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoJzAnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVOb3RpZmljYXRpb25TdGF0dXM6IGZ1bmN0aW9uKG5vdGlmaWNhdGlvbl9pZCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQsIGluc3RhbGxhdGlvbl9pZDtcbiAgICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICBpbnN0YWxsYXRpb25faWQgPSBQYXJzZUNvbmZpZ3VyYXRpb24uaW5zdGFsbGF0aW9uSWQ7XG4gICAgICAgIFBhcnNlLkNsb3VkLnJ1bigndXBkYXRlTm90aWZpY2F0aW9uU3RhdHVzQXNSZWFkJywge1xuICAgICAgICAgIFwiaW5zdGFsbGF0aW9uX2lkXCI6IGluc3RhbGxhdGlvbl9pZCxcbiAgICAgICAgICBcIm5vdGlmaWNhdGlvbl9pZFwiOiBub3RpZmljYXRpb25faWRcbiAgICAgICAgfSwge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICB9LFxuICAgICAgZGVsZXRlTm90aWZpY2F0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCwgaW5zdGFsbGF0aW9uX2lkO1xuICAgICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgIGluc3RhbGxhdGlvbl9pZCA9IFBhcnNlQ29uZmlndXJhdGlvbi5pbnN0YWxsYXRpb25JZDtcbiAgICAgICAgUGFyc2UuQ2xvdWQucnVuKCdkZWxldGVBbGxOb3RpZmljYXRpb24nLCB7XG4gICAgICAgICAgXCJpbnN0YWxsYXRpb25faWRcIjogaW5zdGFsbGF0aW9uX2lkXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwic2hvcnRGaWxtV2luZG93LmNvbnRyb2xsZXIoJ3NpZGViYXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkaW9uaWNNb2RhbCwgJGlvbmljUG9wdXAsICRpb25pY1NpZGVNZW51RGVsZWdhdGUsIEFwcCwgRGV0YWlsc0FQSSwgJGlvbmljTG9hZGluZywgJHdpbmRvdywgU3RvcmFnZSwgUGFyc2VOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICRzY29wZS5zaG93c2VhcmNoYmFyID0gZmFsc2U7XG4gICRzY29wZS5kaXNwbGF5ID0gJ3RhYnZpZXcnO1xuICAkc2NvcGUuZXJyb3JUeXBlID0gJyc7XG4gICRzY29wZS5TZWFyY2hSZXN1bHQgPSBbXTtcbiAgJHNjb3BlLmNsYXNzbmFtZSA9ICcnO1xuICAkc2NvcGUud2F0Y2hMaXN0Q291bnQgPSAnMCc7XG4gICRzY29wZS5hZnRlclNlYXJjaCA9IGZhbHNlO1xuICAkcm9vdFNjb3BlLnVucmVhZE5vdGlmaWNhdGlvbkNvdW50ID0gMDtcbiAgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMgPSBbXTtcbiAgJHNjb3BlLmNoZWNrSWZhZGRlZFRvV2F0Y2hMaXN0ID0gZnVuY3Rpb24obW92aWVfaWQpIHtcbiAgICB2YXIgbWF0Y2g7XG4gICAgaWYgKCRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIG1hdGNoID0gXy5maW5kSW5kZXgoJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMsIHtcbiAgICAgICAgXCJtb3ZpZV9pZFwiOiBtb3ZpZV9pZFxuICAgICAgfSk7XG4gICAgICBpZiAobWF0Y2ggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnc2VsZWN0ZWQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdub3RzZWxlY3RlZCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbm90c2VsZWN0ZWQnO1xuICAgIH1cbiAgfTtcbiAgJHNjb3BlLmZpbmRJbmRleEluV2F0Y2hsaXN0ID0gZnVuY3Rpb24obW92aWVJZCkge1xuICAgIHZhciBtYXRjaDtcbiAgICByZXR1cm4gbWF0Y2ggPSBfLmZpbmRJbmRleCgkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscywge1xuICAgICAgXCJtb3ZpZV9pZFwiOiBtb3ZpZUlkXG4gICAgfSk7XG4gIH07XG4gICRzY29wZS5hZGR3YXRjaGxpc3QgPSBmdW5jdGlvbihtb3ZpZURhdGEpIHtcbiAgICB2YXIgbWF0Y2hJbldhdGNoTGlzdCwgb2JqO1xuICAgIGNvbnNvbGUubG9nKG1vdmllRGF0YSk7XG4gICAgb2JqID0ge1xuICAgICAgXCJtb3ZpZV9pZFwiOiBtb3ZpZURhdGEubW92aWVfaWQsXG4gICAgICBcInNpbmdsZVZpZGVvYXJyYXlcIjogbW92aWVEYXRhXG4gICAgfTtcbiAgICBtYXRjaEluV2F0Y2hMaXN0ID0gJHNjb3BlLmZpbmRJbmRleEluV2F0Y2hsaXN0KG1vdmllRGF0YS5tb3ZpZV9pZCk7XG4gICAgaWYgKG1hdGNoSW5XYXRjaExpc3QgPT09IC0xKSB7XG4gICAgICAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscy5wdXNoKG9iaik7XG4gICAgICByZXR1cm4gU3RvcmFnZS53YXRjaGxpc3REZXRhaWxzKCdzZXQnLCAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLnNwbGljZShtYXRjaEluV2F0Y2hMaXN0LCAxKTtcbiAgICAgIHJldHVybiBTdG9yYWdlLndhdGNobGlzdERldGFpbHMoJ3NldCcsICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzKTtcbiAgICB9XG4gIH07XG4gICRyb290U2NvcGUuJG9uKCdvcGVuTm90aWZpY2F0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHBuKSB7XG4gICAgQXBwLmZyb21Ob3RpZmljYXRpb24gPSAxO1xuICAgIERldGFpbHNBUEkudmlkZW9JZCA9IDEzMTtcbiAgICBpZiAoJHJvb3RTY29wZS51bnJlYWROb3RpZmljYXRpb25Db3VudCkge1xuICAgICAgJHJvb3RTY29wZS51bnJlYWROb3RpZmljYXRpb25Db3VudC0tO1xuICAgIH1cbiAgICBBcHAubm90aWZpY2F0aW9uUGF5bG9hZCA9IHBuO1xuICAgIHJldHVybiBBcHAubmF2aWdhdGUoJ2luaXQnKTtcbiAgfSk7XG4gICRyb290U2NvcGUuJG9uKCdyZWNlaXZlTm90aWZpY2F0aW9uJywgZnVuY3Rpb24oZXZlbnQsIHBuKSB7XG4gICAgcmV0dXJuICRyb290U2NvcGUudW5yZWFkTm90aWZpY2F0aW9uQ291bnQrKztcbiAgfSk7XG4gICRzY29wZS5kZXZpY2VfaGVpZ2h0ID0gJHdpbmRvdy5pbm5lckhlaWdodDtcbiAgJHNjb3BlLmhndCA9IHBhcnNlSW50KCRzY29wZS5kZXZpY2VfaGVpZ2h0KSAtIHBhcnNlSW50KDQ1KTtcbiAgJHNjb3BlLmdldHdhdGNobGlzdGNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnZ2V0JykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKF8uaXNOdWxsKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgfVxuICAgICAgJHNjb3BlLndhdGNobGlzdERldGFpbHMgPSB2YWx1ZTtcbiAgICAgIGlmICgkc2NvcGUud2F0Y2hsaXN0RGV0YWlscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJHNjb3BlLndhdGNoTGlzdENvdW50ID0gJzAnO1xuICAgICAgICByZXR1cm4gJHNjb3BlLiRhcHBseSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCRzY29wZS53YXRjaGxpc3REZXRhaWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAkc2NvcGUud2F0Y2hMaXN0Q291bnQgPSAkc2NvcGUud2F0Y2hsaXN0RGV0YWlscy5sZW5ndGg7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUud2F0Y2hMaXN0Q291bnQgPSAnMCc7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICAkcm9vdFNjb3BlLmdldG5vdGlmaWNhdGlvbmNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFBhcnNlTm90aWZpY2F0aW9uU2VydmljZS5nZXRVbnJlYWROb3RpZmljYXRpb25zQ291bnQoKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gJHJvb3RTY29wZS51bnJlYWROb3RpZmljYXRpb25Db3VudCA9IHZhbHVlO1xuICAgIH0pO1xuICB9O1xuICAkc2NvcGUuc2luZ2xlUGxheVNlcnZpY2UgPSBmdW5jdGlvbih2aWRlb0RhdGEpIHtcbiAgICBEZXRhaWxzQVBJLnNpbmdsZVZpZGVvYXJyYXkubW92aWVfaWQgPSB2aWRlb0RhdGEubW92aWVfaWQ7XG4gICAgRGV0YWlsc0FQSS5zaW5nbGVWaWRlb2FycmF5LnNpbmdsZVZpZGVvYXJyYXkgPSB2aWRlb0RhdGE7XG4gICAgcmV0dXJuIEFwcC5uYXZpZ2F0ZSgnaW5pdCcpO1xuICB9O1xuICAkc2NvcGUuc2VhcmNoTW92aWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gU3RvcmFnZS53YXRjaGxpc3REZXRhaWxzKCdnZXQnKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgdHh0LCB0eHR2YWx1ZTtcbiAgICAgIGlmIChfLmlzTnVsbCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICAgICRzY29wZS53YXRjaGxpc3REZXRhaWxzID0gdmFsdWU7XG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUud2F0Y2hsaXN0RGV0YWlscyk7XG4gICAgICAkc2NvcGUuYWZ0ZXJTZWFyY2ggPSBmYWxzZTtcbiAgICAgIHR4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b2NvbXBsZXRlXCIpO1xuICAgICAgdHh0dmFsdWUgPSB0eHQudmFsdWU7XG4gICAgICAkc2NvcGUuZGlzcGxheSA9ICdsb2FkZXInO1xuICAgICAgcmV0dXJuIERldGFpbHNBUEkuc2VhcmNoUmVzdWx0KHR4dHZhbHVlKS50aGVuKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHZhciBkZXZpY2VfaGVpZ2h0LCBkZXZpY2Vfd2lkdGg7XG4gICAgICAgICAgJHNjb3BlLmFmdGVyU2VhcmNoID0gdHJ1ZTtcbiAgICAgICAgICAkc2NvcGUuU2VhcmNoUmVzdWx0ID0gZGF0YTtcbiAgICAgICAgICBkZXZpY2Vfd2lkdGggPSAkd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgZGV2aWNlX2hlaWdodCA9ICR3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgJHNjb3BlLnVzZWRfaGVpZ2h0ID0gMzI7XG4gICAgICAgICAgJHNjb3BlLmhndCA9IGRldmljZV9oZWlnaHQgLSAkc2NvcGUudXNlZF9oZWlnaHQ7XG4gICAgICAgICAgaWYgKCRzY29wZS5TZWFyY2hSZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkc2NvcGUuZXJyb3JUeXBlID0gJ25vX1NlYXJjaF9yZXN1bHQnO1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5kaXNwbGF5ID0gJ2Vycm9yJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlLmNsYXNzbmFtZSA9ICdzZWFyY2hSZXN1bHQnO1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5kaXNwbGF5ID0gJ3NlYXJjaHJlc3VsdCc7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSkodGhpcyksIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAkc2NvcGUuZXJyb3JUeXBlID0gJ29mZmxpbmUnO1xuICAgICAgICAgIHJldHVybiAkc2NvcGUuZGlzcGxheSA9ICdlcnJvcic7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfSk7XG4gIH07XG4gICRzY29wZS5vblRhcFRvUmV0cnkgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygkc2NvcGUuZXJyb3JUeXBlKTtcbiAgICBpZiAoJHNjb3BlLmVycm9yVHlwZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuc2VhcmNoTW92aWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRzY29wZS5oaWRlU2VhcmNoKCk7XG4gICAgfVxuICB9O1xuICAkc2NvcGUuaGlkZVNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGlkZSBTZWFyY2ggQmFyXCIpO1xuICAgIHJldHVybiAkc2NvcGUuZGlzcGxheSA9ICd0YWJ2aWV3JztcbiAgfTtcbiAgJHNjb3BlLlNlYWNyY2hDbGlja2VkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJzZWFyY2hcIik7XG4gICAgcmV0dXJuICRzY29wZS5zaG93c2VhcmNoYmFyID0gdHJ1ZTtcbiAgfTtcbiAgJHNjb3BlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGlkZU9uU3RhdGVDaGFuZ2U6IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmRpc3BsYXlXZWIgPSBmdW5jdGlvbihVcmwpIHtcbiAgICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLnRvZ2dsZUxlZnQoKTtcbiAgICB3aW5kb3cub3BlbihVcmwsICdfc3lzdGVtJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gQXBwLm5hdmlnYXRlKFwib25saW5lU3VibWl0XCIpO1xuICB9O1xuICAkc2NvcGUuc2xpZGVDb250ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmdldHdhdGNobGlzdGNvdW50KCk7XG4gICAgJGlvbmljU2lkZU1lbnVEZWxlZ2F0ZS50b2dnbGVMZWZ0KCk7XG4gIH07XG4gICRzY29wZS5vcGVuTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUudGFza01vZGFsLnNob3coKTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUudGFza01vZGFsLmhpZGUoKTtcbiAgfTtcbiAgJHNjb3BlLnNob3dQb3B1cCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBteVBvcHVwO1xuICAgICRzY29wZS5kYXRhID0ge307XG4gICAgbXlQb3B1cCA9ICRpb25pY1BvcHVwLnNob3coe1xuICAgICAgdGVtcGxhdGU6ICc8aW5wdXQgY2xhc3M9XCJwYWRkaW5nXCIgdHlwZT1cInBhc3N3b3JkXCIgbmctbW9kYWw9XCJkYXRhLXdpZmlcIj4nLFxuICAgICAgdGl0bGU6ICdFbnRlciBXaS1GaSBQYXNzd29yZCcsXG4gICAgICBzdWJUaXRsZTogJ1BsZWFzZSB1c2Ugbm9ybWFsIHRoaW5ncycsXG4gICAgICBzY29wZTogJHNjb3BlLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRleHQ6ICdTYXZlJyxcbiAgICAgICAgICBjc3NDbGFzczogJ3Rlc3QnLFxuICAgICAgICAgIHR5cGU6ICdidXR0b24tcG9zaXRpdmUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgfTtcbn0pO1xuIiwic2hvcnRGaWxtV2luZG93LmZhY3RvcnkoJ1N0b3JhZ2UnLCBbXG4gICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHJvb3RTY29wZSkge1xuICAgIHZhciBTdG9yYWdlO1xuICAgIFN0b3JhZ2UgPSB7fTtcbiAgICBTdG9yYWdlLndhdGNobGlzdERldGFpbHMgPSBmdW5jdGlvbihhY3Rpb24sIHBhcmFtcykge1xuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnc2V0JzpcbiAgICAgICAgICByZXR1cm4gbG9jYWxmb3JhZ2Uuc2V0SXRlbSgnd2F0Y2hsaXN0X2RldGFpbHMnLCBwYXJhbXMsIGZ1bmN0aW9uKGVyciwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUnLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3YXRjaExpc3RVcGRhdGUnLCBwYXJhbXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdnZXQnOlxuICAgICAgICAgIHJldHVybiBsb2NhbGZvcmFnZS5nZXRJdGVtKCd3YXRjaGxpc3RfZGV0YWlscycpO1xuICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgIHJldHVybiBsb2NhbGZvcmFnZS5yZW1vdmVJdGVtKCd3YXRjaGxpc3RfZGV0YWlscycpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN0b3JhZ2U7XG4gIH1cbl0pO1xuIiwic2hvcnRGaWxtV2luZG93LmNvbnRyb2xsZXIoJ2dlbnJlQ3RybCcsIFtcbiAgJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJ0FwcCcsICdQdWxsdG9yZWZyZXNoQVBJJywgJ0RldGFpbHNBUEknLCAnJGlvbmljTG9hZGluZycsICckc3RhdGVQYXJhbXMnLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkc2NvcGUsIEFwcCwgUHVsbHRvcmVmcmVzaEFQSSwgRGV0YWlsc0FQSSwgJGlvbmljTG9hZGluZywgJHN0YXRlUGFyYW1zKSB7XG4gICAgJHNjb3BlLm5vdGlmaWNhdGlvblBheWxvYWQgPSAkc3RhdGVQYXJhbXMuZGF0YTtcbiAgICAkc2NvcGUuZG9SZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUHVsbHRvcmVmcmVzaEFQSS5wdWxscmVxdWVzdCgpLnRoZW4oKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kZWZhdWx0cy5jb250ZW50LnBvcHVsYXIud2Vla2x5X3ByZW1pZXJlLmltYWdlKTtcbiAgICAgICAgICBQdWxsdG9yZWZyZXNoQVBJLnNhdmVEYXRhKHtcbiAgICAgICAgICAgIHByZW1pZXJlOiBkYXRhLmRlZmF1bHRzLmNvbnRlbnQucG9wdWxhci53ZWVrbHlfcHJlbWllcmUsXG4gICAgICAgICAgICBuZXdfYWRkaXRpb246IGRhdGEuZGVmYXVsdHMuY29udGVudC5wb3B1bGFyLm5ld19hZGRpdGlvbnMsXG4gICAgICAgICAgICBub3Rld29ydGh5OiBkYXRhLmRlZmF1bHRzLmNvbnRlbnQucG9wdWxhci5ub3Rld29ydGh5LFxuICAgICAgICAgICAgYXdlc29tZV9wbGF5bGlzdDogZGF0YS5kZWZhdWx0cy5jb250ZW50LnBvcHVsYXIuYXdlc29tZV9wbGF5bGlzdCxcbiAgICAgICAgICAgIGdlbnJlOiBkYXRhLmRlZmF1bHRzLmNvbnRlbnQuZ2VucmUsXG4gICAgICAgICAgICBwbGF5bGlzdDogZGF0YS5kZWZhdWx0cy5jb250ZW50LnBsYXlsaXN0c1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICRzY29wZS5nZW5yZSA9IERldGFpbHNBUEkuZ2VucmVfYXJyYXk7XG4gICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbC5yZWZyZXNoQ29tcGxldGUnKTtcbiAgICAgICAgICByZXR1cm4gJGlvbmljTG9hZGluZy5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdzY3JvbGwucmVmcmVzaENvbXBsZXRlJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIExvYWRpbmcgZGF0YScpO1xuICAgICAgICAgIHJldHVybiAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9O1xuICAgICRzY29wZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW4gZ2VucmUnKTtcbiAgICAgICRzY29wZS5nZW5yZSA9IERldGFpbHNBUEkuZ2VucmVfYXJyYXk7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJHNjb3BlLmdlbnJlKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuc2luZ2xlR2VucmUgPSBmdW5jdGlvbihnZW5yZUlkKSB7XG4gICAgICBEZXRhaWxzQVBJLnZpZGVvSWQgPSBnZW5yZUlkO1xuICAgICAgcmV0dXJuIEFwcC5uYXZpZ2F0ZShcInNpbmdsZUdlbnJlXCIpO1xuICAgIH07XG4gIH1cbl0pO1xuIiwic2hvcnRGaWxtV2luZG93LmZhY3RvcnkoJ0dlbnJlQVBJJywgW1xuICAnJHEnLCAnQXBwJywgJyRodHRwJywgZnVuY3Rpb24oJHEsIEFwcCwgJGh0dHApIHtcbiAgICB2YXIgR2VucmVBUEk7XG4gICAgR2VucmVBUEkgPSB7fTtcbiAgICBHZW5yZUFQSS5HZXRTaW5nbGVHZW5yZSA9IGZ1bmN0aW9uKEdlbnJlSWQpIHtcbiAgICAgIHZhciBkZWZlcjtcbiAgICAgIGNvbnNvbGUubG9nKEdlbnJlSWQpO1xuICAgICAgZGVmZXIgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAuZ2V0KFVSTCArIChcIi93cC1qc29uL2dldF9nZW5yZV92aWRlb3M/Z2VucmVfaWQ9XCIgKyBHZW5yZUlkKSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaW5nbGUgZ2VucmUgZGF0YSBzdWNjJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICByZXR1cm4gZGVmZXIucmVzb2x2ZShkYXRhLmRhdGEpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vyb29yJyk7XG4gICAgICAgIHJldHVybiBkZWZlci5yZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcbiAgICB9O1xuICAgIEdlbnJlQVBJLkFwcGx5RmlsdGVyID0gZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIHZhciBkZWZlcjtcbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtKTtcbiAgICAgIGRlZmVyID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLmdldChVUkwgKyAoXCIvd3AtanNvbi9nZXRfZ2VucmVfdmlkZW9zP2dlbnJlX2lkPVwiICsgcGFyYW1bMF0gKyBcIiZzb3J0X2tleT1cIiArIHBhcmFtWzFdICsgXCImbGFuZ3VhZ2VfaWQ9XCIgKyBwYXJhbVsyXSkpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2luZ2xlIHZpZGVvIGRhdGEgc3VjYycpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRlZmVyLnJlc29sdmUoZGF0YS5kYXRhKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcm9vcicpO1xuICAgICAgICByZXR1cm4gZGVmZXIucmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XG4gICAgfTtcbiAgICByZXR1cm4gR2VucmVBUEk7XG4gIH1cbl0pO1xuIiwic2hvcnRGaWxtV2luZG93LmNvbnRyb2xsZXIoJ3NpbmdsZUdlbnJlJywgW1xuICAnJHNjb3BlJywgJyRpb25pY0xvYWRpbmcnLCAnQXBwJywgJ0dlbnJlQVBJJywgJ0RldGFpbHNBUEknLCAnJGlvbmljSGlzdG9yeScsICdzaGFyZScsICckd2luZG93JywgJ1N0b3JhZ2UnLCBmdW5jdGlvbigkc2NvcGUsICRpb25pY0xvYWRpbmcsIEFwcCwgR2VucmVBUEksIERldGFpbHNBUEksICRpb25pY0hpc3RvcnksIHNoYXJlLCAkd2luZG93LCBTdG9yYWdlKSB7XG4gICAgJHNjb3BlLmxhbmcgPSBudWxsO1xuICAgICRzY29wZS5zb3J0X2tleSA9IG51bGw7XG4gICAgJHNjb3BlLmVycm9yVHlwZSA9ICcnO1xuICAgICRzY29wZS5maWx0ZXJpbWcgPSAnaW1nL2ljb25zL2ZpbHRlcl9ncmV5LnBuZyc7XG4gICAgJHNjb3BlLnNvcnRpbWcgPSAnaW1nL2ljb25zL3NvcnRfbm90YXBwbGllZC5wbmcnO1xuICAgICRzY29wZS5kaXNwbGF5ID0gJ2xvYWRlcic7XG4gICAgJHNjb3BlLlBvcHVwYXJyYXkgPSBbXTtcbiAgICAkc2NvcGUuUG9wdXBhcnJheUNsaWNrZWQgPSBbJ2ltZy9pY29ucy9mcmVzaF9yZWQucG5nJywgJ2ltZy9pY29ucy9wb3B1bGFyaXR5X3JlZC5wbmcnLCAnaW1nL2ljb25zL2xlbmd0aC1SZWQucG5nJ107XG4gICAgJHNjb3BlLlBvcHVwYXJyYXlJbWFnZXMgPSBbJ2ltZy9pY29ucy9mcmVzaF9ncmV5LnBuZycsICdpbWcvaWNvbnMvcG9wdWxhcml0eV9ncmV5LnBuZycsICdpbWcvaWNvbnMvbGVuZ3RoX2dyZXkucG5nJ107XG4gICAgJHNjb3BlLnNoYXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2hhcmUuc2hhcmVOYXRpdmUoKTtcbiAgICB9O1xuICAgICRzY29wZS5jaGVja0lmYWRkZWRUb1dhdGNoTGlzdCA9IGZ1bmN0aW9uKG1vdmllX2lkKSB7XG4gICAgICB2YXIgbWF0Y2g7XG4gICAgICBpZiAoJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBtYXRjaCA9IF8uZmluZEluZGV4KCRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLCB7XG4gICAgICAgICAgXCJtb3ZpZV9pZFwiOiBtb3ZpZV9pZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hdGNoICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiAnc2VsZWN0ZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnbm90c2VsZWN0ZWQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ25vdHNlbGVjdGVkJztcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5maW5kSW5kZXhJbldhdGNobGlzdCA9IGZ1bmN0aW9uKG1vdmllSWQpIHtcbiAgICAgIHZhciBtYXRjaDtcbiAgICAgIHJldHVybiBtYXRjaCA9IF8uZmluZEluZGV4KCRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLCB7XG4gICAgICAgIFwibW92aWVfaWRcIjogbW92aWVJZFxuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUuYWRkd2F0Y2hsaXN0ID0gZnVuY3Rpb24obW92aWVEYXRhKSB7XG4gICAgICB2YXIgbWF0Y2hJbldhdGNoTGlzdCwgb2JqO1xuICAgICAgY29uc29sZS5sb2cobW92aWVEYXRhKTtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJtb3ZpZV9pZFwiOiBtb3ZpZURhdGEubW92aWVfaWQsXG4gICAgICAgIFwic2luZ2xlVmlkZW9hcnJheVwiOiBtb3ZpZURhdGFcbiAgICAgIH07XG4gICAgICBtYXRjaEluV2F0Y2hMaXN0ID0gJHNjb3BlLmZpbmRJbmRleEluV2F0Y2hsaXN0KG1vdmllRGF0YS5tb3ZpZV9pZCk7XG4gICAgICBpZiAobWF0Y2hJbldhdGNoTGlzdCA9PT0gLTEpIHtcbiAgICAgICAgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMucHVzaChvYmopO1xuICAgICAgICByZXR1cm4gU3RvcmFnZS53YXRjaGxpc3REZXRhaWxzKCdzZXQnLCAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscy5zcGxpY2UobWF0Y2hJbldhdGNoTGlzdCwgMSk7XG4gICAgICAgIHJldHVybiBTdG9yYWdlLndhdGNobGlzdERldGFpbHMoJ3NldCcsICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gU3RvcmFnZS53YXRjaGxpc3REZXRhaWxzKCdnZXQnKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhciBkZXZpY2VfaGVpZ2h0LCBkZXZpY2Vfd2lkdGg7XG4gICAgICAgIGlmIChfLmlzTnVsbCh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzID0gdmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKERldGFpbHNBUEkuR2xvYmFsQ2hpbGRfYXJyYXkpO1xuICAgICAgICBpZiAoRGV0YWlsc0FQSS5HbG9iYWxDaGlsZF9hcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgJHNjb3BlLmdlbnJlRGF0YSA9IERldGFpbHNBUEkuR2xvYmFsQ2hpbGRfYXJyYXk7XG4gICAgICAgICAgJHNjb3BlLmdlbnJlID0gRGV0YWlsc0FQSS5HbG9iYWxfYXJyYXk7XG4gICAgICAgICAgJHNjb3BlLnNvcnREYXRhID0gRGV0YWlsc0FQSS5Tb3J0O1xuICAgICAgICAgICRzY29wZS5sYW5ndWFnZSA9IERldGFpbHNBUEkuRmlsdGVyO1xuICAgICAgICAgIGRldmljZV93aWR0aCA9ICR3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICBkZXZpY2VfaGVpZ2h0ID0gJHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAkc2NvcGUudXNlZF9oZWlnaHQgPSA4OCArIDczO1xuICAgICAgICAgICRzY29wZS5oZ3QgPSBkZXZpY2VfaGVpZ2h0IC0gJHNjb3BlLnVzZWRfaGVpZ2h0O1xuICAgICAgICAgIHJldHVybiAkc2NvcGUuZGlzcGxheSA9ICdyZXN1bHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBHZW5yZUFQSS5HZXRTaW5nbGVHZW5yZShEZXRhaWxzQVBJLnZpZGVvSWQpLnRoZW4oKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICBEZXRhaWxzQVBJLkdsb2JhbENoaWxkX2FycmF5ID0gZGF0YS5tb3ZpZXM7XG4gICAgICAgICAgICAgIERldGFpbHNBUEkuR2xvYmFsX2FycmF5ID0gZGF0YS5nZW5yZTtcbiAgICAgICAgICAgICAgRGV0YWlsc0FQSS5GaWx0ZXIgPSBkYXRhLmZpbHRlcnMubGFuZ3VhZ2VzO1xuICAgICAgICAgICAgICBEZXRhaWxzQVBJLlNvcnQgPSBkYXRhLnNvcnRfa2V5cztcbiAgICAgICAgICAgICAgJHNjb3BlLmdlbnJlRGF0YSA9IGRhdGEubW92aWVzO1xuICAgICAgICAgICAgICAkc2NvcGUuZ2VucmUgPSBkYXRhLmdlbnJlO1xuICAgICAgICAgICAgICAkc2NvcGUuc29ydERhdGEgPSBkYXRhLnNvcnRfa2V5cztcbiAgICAgICAgICAgICAgJHNjb3BlLmxhbmd1YWdlID0gZGF0YS5maWx0ZXJzLmxhbmd1YWdlcztcbiAgICAgICAgICAgICAgJHNjb3BlLmRpc3BsYXkgPSAncmVzdWx0JztcbiAgICAgICAgICAgICAgZGV2aWNlX3dpZHRoID0gJHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICBkZXZpY2VfaGVpZ2h0ID0gJHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgJHNjb3BlLnVzZWRfaGVpZ2h0ID0gODggKyA3MztcbiAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5oZ3QgPSBkZXZpY2VfaGVpZ2h0ICsgMyAtICRzY29wZS51c2VkX2hlaWdodDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkodGhpcyksIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuZGlzcGxheSA9ICdlcnJvcic7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUuc29ydEdlbnJlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJGlvbmljTG9hZGluZy5zaG93KHtcbiAgICAgICAgc2NvcGU6ICRzY29wZSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9maWx0ZXJQb3B1cC9zb3J0UG9wdXBnZW5lci5odG1sJyxcbiAgICAgICAgaGlkZU9uU3RhdGVDaGFuZ2U6IHRydWVcbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLmxhbmdTZWxlY3RlZCA9IGZ1bmN0aW9uKGxhbmd1YWdlX2lkKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmxhbmcgPSBsYW5ndWFnZV9pZDtcbiAgICB9O1xuICAgICRzY29wZS5maWx0ZXJHZW5yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRpb25pY0xvYWRpbmcuc2hvdyh7XG4gICAgICAgIHNjb3BlOiAkc2NvcGUsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZmlsdGVyUG9wdXAvZmlsdGVycG9wdXAuaHRtbCcsXG4gICAgICAgIGhpZGVPblN0YXRlQ2hhbmdlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgICRzY29wZS5nZXRJZCA9IGZ1bmN0aW9uKHNvcnRfaWQpIHtcbiAgICAgICRzY29wZS5zb3J0X2tleSA9IHNvcnRfaWQ7XG4gICAgICAkc2NvcGUuUG9wdXBhcnJheSA9IFsnaW1nL2ljb25zL2ZyZXNoX2dyZXkucG5nJywgJ2ltZy9pY29ucy9wb3B1bGFyaXR5X2dyZXkucG5nJywgJ2ltZy9pY29ucy9sZW5ndGhfZ3JleS5wbmcnXTtcbiAgICAgICRzY29wZS5Qb3B1cGFycmF5W3NvcnRfaWRdID0gJHNjb3BlLlBvcHVwYXJyYXlDbGlja2VkW3NvcnRfaWRdO1xuICAgICAgJHNjb3BlLnR4dGNvbG9yID0gWycnLCAnJywgJyddO1xuICAgICAgcmV0dXJuICRzY29wZS50eHRjb2xvcltzb3J0X2lkXSA9ICdjb2xvcjojQUYxNTJGJztcbiAgICB9O1xuICAgICRzY29wZS5wb3B1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKF8uaXNOdWxsKCRzY29wZS5zb3J0X2tleSkpIHtcbiAgICAgICAgcmV0dXJuICRzY29wZS5Qb3B1cGFycmF5ID0gJHNjb3BlLlBvcHVwYXJyYXlJbWFnZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc2NvcGUuUG9wdXBhcnJheSA9IFsnaW1nL2ljb25zL2ZyZXNoX2dyZXkucG5nJywgJ2ltZy9pY29ucy9wb3B1bGFyaXR5X2dyZXkucG5nJywgJ2ltZy9pY29ucy9sZW5ndGhfZ3JleS5wbmcnXTtcbiAgICAgICAgJHNjb3BlLlBvcHVwYXJyYXlbJHNjb3BlLnNvcnRfa2V5XSA9ICRzY29wZS5Qb3B1cGFycmF5Q2xpY2tlZFskc2NvcGUuc29ydF9rZXldO1xuICAgICAgICAkc2NvcGUudHh0Y29sb3IgPSBbJycsICcnLCAnJ107XG4gICAgICAgIHJldHVybiAkc2NvcGUudHh0Y29sb3JbJHNjb3BlLnNvcnRfa2V5XSA9ICdjb2xvcjojQUYxNTJGJztcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5GaWx0ZXJzb3J0QXBwbHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcnI7XG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUubGFuZyk7XG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUuc29ydF9rZXkpO1xuICAgICAgaWYgKF8uaXNOdWxsKCRzY29wZS5sYW5nKSkge1xuICAgICAgICAkc2NvcGUuZmlsdGVyaW1nID0gJ2ltZy9pY29ucy9maWx0ZXJfZ3JleS5wbmcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNjb3BlLmZpbHRlcmltZyA9ICdpbWcvaWNvbnMvZmlsdGVyX3JlZC5wbmcnO1xuICAgICAgfVxuICAgICAgaWYgKF8uaXNOdWxsKCRzY29wZS5zb3J0X2tleSkpIHtcbiAgICAgICAgJHNjb3BlLnNvcnRpbWcgPSAnaW1nL2ljb25zL3NvcnRfbm90YXBwbGllZC5wbmcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNjb3BlLnNvcnRpbWcgPSAkc2NvcGUuUG9wdXBhcnJheUNsaWNrZWRbJHNjb3BlLnNvcnRfa2V5XTtcbiAgICAgIH1cbiAgICAgIGFyciA9IFtEZXRhaWxzQVBJLkdsb2JhbF9hcnJheS5nZW5yZV9pZCwgJHNjb3BlLnNvcnRfa2V5LCAkc2NvcGUubGFuZ107XG4gICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICh7XG4gICAgICAgIGhpZGVPblN0YXRlQ2hhbmdlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICAkc2NvcGUuZGlzcGxheSA9ICdsb2FkZXInO1xuICAgICAgcmV0dXJuIEdlbnJlQVBJLkFwcGx5RmlsdGVyKGFycikudGhlbigoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBEZXRhaWxzQVBJLkdsb2JhbENoaWxkX2FycmF5ID0gZGF0YS5tb3ZpZXM7XG4gICAgICAgICAgRGV0YWlsc0FQSS5HbG9iYWxfYXJyYXkgPSBkYXRhLmdlbnJlO1xuICAgICAgICAgIERldGFpbHNBUEkuRmlsdGVyID0gZGF0YS5maWx0ZXJzLmxhbmd1YWdlcztcbiAgICAgICAgICBEZXRhaWxzQVBJLlNvcnQgPSBkYXRhLnNvcnRfa2V5cztcbiAgICAgICAgICBpZiAoRGV0YWlsc0FQSS5HbG9iYWxDaGlsZF9hcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkc2NvcGUuZGlzcGxheSA9ICdyZXN1bHQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUuZXJyb3JUeXBlID0gJ25vX1NlYXJjaF9yZXN1bHQnO1xuICAgICAgICAgICAgJHNjb3BlLmRpc3BsYXkgPSAnZXJyb3InO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkc2NvcGUuZ2VucmVEYXRhID0gZGF0YS5tb3ZpZXM7XG4gICAgICAgICAgJHNjb3BlLmdlbnJlID0gZGF0YS5nZW5yZTtcbiAgICAgICAgICAkc2NvcGUuc29ydERhdGEgPSBkYXRhLnNvcnRfa2V5cztcbiAgICAgICAgICAkc2NvcGUubGFuZ3VhZ2UgPSBkYXRhLmZpbHRlcnMubGFuZ3VhZ2VzO1xuICAgICAgICAgIHJldHVybiAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgJHNjb3BlLmVycm9yVHlwZSA9ICcnO1xuICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ2Vycm9yJztcbiAgICAgICAgICByZXR1cm4gJGlvbmljTG9hZGluZy5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfTtcbiAgICAkc2NvcGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoaWRlT25TdGF0ZUNoYW5nZTogZmFsc2VcbiAgICAgIH07XG4gICAgfTtcbiAgICAkc2NvcGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcnI7XG4gICAgICAkc2NvcGUuc29ydGltZyA9ICdpbWcvaWNvbnMvc29ydF9ub3RhcHBsaWVkLnBuZyc7XG4gICAgICAkc2NvcGUuZmlsdGVyaW1nID0gJ2ltZy9pY29ucy9maWx0ZXJfZ3JleS5wbmcnO1xuICAgICAgJHNjb3BlLnNvcnRfa2V5ID0gbnVsbDtcbiAgICAgICRzY29wZS5sYW5nID0gJyc7XG4gICAgICBhcnIgPSBbRGV0YWlsc0FQSS5HbG9iYWxfYXJyYXkuZ2VucmVfaWQsICRzY29wZS5zb3J0X2tleSwgJHNjb3BlLmxhbmddO1xuICAgICAgJGlvbmljTG9hZGluZy5oaWRlKCk7XG4gICAgICAoe1xuICAgICAgICBoaWRlT25TdGF0ZUNoYW5nZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgJHNjb3BlLmRpc3BsYXkgPSAnbG9hZGVyJztcbiAgICAgIHJldHVybiBHZW5yZUFQSS5BcHBseUZpbHRlcihhcnIpLnRoZW4oKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgRGV0YWlsc0FQSS5HbG9iYWxDaGlsZF9hcnJheSA9IGRhdGEubW92aWVzO1xuICAgICAgICAgIERldGFpbHNBUEkuR2xvYmFsX2FycmF5ID0gZGF0YS5nZW5yZTtcbiAgICAgICAgICBEZXRhaWxzQVBJLkZpbHRlciA9IGRhdGEuZmlsdGVycy5sYW5ndWFnZXM7XG4gICAgICAgICAgRGV0YWlsc0FQSS5Tb3J0ID0gZGF0YS5zb3J0X2tleXM7XG4gICAgICAgICAgJHNjb3BlLmdlbnJlRGF0YSA9IGRhdGEubW92aWVzO1xuICAgICAgICAgICRzY29wZS5nZW5yZSA9IGRhdGEuZ2VucmU7XG4gICAgICAgICAgJHNjb3BlLnNvcnREYXRhID0gZGF0YS5zb3J0X2tleXM7XG4gICAgICAgICAgJHNjb3BlLmxhbmd1YWdlID0gZGF0YS5maWx0ZXJzLmxhbmd1YWdlcztcbiAgICAgICAgICAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLmRpc3BsYXkgPSAncmVzdWx0JztcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgJHNjb3BlLmVycm9yVHlwZSA9ICcnO1xuICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ2Vycm9yJztcbiAgICAgICAgICByZXR1cm4gJGlvbmljTG9hZGluZy5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfTtcbiAgICAkc2NvcGUuaGlkZU5vUmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5zb3J0aW1nID0gJ2ltZy9pY29ucy9zb3J0X25vdGFwcGxpZWQucG5nJztcbiAgICAgICRzY29wZS5maWx0ZXJpbWcgPSAnaW1nL2ljb25zL2ZpbHRlcl9ncmV5LnBuZyc7XG4gICAgICAkc2NvcGUuc29ydF9rZXkgPSBudWxsO1xuICAgICAgJHNjb3BlLmxhbmcgPSAnJztcbiAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGlkZU9uU3RhdGVDaGFuZ2U6IGZhbHNlXG4gICAgICB9O1xuICAgIH07XG4gICAgJHNjb3BlLnNpbmdsZVBsYXlTZXJ2aWNlID0gZnVuY3Rpb24odmlkZW9EYXRhKSB7XG4gICAgICBEZXRhaWxzQVBJLnNpbmdsZVZpZGVvYXJyYXkubW92aWVfaWQgPSB2aWRlb0RhdGEubW92aWVfaWQ7XG4gICAgICBEZXRhaWxzQVBJLnNpbmdsZVZpZGVvYXJyYXkuc2luZ2xlVmlkZW9hcnJheSA9IHZpZGVvRGF0YTtcbiAgICAgIHJldHVybiBBcHAubmF2aWdhdGUoJ2luaXQnKTtcbiAgICB9O1xuICAgICRzY29wZS5iYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY291bnQ7XG4gICAgICBEZXRhaWxzQVBJLkdsb2JhbENoaWxkX2FycmF5ID0gW107XG4gICAgICBEZXRhaWxzQVBJLkdsb2JhbF9hcnJheSA9IFtdO1xuICAgICAgRGV0YWlsc0FQSS5GaWx0ZXIgPSBbXTtcbiAgICAgIERldGFpbHNBUEkuU29ydCA9IFtdO1xuICAgICAgY291bnQgPSAtMTtcbiAgICAgIHJldHVybiBBcHAuZ29CYWNrKGNvdW50KTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUudmlldyA9IHtcbiAgICAgIG9uVGFwVG9SZXRyeTogZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5yZXNldCgpO1xuICAgICAgICByZXR1cm4gJHNjb3BlLmRpc3BsYXkgPSAnbG9hZGVyJztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsInNob3J0RmlsbVdpbmRvdy5jb250cm9sbGVyKCdwbGF5bGlzdEN0cmwnLCBbXG4gICckc2NvcGUnLCAnQXBwJywgJ1B1bGx0b3JlZnJlc2hBUEknLCAnRGV0YWlsc0FQSScsICckaW9uaWNMb2FkaW5nJywgZnVuY3Rpb24oJHNjb3BlLCBBcHAsIFB1bGx0b3JlZnJlc2hBUEksIERldGFpbHNBUEksICRpb25pY0xvYWRpbmcpIHtcbiAgICAkc2NvcGUuZG9SZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUHVsbHRvcmVmcmVzaEFQSS5wdWxscmVxdWVzdCgpLnRoZW4oKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kZWZhdWx0cy5jb250ZW50LnBvcHVsYXIud2Vla2x5X3ByZW1pZXJlLmltYWdlKTtcbiAgICAgICAgICBQdWxsdG9yZWZyZXNoQVBJLnNhdmVEYXRhKHtcbiAgICAgICAgICAgIHByZW1pZXJlOiBkYXRhLmRlZmF1bHRzLmNvbnRlbnQucG9wdWxhci53ZWVrbHlfcHJlbWllcmUsXG4gICAgICAgICAgICBuZXdfYWRkaXRpb246IGRhdGEuZGVmYXVsdHMuY29udGVudC5wb3B1bGFyLm5ld19hZGRpdGlvbnMsXG4gICAgICAgICAgICBub3Rld29ydGh5OiBkYXRhLmRlZmF1bHRzLmNvbnRlbnQucG9wdWxhci5ub3Rld29ydGh5LFxuICAgICAgICAgICAgYXdlc29tZV9wbGF5bGlzdDogZGF0YS5kZWZhdWx0cy5jb250ZW50LnBvcHVsYXIuYXdlc29tZV9wbGF5bGlzdCxcbiAgICAgICAgICAgIGdlbnJlOiBkYXRhLmRlZmF1bHRzLmNvbnRlbnQuZ2VucmUsXG4gICAgICAgICAgICBwbGF5bGlzdDogZGF0YS5kZWZhdWx0cy5jb250ZW50LnBsYXlsaXN0c1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICRzY29wZS5wbGF5bGlzdCA9IERldGFpbHNBUEkucGxheWxpc3RfYXJyYXk7XG4gICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbC5yZWZyZXNoQ29tcGxldGUnKTtcbiAgICAgICAgICByZXR1cm4gJGlvbmljTG9hZGluZy5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdzY3JvbGwucmVmcmVzaENvbXBsZXRlJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIExvYWRpbmcgZGF0YScpO1xuICAgICAgICAgIHJldHVybiAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9O1xuICAgICRzY29wZS50ZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLnBsYXlsaXN0ID0gRGV0YWlsc0FQSS5wbGF5bGlzdF9hcnJheTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuc2luZ2xlcGxheWxpc3QgPSBmdW5jdGlvbihwbGF5bGlzdElkKSB7XG4gICAgICBjb25zb2xlLmxvZyhwbGF5bGlzdElkKTtcbiAgICAgIERldGFpbHNBUEkudmlkZW9JZCA9IHBsYXlsaXN0SWQ7XG4gICAgICBjb25zb2xlLmxvZyhEZXRhaWxzQVBJLnZpZGVvSWQpO1xuICAgICAgcmV0dXJuIEFwcC5uYXZpZ2F0ZShcInNpbmdsZVBsYXlsaXN0XCIpO1xuICAgIH07XG4gIH1cbl0pO1xuIiwic2hvcnRGaWxtV2luZG93LmZhY3RvcnkoJ1BsYXlsaXN0QVBJJywgW1xuICAnJHEnLCAnQXBwJywgJyRodHRwJywgZnVuY3Rpb24oJHEsIEFwcCwgJGh0dHApIHtcbiAgICB2YXIgR2VucmVBUEk7XG4gICAgR2VucmVBUEkgPSB7fTtcbiAgICBHZW5yZUFQSS5HZXRTaW5nbGVwbGF5bGlzdCA9IGZ1bmN0aW9uKHBsYXlsaXN0SWQpIHtcbiAgICAgIHZhciBkZWZlcjtcbiAgICAgIGRlZmVyID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLmdldChVUkwgKyAoXCIvd3AtanNvbi9nZXRfcGxheWxpc3RfdmlkZW9zLz9wbGF5bGlzdF9pZD1cIiArIHBsYXlsaXN0SWQpKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGo7XG4gICAgICAgIGogPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEuZGF0YSk7XG4gICAgICAgIHJldHVybiBkZWZlci5yZXNvbHZlKGopO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vyb29yJyk7XG4gICAgICAgIHJldHVybiBkZWZlci5yZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcbiAgICB9O1xuICAgIHJldHVybiBHZW5yZUFQSTtcbiAgfVxuXSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuY29udHJvbGxlcignc2luZ2xlUGxheWxpc3QnLCBbXG4gICckc2NvcGUnLCAnJHJvb3RTY29wZScsICckaW9uaWNTY3JvbGxEZWxlZ2F0ZScsICckaW9uaWNMb2FkaW5nJywgJ0FwcCcsICdQbGF5bGlzdEFQSScsICdEZXRhaWxzQVBJJywgJyRpb25pY0hpc3RvcnknLCAnc2hhcmUnLCAnJHdpbmRvdycsICckdGltZW91dCcsICdTdG9yYWdlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkaW9uaWNTY3JvbGxEZWxlZ2F0ZSwgJGlvbmljTG9hZGluZywgQXBwLCBQbGF5bGlzdEFQSSwgRGV0YWlsc0FQSSwgJGlvbmljSGlzdG9yeSwgc2hhcmUsICR3aW5kb3csICR0aW1lb3V0LCBTdG9yYWdlKSB7XG4gICAgJHNjb3BlLmRpc3BsYXkgPSAnbG9hZGVyJztcbiAgICAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscyA9IFtdO1xuICAgICRyb290U2NvcGUuc2xpZGVIZWFkZXIgPSBmYWxzZTtcbiAgICAkcm9vdFNjb3BlLnNsaWRlSGVhZGVyUHJldmlvdXMgPSAwO1xuICAgICRzY29wZS5jaGVja0lmYWRkZWRUb1dhdGNoTGlzdCA9IGZ1bmN0aW9uKG1vdmllX2lkKSB7XG4gICAgICB2YXIgbWF0Y2g7XG4gICAgICBpZiAoJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBtYXRjaCA9IF8uZmluZEluZGV4KCRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLCB7XG4gICAgICAgICAgXCJtb3ZpZV9pZFwiOiBtb3ZpZV9pZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hdGNoICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiAnc2VsZWN0ZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnbm90c2VsZWN0ZWQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ25vdHNlbGVjdGVkJztcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5maW5kSW5kZXhJbldhdGNobGlzdCA9IGZ1bmN0aW9uKG1vdmllSWQpIHtcbiAgICAgIHZhciBtYXRjaDtcbiAgICAgIHJldHVybiBtYXRjaCA9IF8uZmluZEluZGV4KCRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLCB7XG4gICAgICAgIFwibW92aWVfaWRcIjogbW92aWVJZFxuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUuYWRkd2F0Y2hsaXN0ID0gZnVuY3Rpb24obW92aWVEYXRhKSB7XG4gICAgICB2YXIgbWF0Y2hJbldhdGNoTGlzdCwgb2JqO1xuICAgICAgY29uc29sZS5sb2cobW92aWVEYXRhKTtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJtb3ZpZV9pZFwiOiBtb3ZpZURhdGEubW92aWVfaWQsXG4gICAgICAgIFwic2luZ2xlVmlkZW9hcnJheVwiOiBtb3ZpZURhdGFcbiAgICAgIH07XG4gICAgICBtYXRjaEluV2F0Y2hMaXN0ID0gJHNjb3BlLmZpbmRJbmRleEluV2F0Y2hsaXN0KG1vdmllRGF0YS5tb3ZpZV9pZCk7XG4gICAgICBpZiAobWF0Y2hJbldhdGNoTGlzdCA9PT0gLTEpIHtcbiAgICAgICAgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMucHVzaChvYmopO1xuICAgICAgICByZXR1cm4gU3RvcmFnZS53YXRjaGxpc3REZXRhaWxzKCdzZXQnLCAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscy5zcGxpY2UobWF0Y2hJbldhdGNoTGlzdCwgMSk7XG4gICAgICAgIHJldHVybiBTdG9yYWdlLndhdGNobGlzdERldGFpbHMoJ3NldCcsICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5zaGFyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNoYXJlLnNoYXJlTmF0aXZlKCk7XG4gICAgfTtcbiAgICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnZ2V0JykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YXIgZGV2aWNlX2hlaWdodCwgZGV2aWNlX3dpZHRoO1xuICAgICAgICBpZiAoXy5pc051bGwodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscyA9IHZhbHVlO1xuICAgICAgICBpZiAoRGV0YWlsc0FQSS5HbG9iYWxDaGlsZF9hcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgJHNjb3BlLnBsYXlsaXN0RGF0YSA9IERldGFpbHNBUEkuR2xvYmFsQ2hpbGRfYXJyYXk7XG4gICAgICAgICAgJHNjb3BlLnBsYXlsaXN0ID0gRGV0YWlsc0FQSS5HbG9iYWxfYXJyYXk7XG4gICAgICAgICAgJHNjb3BlLmRpc3BsYXkgPSAncmVzdWx0JztcbiAgICAgICAgICBkZXZpY2Vfd2lkdGggPSAkd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgZGV2aWNlX2hlaWdodCA9ICR3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgJHNjb3BlLnVzZWRfaGVpZ2h0ID0gNDQgKyAxMjA7XG4gICAgICAgICAgJHNjb3BlLmhndCA9IGRldmljZV9oZWlnaHQgLSAkc2NvcGUudXNlZF9oZWlnaHQ7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS5oZWFkZXJ3aWR0aCA9IGRldmljZV93aWR0aCAtIDEwMCAtIDI3O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ2xvYWRlcic7XG4gICAgICAgICAgcmV0dXJuIFBsYXlsaXN0QVBJLkdldFNpbmdsZXBsYXlsaXN0KERldGFpbHNBUEkudmlkZW9JZCkudGhlbigoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgIERldGFpbHNBUEkuR2xvYmFsX2FycmF5ID0gZGF0YS5wbGF5bGlzdDtcbiAgICAgICAgICAgICAgRGV0YWlsc0FQSS5HbG9iYWxDaGlsZF9hcnJheSA9IGRhdGEubW92aWVzO1xuICAgICAgICAgICAgICAkc2NvcGUucGxheWxpc3REYXRhID0gZGF0YS5tb3ZpZXM7XG4gICAgICAgICAgICAgICRzY29wZS5wbGF5bGlzdCA9IGRhdGEucGxheWxpc3Q7XG4gICAgICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ3Jlc3VsdCc7XG4gICAgICAgICAgICAgIGRldmljZV93aWR0aCA9ICR3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgZGV2aWNlX2hlaWdodCA9ICR3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICRzY29wZS51c2VkX2hlaWdodCA9IDQ0ICsgMTIwO1xuICAgICAgICAgICAgICAkc2NvcGUuaGd0ID0gZGV2aWNlX2hlaWdodCAtICRzY29wZS51c2VkX2hlaWdodDtcbiAgICAgICAgICAgICAgJHNjb3BlLmhlYWRlcndpZHRoID0gZGV2aWNlX3dpZHRoIC0gMTAwIC0gMjc7XG4gICAgICAgICAgICAgIHJldHVybiAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkodGhpcyksIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ2Vycm9yJztcbiAgICAgICAgICAgICAgcmV0dXJuICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnNpbmdsZVBsYXlTZXJ2aWNlID0gZnVuY3Rpb24odmlkZW9EYXRhKSB7XG4gICAgICBEZXRhaWxzQVBJLnNpbmdsZVZpZGVvYXJyYXkubW92aWVfaWQgPSB2aWRlb0RhdGEubW92aWVfaWQ7XG4gICAgICBEZXRhaWxzQVBJLnNpbmdsZVZpZGVvYXJyYXkuc2luZ2xlVmlkZW9hcnJheSA9IHZpZGVvRGF0YTtcbiAgICAgIHJldHVybiBBcHAubmF2aWdhdGUoJ2luaXQnKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvdW50O1xuICAgICAgRGV0YWlsc0FQSS5HbG9iYWxfYXJyYXkgPSBbXTtcbiAgICAgIERldGFpbHNBUEkuR2xvYmFsQ2hpbGRfYXJyYXkgPSBbXTtcbiAgICAgIGNvdW50ID0gLTE7XG4gICAgICByZXR1cm4gQXBwLmdvQmFjayhjb3VudCk7XG4gICAgfTtcbiAgfVxuXSk7XG4iLCJzaG9ydEZpbG1XaW5kb3cuY29udHJvbGxlcigncG9wdWxhckN0cmwnLCBbXG4gICckc2NvcGUnLCAnJHJvb3RTY29wZScsICdBcHAnLCAnUHVsbHRvcmVmcmVzaEFQSScsICdEZXRhaWxzQVBJJywgJyRpb25pY0xvYWRpbmcnLCAnJHdpbmRvdycsICdJbml0aWFsaXNlU2VydmljZScsICdTdG9yYWdlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCBBcHAsIFB1bGx0b3JlZnJlc2hBUEksIERldGFpbHNBUEksICRpb25pY0xvYWRpbmcsICR3aW5kb3csIEluaXRpYWxpc2VTZXJ2aWNlLCBTdG9yYWdlKSB7XG4gICAgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMgPSBbXTtcbiAgICAkcm9vdFNjb3BlLiRvbignd2F0Y2hMaXN0VXBkYXRlJywgZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcbiAgICAgICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzID0gZGF0YTtcbiAgICAgIHJldHVybiAkc2NvcGUuY2hlY2tJZmFkZGVkbGlzdCgpO1xuICAgIH0pO1xuICAgICRzY29wZS5zaW5nbGVwbGF5bGlzdCA9IGZ1bmN0aW9uKHBsYXlsaXN0SWQpIHtcbiAgICAgIERldGFpbHNBUEkudmlkZW9JZCA9IHBsYXlsaXN0SWQ7XG4gICAgICByZXR1cm4gQXBwLm5hdmlnYXRlKFwic2luZ2xlUGxheWxpc3RcIik7XG4gICAgfTtcbiAgICAkc2NvcGUuY2hlY2tJZmFkZGVkbGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgXy5lYWNoKCRzY29wZS5hbGxDb250ZW50QXJyYXksIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIHJldHVybiAkc2NvcGUuYWxsQ29udGVudEFycmF5W2tleV0uYWRkZWRUb1dhdGNoTGlzdCA9IDA7XG4gICAgICB9KTtcbiAgICAgIGlmICgkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBfLmVhY2goJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMsIGZ1bmN0aW9uKHdhdGNobGlzdERhdGEpIHtcbiAgICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgICAgbWF0Y2ggPSBfLmZpbmRJbmRleCgkc2NvcGUuYWxsQ29udGVudEFycmF5LCB7XG4gICAgICAgICAgICBcIm1vdmllSWRcIjogd2F0Y2hsaXN0RGF0YS5tb3ZpZV9pZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtYXRjaCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuYWxsQ29udGVudEFycmF5W21hdGNoXS5hZGRlZFRvV2F0Y2hMaXN0ID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmZpbmRJbmRleEluYWxsQ29udGVudEFycmF5ID0gZnVuY3Rpb24obW92aWVJZCkge1xuICAgICAgdmFyIG1hdGNoO1xuICAgICAgcmV0dXJuIG1hdGNoID0gXy5maW5kSW5kZXgoJHNjb3BlLmFsbENvbnRlbnRBcnJheSwge1xuICAgICAgICBcIm1vdmllSWRcIjogbW92aWVJZFxuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUuZmluZEluZGV4SW5XYXRjaGxpc3QgPSBmdW5jdGlvbihtb3ZpZUlkKSB7XG4gICAgICB2YXIgbWF0Y2g7XG4gICAgICByZXR1cm4gbWF0Y2ggPSBfLmZpbmRJbmRleCgkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscywge1xuICAgICAgICBcIm1vdmllX2lkXCI6IG1vdmllSWRcbiAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLnVwZGF0ZUZsYWdJbmFsbENvbnRlbnRBcnJheSA9IGZ1bmN0aW9uKG1vdmllSWQsIGZsYWcpIHtcbiAgICAgIHZhciBtYXRjaEluZGV4O1xuICAgICAgbWF0Y2hJbmRleCA9ICRzY29wZS5maW5kSW5kZXhJbmFsbENvbnRlbnRBcnJheShtb3ZpZUlkKTtcbiAgICAgIHJldHVybiAkc2NvcGUuYWxsQ29udGVudEFycmF5W21hdGNoSW5kZXhdLmFkZGVkVG9XYXRjaExpc3QgPSBmbGFnO1xuICAgIH07XG4gICAgJHNjb3BlLmFkZHdhdGNobGlzdCA9IGZ1bmN0aW9uKG1vdmllRGF0YSkge1xuICAgICAgdmFyIG1hdGNoSW5XYXRjaExpc3QsIG9iajtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJtb3ZpZV9pZFwiOiBtb3ZpZURhdGEubW92aWVJZCxcbiAgICAgICAgXCJzaW5nbGVWaWRlb2FycmF5XCI6IG1vdmllRGF0YS5jb250ZW50XG4gICAgICB9O1xuICAgICAgbWF0Y2hJbldhdGNoTGlzdCA9ICRzY29wZS5maW5kSW5kZXhJbldhdGNobGlzdChtb3ZpZURhdGEubW92aWVJZCk7XG4gICAgICBpZiAobWF0Y2hJbldhdGNoTGlzdCA9PT0gLTEpIHtcbiAgICAgICAgJHNjb3BlLnVwZGF0ZUZsYWdJbmFsbENvbnRlbnRBcnJheShtb3ZpZURhdGEubW92aWVJZCwgMSk7XG4gICAgICAgICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLnB1c2gob2JqKTtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnc2V0JywgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNjb3BlLnVwZGF0ZUZsYWdJbmFsbENvbnRlbnRBcnJheShtb3ZpZURhdGEubW92aWVJZCwgMCk7XG4gICAgICAgICRzY29wZS5nZXR3YXRjaGxpc3REZXRhaWxzLnNwbGljZShtYXRjaEluV2F0Y2hMaXN0LCAxKTtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnc2V0JywgJHNjb3BlLmdldHdhdGNobGlzdERldGFpbHMpO1xuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmRvUmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFBcHAuaXNPbmxpbmUoKSkge1xuICAgICAgICByZXR1cm4gJHNjb3BlLmNoZWNrTmV0d29yayA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFB1bGx0b3JlZnJlc2hBUEkucHVsbHJlcXVlc3QoKS50aGVuKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkc2NvcGUuY2hlY2tOZXR3b3JrID0gdHJ1ZTtcbiAgICAgICAgICAgIFB1bGx0b3JlZnJlc2hBUEkuc2F2ZURhdGEoe1xuICAgICAgICAgICAgICBwcmVtaWVyZTogZGF0YS5kZWZhdWx0cy5jb250ZW50LnBvcHVsYXIud2Vla2x5X3ByZW1pZXJlLFxuICAgICAgICAgICAgICBuZXdfYWRkaXRpb246IGRhdGEuZGVmYXVsdHMuY29udGVudC5wb3B1bGFyLm5ld19hZGRpdGlvbnMsXG4gICAgICAgICAgICAgIG5vdGV3b3J0aHk6IGRhdGEuZGVmYXVsdHMuY29udGVudC5wb3B1bGFyLm5vdGV3b3J0aHksXG4gICAgICAgICAgICAgIGF3ZXNvbWVfcGxheWxpc3Q6IGRhdGEuZGVmYXVsdHMuY29udGVudC5wb3B1bGFyLmF3ZXNvbWVfcGxheWxpc3QsXG4gICAgICAgICAgICAgIGdlbnJlOiBkYXRhLmRlZmF1bHRzLmNvbnRlbnQuZ2VucmUsXG4gICAgICAgICAgICAgIHBsYXlsaXN0OiBkYXRhLmRlZmF1bHRzLmNvbnRlbnQucGxheWxpc3RzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRzY29wZS5wcmVtZWllcmUgPSBEZXRhaWxzQVBJLmFycmF5O1xuICAgICAgICAgICAgJHNjb3BlLmFkZGl0aW9uID0gRGV0YWlsc0FQSS5hcnJheV9hZGRpdGlvbjtcbiAgICAgICAgICAgICRzY29wZS5ub3Rld29ydGh5ID0gRGV0YWlsc0FQSS5hcnJheV9ub3Rld29ydGh5O1xuICAgICAgICAgICAgJHNjb3BlLmF3cGxhbGlzdCA9IERldGFpbHNBUEkuYXJyYXlfYXdwbGFsaXN0O1xuICAgICAgICAgICAgJHNjb3BlLnZpZGVvSWQgPSBEZXRhaWxzQVBJLmFycmF5LnZpZGVvSWQ7XG4gICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsLnJlZnJlc2hDb21wbGV0ZScpO1xuICAgICAgICAgICAgcmV0dXJuICRpb25pY0xvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdzY3JvbGwucmVmcmVzaENvbXBsZXRlJyk7XG4gICAgICAgICAgICBpZiAoQXBwLmlzT25saW5lKSB7XG4gICAgICAgICAgICAgICRzY29wZS5lcnJvclR5cGUgPSAnb2ZmbGluZSc7XG4gICAgICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ2Vycm9yJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRzY29wZS5jbGFzc25hbWUgPSAnbm9fU2VhcmNoX3Jlc3VsdCc7XG4gICAgICAgICAgICAgICRzY29wZS5kaXNwbGF5ID0gJ2Vycm9yJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAkaW9uaWNMb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuc2luZ2xlcGxheSA9IGZ1bmN0aW9uKHZpZGVvaWQpIHtcbiAgICAgIERldGFpbHNBUEkudmlkZW9JZCA9IHZpZGVvaWQ7XG4gICAgICByZXR1cm4gQXBwLm5hdmlnYXRlKCdpbml0Jyk7XG4gICAgfTtcbiAgICAkc2NvcGUuc2luZ2xlUGxheVNlcnZpY2UgPSBmdW5jdGlvbih2aWRlb0RhdGEpIHtcbiAgICAgIERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheS5tb3ZpZV9pZCA9IHZpZGVvRGF0YS5tb3ZpZV9pZDtcbiAgICAgIERldGFpbHNBUEkuc2luZ2xlVmlkZW9hcnJheS5zaW5nbGVWaWRlb2FycmF5ID0gdmlkZW9EYXRhO1xuICAgICAgcmV0dXJuIEFwcC5uYXZpZ2F0ZSgnaW5pdCcpO1xuICAgIH07XG4gICAgJHNjb3BlLmluaXRBcHAgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkZXZpY2VfaGVpZ2h0LCBkZXZpY2Vfd2lkdGg7XG4gICAgICBkZXZpY2Vfd2lkdGggPSAkd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBkZXZpY2VfaGVpZ2h0ID0gJHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICRzY29wZS51c2VkX2hlaWdodCA9IDg2ICsgNzM7XG4gICAgICAkc2NvcGUuaGd0ID0gZGV2aWNlX2hlaWdodCArIDMgLSAkc2NvcGUudXNlZF9oZWlnaHQ7XG4gICAgICBpZiAoIUFwcC5pc09ubGluZSgpKSB7XG4gICAgICAgICRzY29wZS5jaGVja05ldHdvcmsgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuICRzY29wZS5kaXNwbGF5ID0gJ25vbmV0d29yayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc2NvcGUuaW5pdERldGFpbHNBcGkoKTtcbiAgICAgICAgcmV0dXJuICRzY29wZS5kaXNwbGF5ID0gJ3Jlc3VsdCc7XG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuaW5pdERldGFpbHNBcGkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhZGRpdGlvbkFyciwgYXdQbGFsaXN0QXJyLCBub3Rld29ydGh5QXJyLCBwcmVtaWVyQXJyO1xuICAgICAgcHJlbWllckFyciA9IFtdO1xuICAgICAgYWRkaXRpb25BcnIgPSBbXTtcbiAgICAgIG5vdGV3b3J0aHlBcnIgPSBbXTtcbiAgICAgIGF3UGxhbGlzdEFyciA9IFtdO1xuICAgICAgJHNjb3BlLmFsbENvbnRlbnRBcnJheSA9IFtdO1xuICAgICAgcHJlbWllckFyci5wdXNoKHtcbiAgICAgICAgXCJvcmRlclwiOiAxLFxuICAgICAgICBcImNhcmR0aXRsZVwiOiBcIldlZWtseSBQcmVtaWVyZVwiLFxuICAgICAgICBcInBcIjogXCJDYXJlZnVsbHkgaGFuZHBpY2tlZCwganVzdCBmb3IgeW91LlwiLFxuICAgICAgICBcImljb25pbWdcIjogXCJ3ZWVrbHlfcHJlbWllcmVcIixcbiAgICAgICAgXCJjb250ZW50XCI6IERldGFpbHNBUEkuYXJyYXksXG4gICAgICAgIFwiYWRkZWRUb1dhdGNoTGlzdFwiOiAwLFxuICAgICAgICBcIm1vdmllSWRcIjogRGV0YWlsc0FQSS5hcnJheS5tb3ZpZV9pZFxuICAgICAgfSk7XG4gICAgICBhZGRpdGlvbkFyciA9IF8ubWFwKERldGFpbHNBUEkuYXJyYXlfYWRkaXRpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcIm9yZGVyXCI6IDIsXG4gICAgICAgICAgXCJjYXJkdGl0bGVcIjogXCJOZXcgQWRkaXRpb25zXCIsXG4gICAgICAgICAgXCJwXCI6IFwiSnVzdCBzdGFydGluZyBvdXQgb24gdGhlaXIgYmlnIGpvdXJuZXkhXCIsXG4gICAgICAgICAgXCJpY29uaW1nXCI6IFwibmV3X2FkZGl0aW9uc1wiLFxuICAgICAgICAgIFwiY29udGVudFwiOiB2YWx1ZSxcbiAgICAgICAgICBcImFkZGVkVG9XYXRjaExpc3RcIjogMCxcbiAgICAgICAgICBcIm1vdmllSWRcIjogdmFsdWUubW92aWVfaWRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgbm90ZXdvcnRoeUFyciA9IF8ubWFwKERldGFpbHNBUEkuYXJyYXlfbm90ZXdvcnRoeSwgZnVuY3Rpb24odmFsdWUsIGtleSwgbGlzdCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwib3JkZXJcIjogMyxcbiAgICAgICAgICBcImNhcmR0aXRsZVwiOiBcIk5vdGV3b3J0aHlcIixcbiAgICAgICAgICBcInBcIjogXCJDb21wbGV0ZWx5IG91dCBvZiB0aGUgb3JkaW5hcnlcIixcbiAgICAgICAgICBcImljb25pbWdcIjogXCJub3Rld29ydGh5XCIsXG4gICAgICAgICAgXCJjb250ZW50XCI6IHZhbHVlLFxuICAgICAgICAgIFwiYWRkZWRUb1dhdGNoTGlzdFwiOiAwLFxuICAgICAgICAgIFwibW92aWVJZFwiOiB2YWx1ZS5tb3ZpZV9pZFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBhd1BsYWxpc3RBcnIucHVzaCh7XG4gICAgICAgIFwib3JkZXJcIjogNCxcbiAgICAgICAgXCJjYXJkdGl0bGVcIjogXCJBd2Vzb21lIFBsYXlsaXN0XCIsXG4gICAgICAgIFwicFwiOiBcIlNpdCBiYWNrIGFuZCByZWxheCB3aXRoIHNvbWUgcG9wY29ybiFcIixcbiAgICAgICAgXCJpY29uaW1nXCI6IFwiYXdlc29tZV9wbGF5bGlzdHNcIixcbiAgICAgICAgXCJjb250ZW50XCI6IERldGFpbHNBUEkuYXJyYXlfYXdwbGFsaXN0LFxuICAgICAgICBcImFkZGVkVG9XYXRjaExpc3RcIjogMCxcbiAgICAgICAgXCJtb3ZpZUlkXCI6IFwiXCJcbiAgICAgIH0pO1xuICAgICAgJHNjb3BlLmFsbENvbnRlbnRBcnJheSA9IF8udW5pb24ocHJlbWllckFyciwgYWRkaXRpb25BcnIsIG5vdGV3b3J0aHlBcnIsIGF3UGxhbGlzdEFycik7XG4gICAgICByZXR1cm4gJHNjb3BlLmluaXRXYXRjaGxpc3QoKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuaW5pdFdhdGNobGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFN0b3JhZ2Uud2F0Y2hsaXN0RGV0YWlscygnZ2V0JykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoXy5pc051bGwodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICAkc2NvcGUuZ2V0d2F0Y2hsaXN0RGV0YWlscyA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gJHNjb3BlLmNoZWNrSWZhZGRlZGxpc3QoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
