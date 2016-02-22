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

shortFilmWindow.config([
  '$compileProvider', '$ionicConfigProvider', function($compileProvider, $ionicConfigProvider) {
    if (ionic.Platform.isAndroid()) {
      $ionicConfigProvider.scrolling.jsScrolling(false);
    }
    return $compileProvider.debugInfoEnabled(false);
  }
]);

var htmlEnDeCode;

htmlEnDeCode = (function() {
  var addCharacterEntities, charToEntity, charToEntityRegex, entityToChar, entityToCharRegex, htmlDecode, htmlEncode, resetCharacterEntities;
  charToEntityRegex = void 0;
  entityToCharRegex = void 0;
  charToEntity = void 0;
  entityToChar = void 0;
  resetCharacterEntities = function() {
    charToEntity = {};
    entityToChar = {};
    addCharacterEntities({
      '&amp;': '&',
      '&gt;': '>',
      '&lt;': '<',
      '&quot;': '"',
      '&#39;': '\''
    });
  };
  addCharacterEntities = function(newEntities) {
    var charKeys, echar, entityKeys, key, val;
    charKeys = [];
    entityKeys = [];
    key = void 0;
    echar = void 0;
    for (val in newEntities) {
      echar = newEntities[val];
      entityToChar[val] = echar;
      charToEntity[echar] = val;
      charKeys.push(echar);
      entityKeys.push(val);
    }
    charToEntityRegex = new RegExp('(' + charKeys.join('|') + ')', 'g');
    entityToCharRegex = new RegExp('(' + entityKeys.join('|') + '|&#[0-9]{1,5};' + ')', 'g');
  };
  htmlEncode = function(value) {
    var htmlEncodeReplaceFn;
    htmlEncodeReplaceFn = function(match, capture) {
      return charToEntity[capture];
    };
    if (!value) {
      return value;
    } else {
      return String(value).replace(charToEntityRegex, htmlEncodeReplaceFn);
    }
  };
  htmlDecode = function(value) {
    var htmlDecodeReplaceFn;
    htmlDecodeReplaceFn = function(match, capture) {
      if (capture in entityToChar) {
        return entityToChar[capture];
      } else {
        return String.fromCharCode(parseInt(capture.substr(2), 10));
      }
    };
    if (!value) {
      return value;
    } else {
      return String(value).replace(entityToCharRegex, htmlDecodeReplaceFn);
    }
  };
  resetCharacterEntities();
  return {
    htmlEncode: htmlEncode,
    htmlDecode: htmlDecode
  };
})();

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
    share.shareNative = function(slug, params) {
      var shareURL;
      if (params == null) {
        params = '';
      }
      console.log("Sharing video");
      if (window.plugins && window.plugins.socialsharing) {
        switch (params) {
          case '':
            shareURL = URL + '/' + slug;
            break;
          default:
            shareURL = URL + '/' + params + '/' + slug;
        }
        return window.plugins.socialsharing.share(null, 'shortFilm Window', null, shareURL, (function() {
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
        console.log(data);
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
      ({
        restrict: 'AEC'
      });
      return scope.$on('content-changed', function() {
        return new Swiper(element, {
          direction: 'vertical',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          onSlideChangeEnd: function(swiper) {
            scope.currSwiper = swiper;
            return scope.$apply(attr.detectSwiperSlide);
          },
          onSlideChangeStart: function(swiper) {
            scope.currSwiper = swiper;
            return scope.$apply(attr.detectSwiperSlide);
          }
        });
      });
    }
  };
});

shortFilmWindow.filter('encodeDecodeFilter', function() {
  return function(text) {
    return htmlEnDeCode.htmlDecode(text);
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
    $scope.share = function(slug) {
      console.log("social sharing ");
      return share.shareNative(slug);
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
      if (!angular.isUndefined(DetailsAPI.singleVideoarray.movie_id)) {
        $scope.display = 'result';
        $scope.Videodetails = DetailsAPI.singleVideoarray.singleVideoarray;
        $scope.checkIfaddedlist();
        return DetailsAPI.GetSingleVideo(DetailsAPI.singleVideoarray.movie_id).then(function(data) {
          $scope.showLoaderOrSynopsis = false;
          document.getElementById('synopsis').outerHTML = data.content;
          return $scope.initPlayer();
        }, (function(_this) {
          return function(error) {
            return console.log('error');
          };
        })(this));
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
            return console.log('error');
          };
        })(this));
      }
    };
    $scope.initPlayer = function() {
      var modifiedUrl, player, videoLinkURL;
      $scope.vType = DetailsAPI.singleVideoarray.singleVideoarray.type;
      $scope.videourl = DetailsAPI.singleVideoarray.singleVideoarray.videourl;
      if ($scope.vType === 'vimeo') {
        videoLinkURL = document.createElement('a');
        videoLinkURL.href = DetailsAPI.singleVideoarray.singleVideoarray.embedurl;
        modifiedUrl = videoLinkURL.protocol + '//' + videoLinkURL.hostname + videoLinkURL.pathname;
        return $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);
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
      onTapToRetry: function() {
        console.log('retry');
        return $scope.init();
      },
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
    $scope.initApp = function() {
      var firstScriptTag, tag;
      Parse.initialize(ParseConfiguration.applicationId, ParseConfiguration.javascriptKey, ParseConfiguration.masterKey);
      if (App.isWebView()) {
        ParsePushPlugin.getInstallationObjectId(function(id) {
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
    return $scope.initApp();
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

shortFilmWindow.controller('notificationsCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', 'ParseNotificationService', 'Storage', '$timeout', '$window', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams, ParseNotificationService, Storage, $timeout, $window) {
    $scope.notificationArray = [];
    $rootScope.$on('receiveNotification', function(event, pn) {
      return $scope.getNotifications();
    });
    $scope.view = {
      onTapToRetry: function() {
        console.log('retry');
        return $scope.getNotifications();
      }
    };
    $scope.getNotifications = function() {
      $rootScope.$broadcast('refreshContent', {});
      $scope.hgt = $window.innerHeight - 88;
      $scope.swiperhgt = $scope.hgt - 31;
      if (App.isOnline()) {
        $scope.result = 'loader';
        return Storage.watchlistDetails('get').then(function(value) {
          if (_.isNull(value)) {
            value = [];
          }
          $scope.getwatchlistDetails = value;
          return ParseNotificationService.getNotificationsWithStatus().then(function(data) {
            if (data.length === 0) {
              $scope.result = 'no-new-notifications';
              return $scope.initWatchlist;
            } else {
              $scope.refreshSwiper = false;
              $scope.notificationArray = data;
              return $timeout((function() {
                $scope.refreshSwiper = true;
                return $scope.result = 'display';
              }), 50);
            }
          })["catch"](function(error) {
            return $scope.result = 'error';
          });
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
    $scope.markNotificationAsRead = function(notification_id) {
      var matchIndex;
      if (App.isOnline()) {
        matchIndex = _.findLastIndex($scope.notificationArray, {
          "notificationId": '' + notification_id + ''
        });
        console.log(matchIndex);
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
    $scope.addwatchlist = function(movieData, notificationId) {
      var matchInWatchList, obj;
      $scope.markNotificationAsRead(notificationId);
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
    return $scope.singlePlayService = function(videoData, notificationId) {
      $scope.markNotificationAsRead(notificationId);
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
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
            var allImageUrls;
            allImageUrls = [];
            _.each(data.defaults.content, function(defaultValue, key) {
              switch (key) {
                case 'genre':
                  return _.each(defaultValue, function(value) {
                    return allImageUrls.push(value.genre_image_url);
                  });
                case 'playlists':
                  return _.each(defaultValue, function(value) {
                    return allImageUrls.push(value.playlist_image_url);
                  });
                case 'popular':
                  return _.each(defaultValue, function(popularValue, popularKey) {
                    switch (popularKey) {
                      case 'awesome_playlist':
                        return _.each(popularValue.awesome_playlist, function(value) {
                          return allImageUrls.push(value.playlist_image_url);
                        });
                      case 'new_additions':
                        return _.each(popularValue.new_additions, function(value) {
                          return allImageUrls.push(value.image);
                        });
                      case 'weekly_premiere':
                        return _.each(popularValue.weekly_premiere, function(value) {
                          return allImageUrls.push(value.image);
                        });
                    }
                  });
              }
            });
            $ImageCacheFactory.Cache([allImageUrls]);
            DetailsAPI.setData({
              premiere: $rootScope.vData.defaults.content.popular.weekly_premiere,
              new_addition: $rootScope.vData.defaults.content.popular.new_additions,
              noteworthy: $rootScope.vData.defaults.content.popular.noteworthy,
              awesome_playlist: $rootScope.vData.defaults.content.popular.awesome_playlist,
              genre: $rootScope.vData.defaults.content.genre,
              playlist: $rootScope.vData.defaults.content.playlists
            });
            return deferred.resolve($rootScope.vData);
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
        Parse.Cloud.run('listAllNotificationsForUser', {
          "installation_id": installation_id
        }, {
          success: function(results) {
            var notificationArray;
            notificationArray = [];
            _.each(results, function(value) {
              var j, obj;
              j = {};
              if (value.attributes.notificationId.attributes.movieDetails) {
                j = angular.fromJson(decodeURIComponent(value.attributes.notificationId.attributes.movieDetails));
              }
              obj = {
                "fromnow": moment(value.attributes.createdAt).fromNow(),
                "createdAt": value.attributes.createdAt,
                "notificationId": value.attributes.notificationId.id,
                "installationId": value.attributes.installationId.id,
                "alert": value.attributes.notificationId.attributes.alert,
                "movieDetails": j,
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
    $scope.detectSlideChange = function(swiperInstance) {
      console.log('asdsada');
      return console.log(swiperInstance);
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
    $scope.share = function(slug) {
      return share.shareNative(slug, 'playlist');
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
          $scope.headerwidth = device_width - 100 - 27;
          return console.log($scope.playlist);
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
              $ionicLoading.hide();
              return console.log($scope.playlist);
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
    $scope.back = function() {
      var count;
      DetailsAPI.Global_array = [];
      DetailsAPI.GlobalChild_array = [];
      count = -1;
      return App.goBack(count);
    };
    return $scope.view = {
      onTapToRetry: function() {
        console.log('retry');
        return $scope.init();
      }
    };
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
          $scope.genreobj = DetailsAPI.genre_array;
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
  '$scope', '$ionicLoading', 'App', 'GenreAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', 'Storage', '$timeout', function($scope, $ionicLoading, App, GenreAPI, DetailsAPI, $ionicHistory, share, $window, Storage, $timeout) {
    $scope.lang = null;
    $scope.sort_key = null;
    $scope.errorType = '';
    $scope.filterimg = 'img/icons/filter_grey.png';
    $scope.sortimg = 'img/icons/sort_notapplied.png';
    $scope.display = 'loader';
    $scope.Popuparray = [];
    $scope.PopuparrayClicked = ['img/icons/fresh_red.png', 'img/icons/popularity_red.png', 'img/icons/length-Red.png'];
    $scope.PopuparrayImages = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
    $scope.refreshSwiper = true;
    $scope.share = function(slug) {
      return share.shareNative(slug, 'category');
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
        if (DetailsAPI.GlobalChild_array.length > 0) {
          $scope.genreData = DetailsAPI.GlobalChild_array;
          $scope.genre = DetailsAPI.Global_array;
          $scope.sortData = DetailsAPI.Sort;
          $scope.language = DetailsAPI.Filter;
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          $scope.used_height = 88 + 73;
          $scope.hgt = device_height - $scope.used_height;
          $scope.display = 'result';
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
        templateUrl: 'filterPopup/sortPopupgener.html',
        hideOnStateChange: true
      });
    };
    $scope.langSelected = function(language_id) {
      return $scope.lang = language_id;
    };
    $scope.filterGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'filterPopup/filterpopup.html',
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
      GenreAPI.ApplyFilter(arr).then((function(_this) {
        return function(data) {
          DetailsAPI.GlobalChild_array = data.movies;
          DetailsAPI.Global_array = data.genre;
          DetailsAPI.Filter = data.filters.languages;
          DetailsAPI.Sort = data.sort_keys;
          if (DetailsAPI.GlobalChild_array.length > 0) {
            $scope.display = 'result';
            $scope.genreData = data.movies;
            $scope.genre = data.genre;
            $scope.sortData = data.sort_keys;
            $scope.language = data.filters.languages;
            $ionicLoading.hide();
            $scope.refreshSwiper = false;
            return $timeout((function() {
              $scope.refreshSwiper = true;
              return $scope.display = 'result';
            }), 100);
          } else {
            $scope.errorType = 'no_Search_result';
            return $scope.display = 'error';
          }
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.errorType = '';
          return $scope.display = 'error';
        };
      })(this));
      return $ionicLoading.hide();
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
        $scope.init();
        return $scope.display = 'loader';
      }
    };
  }
]);

shortFilmWindow.controller('popularCtrl', [
  '$scope', '$rootScope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$window', 'InitialiseService', 'Storage', '$timeout', function($scope, $rootScope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $window, InitialiseService, Storage, $timeout) {
    var findIndexInWatchlist, findIndexInallContentArray, initDetailsApi, initWatchlist;
    $scope.getwatchlistDetails = [];
    $scope.currentCard = {};
    $scope.refreshSwiper = true;
    $rootScope.$on('watchListUpdate', function(event, data) {
      $scope.getwatchlistDetails = data;
      return $scope.checkIfaddedlist();
    });
    $rootScope.$on('refreshContent', function(event, data) {
      return $scope.doRefresh();
    });
    $scope.detectSlideChange = function(swiperInstance) {
      return $scope.currentCard = $scope.allContentArray[swiperInstance.activeIndex];
    };
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
    findIndexInallContentArray = function(movieId) {
      var match;
      return match = _.findIndex($scope.allContentArray, {
        "movieId": movieId
      });
    };
    findIndexInWatchlist = function(movieId) {
      var match;
      return match = _.findIndex($scope.getwatchlistDetails, {
        "movie_id": movieId
      });
    };
    $scope.updateFlagInallContentArray = function(movieId, flag) {
      var matchIndex;
      matchIndex = findIndexInallContentArray(movieId);
      return $scope.allContentArray[matchIndex].addedToWatchList = flag;
    };
    $scope.addwatchlist = function(movieData) {
      var matchInWatchList, obj;
      obj = {
        "movie_id": movieData.movieId,
        "singleVideoarray": movieData.content
      };
      matchInWatchList = findIndexInWatchlist(movieData.movieId);
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
        PulltorefreshAPI.pullrequest().then((function(_this) {
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
            $ionicLoading.hide();
            return $scope.initApp();
          };
        })(this), (function(_this) {
          return function(error) {
            return $scope.$broadcast('scroll.refreshComplete');
          };
        })(this));
        return $ionicLoading.hide();
      }
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
        $scope.display = 'nonetwork';
        return broadcastOnComplete();
      } else {
        initDetailsApi();
        return $scope.display = 'result';
      }
    };
    initDetailsApi = function() {
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
      $scope.refreshSwiper = false;
      return $timeout((function() {
        $scope.refreshSwiper = true;
        $scope.allContentArray = _.union(premierArr, additionArr, noteworthyArr, awPlalistArr);
        $scope.currentCard = $scope.allContentArray[0];
        return initWatchlist();
      }), 100);
    };
    return initWatchlist = function() {
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
