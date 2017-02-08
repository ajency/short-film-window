var GLOBAL_URL, device_height, device_width;

GLOBAL_URL = 'http://www.shortfilmwindow.com';

device_width = '';

device_height = '';

var shortFilmWindow;

shortFilmWindow = angular.module('SFWApp', ['ionic', 'ngCordova', 'ngAnimate', 'ngSanitize', 'ion-sticky', 'ionicLazyLoad', 'ionic.ion.imageCacheFactory', 'ionic.contrib.ui.ionThread', 'templates']);

shortFilmWindow.value('FirebaseKey', {
  apiKey: "AIzaSyCIzwFzGdQUCc_CXpo7WfW8rg_5kHyQjfU",
  authDomain: "sfwindow-b3160.firebaseapp.com",
  databaseURL: "https://sfwindow-b3160.firebaseio.com",
  storageBucket: "sfwindow-b3160.appspot.com",
  messagingSenderId: "499710069011"
}).constant('PushConfig', {
  android: {
    senderID: "499710069011",
    icon: "notification_icon",
    clearBadge: true
  },
  ios: {
    senderID: "499710069011",
    gcmSandbox: false,
    clearBadge: true,
    alert: true,
    badge: true,
    sound: false
  }
});

shortFilmWindow.run([
  'PushConfig', 'FirebaseApi', '$ionicPlatform', '$state', '$rootScope', 'App', '$timeout', '$window', '$cordovaNetwork', '$cordovaToast', 'DetailsAPI', function(PushConfig, FirebaseApi, $ionicPlatform, $state, $rootScope, App, $timeout, $window, $cordovaNetwork, $cordovaToast, DetailsAPI) {
    $ionicPlatform.ready(function() {
      var device_height, device_width;
      $rootScope.isAndroid = ionic.Platform.isAndroid();
      FirebaseApi.firebaseInit();
      $rootScope.App = App;
      device_width = $window.innerWidth;
      device_height = $window.innerHeight;
      $rootScope.device_height = $window.innerHeight;
      return FirebaseApi.pushPluginInit().then(function(result) {
        var push;
        console.log(result);
        if (ionic.Platform.isWebView()) {
          push = PushNotification.init(PushConfig);
          push.on('notification', function(data) {
            console.log(data);
            return $rootScope.$broadcast('receiveNotification', {
              payload: data
            });
          });
        }
        App.hideSplashScreen();
        if (App.isInitialRun()) {
          App.setInitialRun(false);
          return App.navigate('appSlides');
        } else {
          return App.navigate('appInitialize');
        }
      }, function(error) {
        console.log(error, 'ERROR');
        return navigator.app.exitApp();
      });
    });
    $ionicPlatform.registerBackButtonAction((function(event) {
      var count;
      if ($state.current.name === 'popular') {
        navigator.app.exitApp();
      } else {
        count = -1;
        App.goBack(count);
      }
    }), 100);
    window.fbAsyncInit = function() {
      FB.init({
        appId: '586411814878247',
        version: 'v2.4',
        cookie: true,
        xfbml: true
      });
    };
    (function(d, s, id) {
      var fjs, js;
      js = void 0;
      fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      console.log("FROM : " + from.name + " , TO : " + to.name);
      if (to.name === 'notifications') {
        $rootScope.pageHeader = 'Notifications';
      } else {
        $rootScope.pageHeader = 'ShortFilmWindow';
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
        return ev.preventDefault();
      }
    });
  }
]);

shortFilmWindow.config([
  '$compileProvider', '$ionicConfigProvider', '$sceDelegateProvider', function($compileProvider, $ionicConfigProvider, $sceDelegateProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
    $compileProvider.debugInfoEnabled(false);
    return $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?)://(w{3}.)?youtube.com/.+$')]);
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

shortFilmWindow.controller('playerCtrl', [
  '$scope', '$sce', 'DetailsAPI', '$ionicHistory', 'App', '$timeout', function($scope, $sce, DetailsAPI, $ionicHistory, App, $timeout) {
    var player;
    $scope.temp = "temp";
    $scope.videoDetails = DetailsAPI.singleVideoarray;
    $scope.videourl = $scope.videoDetails.singleVideoarray.videourl;
    player = null;
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
    return $scope.view = {
      back: function() {
        var count;
        count = -1;
        return App.goBack(count);
      },
      vType: $scope.videoDetails.singleVideoarray.type,
      vimomeo: true,
      init: function() {
        var modifiedUrl, onPlayerReady, onYouTubeIframeAPIReady;
        if (this.vType === 'vimeo') {
          modifiedUrl = $scope.videoDetails.singleVideoarray.embedurl;
          this.vimomeo = true;
          return $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);
        } else {
          this.vimomeo = false;
          console.log($scope.videoDetails.singleVideoarray, "videoDetails");
          modifiedUrl = $scope.videoDetails.singleVideoarray.embedurl;
          onYouTubeIframeAPIReady = function() {
            return player = new YT.Player('player2', {
              height: '100%',
              width: '100%',
              videoId: $scope.videoDetails.singleVideoarray.videourl,
              events: {
                'onReady': onPlayerReady
              }
            });
          };
          onPlayerReady = function(event) {
            console.log("PLAY");
            return event.target.playVideo();
          };
          $scope.player2 = $sce.trustAsResourceUrl(modifiedUrl);
          return onYouTubeIframeAPIReady();
        }
      }
    };
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
        console.log(value);
        $scope.watchlistDetails = value;
        if (_.isNull($scope.watchlistDetails)) {
          $scope.display = 'no_result';
          return $scope.$apply();
        } else {
          if ($scope.watchlistDetails.length > 0) {
            device_width = $window.innerWidth;
            device_height = $window.innerHeight;
            $scope.used_height = 43 + 90;
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
      $scope.CheckWatchlist(Id);
      return $ionicScrollDelegate.resize();
    };
    $scope.singlePlayService = function(videoData) {
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
    return $scope.CheckWatchlist = function(Id) {
      var matchIndex;
      matchIndex = _.findLastIndex($scope.watchlistDetails, {
        "movie_id": Id
      });
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
        console.log("in back function");
        console.log(this.previousState);
        console.log(this.currentState);
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
      },
      hideSplashScreen: function() {
        if (navigator.splashscreen) {
          return navigator.splashscreen.hide();
        }
      },
      hideKeyboard: function() {
        if (this.isWebView() && cordova.plugins.Keyboard) {
          return cordova.plugins.Keyboard.close();
        }
      },
      showKeyboard: function() {
        return true;
      },
      setInitialRun: function(initial) {
        $window.localStorage['initialRun'] = initial ? 'true' : 'false';
      },
      isInitialRun: function() {
        var value;
        value = $window.localStorage['initialRun'] || 'true';
        return value === 'true';
      }
    };
  }
]);

shortFilmWindow.directive('ajError', [
  function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'Global/error.html',
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
      var URL, shareURL;
      if (params == null) {
        params = '';
      }
      console.log("Sharing video", slug, params);
      URL = "http://shortfilm.staging.wpengine.com/";
      if (window.plugins && window.plugins.socialsharing) {
        switch (params) {
          case '':
            shareURL = URL + '/' + slug;
            break;
          default:
            shareURL = URL + '/' + params + '/' + slug;
        }
        return window.plugins.socialsharing.share(null, 'shortFilm Window', null, shareURL, function() {
          return console.log('Success');
        }, function(error) {
          return console.log('Share fail ' + error);
        });
      } else {
        return console.log('Share plugin not available');
      }
    };
    return share;
  }
]);

shortFilmWindow.factory('FacebookGraphAPI', [
  '$q', '$http', function($q, $http) {
    var FacebookAPI;
    FacebookAPI = {};
    FacebookAPI.comments = [];
    FacebookAPI.graphURL = 'https://graph.facebook.com/comments?id=' + GLOBAL_URL;
    FacebookAPI.slug = '';
    FacebookAPI.accessToken = '';
    FacebookAPI.getAllComments = function(slug) {
      var defer;
      defer = $q.defer();
      FacebookAPI.slug = slug;
      $http.get(FacebookAPI.graphURL + '/' + slug + '/&filter=stream&fields=from,message,user_likes,link,name,caption,description,created_time,updated_time,likes,like_count,comments{from,message,link,name,caption,description,created_time,updated_time,like_count}').then(function(data) {
        console.log(data);
        FacebookAPI.comments = data.data;
        return defer.resolve(FacebookAPI.comments);
      }, function(error) {
        return defer.reject(data);
      });
      return defer.promise;
    };
    FacebookAPI.checkLoginStatus = function() {
      var defer;
      defer = $q.defer();
      facebookConnectPlugin.getLoginStatus((function(status) {
        console.log('User logged in');
        console.log(status);
        return defer.resolve(status);
      }), function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    FacebookAPI.loginToFacebook = function() {
      var defer, fbLoginSuccess;
      defer = $q.defer();
      fbLoginSuccess = function(userData) {
        console.log('Login Success');
        console.log('UserInfo: ', userData);
        FacebookAPI.accessToken = userData.authResponse.accessToken;
        return defer.resolve(userData);
      };
      facebookConnectPlugin.login(['manage_pages', 'publish_pages'], fbLoginSuccess, function(error) {
        console.log('Login Error');
        console.error(error);
        return defer.reject(error);
      });
      return defer.promise;
    };
    return FacebookAPI;
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
    DetailsAPI.array_mostpopular = [];
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
      $http.get(GLOBAL_URL + '/wp-json/get_defaults').then(function(data) {
        console.log("In get video details api", data);
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.GetSingleVideo = function(VideoId) {
      var defer;
      defer = $q.defer();
      $http.get(GLOBAL_URL + ("/wp-json/get_video?id=" + VideoId)).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.searchResult = function(txt) {
      var defer;
      defer = $q.defer();
      $http.get(GLOBAL_URL + ("/wp-json/search?str=" + txt)).then(function(data) {
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
      DetailsAPI.array_mostpopular = opts.mstPopular;
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
      $http.get(GLOBAL_URL + '/wp-json/get_defaults').then(function(data) {
        console.log("Inside get data pull to refresh", data);
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    PulltorefreshAPI.saveData = function(opts) {
      if (opts == null) {
        opts = {};
      }
      console.log("Inside save data pull to refresh", opts);
      DetailsAPI.array = opts.premiere;
      DetailsAPI.array_addition = opts.new_addition;
      DetailsAPI.array_noteworthy = opts.noteworthy;
      DetailsAPI.array_awplalist = opts.awesome_playlist;
      DetailsAPI.genre_array = opts.genre;
      DetailsAPI.playlist_array = opts.playlist;
      return DetailsAPI.array_mostpopular = opts.mstPopular;
    };
    return PulltorefreshAPI;
  }
]);

shortFilmWindow.directive('dynFbCommentBox', function() {
  var createHTML, postLink;
  createHTML = function(href, numposts, colorscheme) {
    return '<div class="fb-comments" ' + 'data-href="' + href + '" ' + 'data-numposts="' + numposts + '" ' + 'data-colorsheme="' + colorscheme + '">' + '</div>';
  };
  return {
    restrict: 'A',
    scope: {},
    link: postLink = function(scope, elem, attrs) {
      return attrs.$observe('pageHref', function(newValue) {
        var colorscheme, href, numposts;
        href = newValue;
        numposts = attrs.dataNumposts || 2;
        colorscheme = attrs.colorscheme || 'light';
        elem.html(createHTML(href, numposts, colorscheme));
        return FB.XFBML.parse(elem[0]);
      });
    }
  };
});

shortFilmWindow.directive('isLoaded', function() {
  return {
    scope: false,
    restrict: 'A',
    link: function(scope, elements, args) {
      if (scope.$last) {
        return scope.$emit('content-changed');
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
  '$scope', 'App', 'DetailsAPI', '$ionicLoading', '$ionicHistory', 'share', 'Storage', '$sce', 'FacebookGraphAPI', '$cordovaOauth', function($scope, App, DetailsAPI, $ionicLoading, $ionicHistory, share, Storage, $sce, FacebookGraphAPI, $cordovaOauth) {
    $scope.Videodetails = [];
    $scope.addvideoDetails = [];
    $scope.getwatchlistDetails = [];
    $scope.watchFlag = '0';
    $scope.intFlag = '0';
    $scope.watchlistimg = '';
    $scope.showLoaderOrSynopsis = true;
    $scope.appURL = GLOBAL_URL;
    $scope.showVideo = false;
    $scope.showLoginBtn = true;
    $scope.share = function(slug) {
      return share.shareNative(slug);
    };
    $scope.addwatchlist = function() {
      return $scope.CheckWatchlist();
    };
    $scope.checkIfaddedlist = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var i;
        $scope.getwatchlistDetails = value;
        if (_.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length === 0) {
          $scope.watchlistimg = 'icon-favorite';
          return $scope.$apply();
        } else {
          i = 0;
          while (i < $scope.getwatchlistDetails.length) {
            if ($scope.getwatchlistDetails[i].movie_id === $scope.Videodetails.movie_id) {
              $scope.intFlag = '1';
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
        var matchIndex, obj, wl;
        $scope.getwatchlistDetails = value;
        obj = {
          "movie_id": DetailsAPI.singleVideoarray.movie_id,
          "singleVideoarray": DetailsAPI.singleVideoarray.singleVideoarray
        };
        if (_.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length === 0) {
          $scope.addvideoDetails.push(obj);
          Storage.watchlistDetails('set', $scope.addvideoDetails);
          $scope.watchlistimg = 'icon-unfavorite';
          return $scope.$apply();
        } else {
          matchIndex = _.findLastIndex($scope.getwatchlistDetails, {
            "movie_id": DetailsAPI.singleVideoarray.movie_id
          });
          if (matchIndex !== -1) {
            $scope.getwatchlistDetails.splice(matchIndex, 1);
            wl = $scope.getwatchlistDetails;
            $scope.addvideoDetails = wl;
            Storage.watchlistDetails('set', $scope.addvideoDetails);
            $scope.watchlistimg = 'icon-favorite';
            return $scope.$apply();
          } else {
            $scope.getwatchlistDetails.push(obj);
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
      console.log("Inside Init controller", DetailsAPI.singleVideoarray.movie_id);
      if (!angular.isUndefined(DetailsAPI.singleVideoarray.movie_id)) {
        $scope.display = 'result';
        $scope.Videodetails = DetailsAPI.singleVideoarray.singleVideoarray;
        console.log("Displaying video details");
        console.log(GLOBAL_URL);
        console.log($scope.Videodetails);
        $scope.checkIfaddedlist();
        return DetailsAPI.GetSingleVideo(DetailsAPI.singleVideoarray.movie_id).then(function(data) {
          $scope.showLoaderOrSynopsis = false;
          return $scope.synopsisData = data.content;
        }, function(error) {});
      } else {
        return DetailsAPI.GetSingleVideo(movieId).then(function(data) {
          var obj;
          $scope.display = 'result';
          obj = {
            "movie_id": data.movie_id,
            "singleVideoarray": data
          };
          DetailsAPI.singleVideoarray = obj;
          $scope.Videodetails = data;
          $scope.showLoaderOrSynopsis = false;
          return $scope.synopsisData = $scope.Videodetails.content;
        }, function(error) {
          return console.log('error');
        });
      }
    };
    $scope.initializeApp = function() {
      $scope.display = 'loader';
      console.log("INITIALIZEAPP ", DetailsAPI);
      return $scope.init(DetailsAPI.videoId);
    };
    $scope.trustAsHtml = function(string) {
      return $sce.trustAsHtml(string);
    };
    $scope.view = {
      onTapToRetry: function() {
        return $scope.init();
      },
      back: function() {
        var count;
        DetailsAPI.singleVideoarray = [];
        count = -1;
        return App.goBack(count);
      },
      playVideo: function() {
        $scope.showVideo = true;
        return App.navigate('singlePlayer');
      }
    };
    if (App.fromNotification) {
      return $scope.initializeApp();
    } else {
      return $scope.init();
    }
  }
]);

shortFilmWindow.controller('appInitializeCtrl', [
  '$scope', 'App', 'InitialiseService', '$rootScope', '$ionicPlatform', function($scope, App, InitialiseService, $rootScope, $ionicPlatform) {
    $scope.initApp = function() {
      console.log("APP STARTED");
      if (App.isWebView()) {
        console.log("ISWEBVIEW");
      }
      $scope.display = 'loader';
      $scope.errorType = 'offline';
      if (!App.isOnline()) {
        return $scope.display = 'error';
      } else {
        return InitialiseService.initialize().then(function(data) {
          console.log(data, " INITIALIZED");
          return App.navigate('popular');
        }, function(error) {
          return $scope.display = 'error';
        });
      }
    };
    return $ionicPlatform.ready(function() {
      return $scope.initApp();
    });
  }
]);

shortFilmWindow.controller('appSlidesCtrl', [
  '$scope', 'App', 'InitialiseService', '$rootScope', '$ionicPlatform', 'FirebaseApi', function($scope, App, InitialiseService, $rootScope, $ionicPlatform, FirebaseApi) {
    $scope.initApp = function() {
      console.log("APP STARTED for the first time");
      $scope.startApp = function() {
        if (!App.isOnline()) {
          return $scope.display = 'error';
        } else {
          $scope.apiLoading = true;
          return InitialiseService.initialize().then(function(data) {
            console.log(data, " INITIALIZED");
            $scope.apiLoading = false;
            return App.navigate('popular');
          }, function(error) {
            return $scope.display = 'error';
          });
        }
      };
      $scope.next = function() {
        $ionicSlideBoxDelegate.next();
      };
      $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
      };
      return $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
      };
    };
    return $scope.initApp();
  }
]);

shortFilmWindow.controller('navigateCtrl', [function() {}]).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('appSlides', {
      url: '/appSlides',
      abstract: false,
      controller: 'appSlidesCtrl',
      templateUrl: 'landingVideo/appSlides.html'
    }).state('appInitialize', {
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

shortFilmWindow.controller('notificationsCtrl', [
  'FirebaseApi', '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', 'Storage', '$timeout', '$window', function(FirebaseApi, $rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams, Storage, $timeout, $window) {
    $scope.notificationArray = [];
    $rootScope.$on('receiveNotification', function(event, pn) {
      console.log("RECEIVE PUSH Notifications", event, pn);
      return $scope.getNotifications();
    });
    $scope.view = {
      onTapToRetry: function() {
        return $scope.getNotifications();
      }
    };
    $scope.getNotifications = function() {
      console.log("GET Notifications");
      $rootScope.$broadcast('refreshContent', {});
      $scope.hgt = $window.innerHeight - 80;
      $scope.swiperhgt = $scope.hgt - 31;
      if (App.isOnline()) {
        $scope.result = 'loader';
        return Storage.watchlistDetails('get').then(function(value) {
          if (_.isNull(value)) {
            value = [];
          }
          $scope.getwatchlistDetails = value;
          return FirebaseApi.fetchNotifications().then(function(data) {
            console.log(data, " Notifications");
            if (data.length === 0) {
              console.log("No data");
              return $scope.result = 'no-new-notifications';
            } else {
              console.log("Data present");
              $scope.refreshSwiper = false;
              $scope.notificationArray = data;
              return $timeout((function() {
                $scope.refreshSwiper = true;
                return $scope.result = 'display';
              }), 50);
            }
          }, function(error) {
            console.log("In error", error);
            return $scope.result = 'error';
          })["catch"](function(error) {
            console.log("In error", error);
            return $scope.result = 'error';
          });
        });
      } else {
        console.log("App not online");
        return $scope.result = 'error';
      }
    };
    $scope.clearNotifications = function() {
      if (App.isOnline()) {
        $scope.notificationArray = [];
        $scope.result = 'no-new-notifications';
        $rootScope.unreadNotificationCount = 0;
        return FirebaseApi.deleteNotifications().then(function(data) {
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
        if ($scope.notificationArray[matchIndex].status === 'unread') {
          console.log('PUsH');
          FirebaseApi.updateNotificationStatus(notification_id).then(function(data) {
            return console.log(data);
          })["catch"](function(error) {
            return $scope.result = 'error';
          });
        } else {
          console.log('DONT PUsH');
        }
        $scope.notificationArray[matchIndex].status = 'read';
        if ($rootScope.unreadNotificationCount) {
          return $rootScope.unreadNotificationCount--;
        }
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
      console.log(notificationId);
      $scope.markNotificationAsRead(notificationId);
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
  }
]);

shortFilmWindow.service('FirebaseApi', [
  '$ionicPlatform', '$q', 'FirebaseKey', 'App', 'Storage', 'PushConfig', '$rootScope', function($ionicPlatform, $q, FirebaseKey, App, Storage, PushConfig, $rootScope) {
    var DEVICETOKEN, LIMITTOLAST, firebaseCloudApi;
    DEVICETOKEN = null;
    LIMITTOLAST = 20;
    firebaseCloudApi = {};
    firebaseCloudApi.setDeviceToke = function(token) {
      if (token == null) {
        token = null;
      }
      if (token) {
        return DEVICETOKEN = token;
      }
    };
    firebaseCloudApi.firebaseInit = function() {
      console.log(' INITIALISING FIREBASE');
      return firebase.initializeApp(FirebaseKey);
    };
    firebaseCloudApi.pushPluginInit = function() {
      var defer, push;
      console.log(' INITIALISING PUSH PLUGIN');
      defer = $q.defer();
      if (ionic.Platform.isWebView()) {
        push = PushNotification.init(PushConfig);
        push.on('registration', function(data) {
          console.log('DEVICE ID ->', data.registrationId);
          return firebaseCloudApi.registerDevice(data.registrationId).then(function(result) {
            var platform;
            platform = ionic.Platform.platform();
            return push.subscribe('' + platform + '', function() {
              return defer.resolve('SUCCESS');
            }, function(e) {
              return defer.reject('ERROR');
            });
          }, function(error) {
            return defer.reject('ERROR');
          });
        }, function(er) {
          return defer.reject('ERRR');
        });
        push.on('error', function(data) {
          return defer.reject('ERROR');
        });
      } else {
        firebaseCloudApi.registerDevice('DUMMY_UUID').then(function(result) {
          return defer.resolve('SUCCESS');
        }, function(ERR) {
          return defer.reject('ERROR');
        });
      }
      return defer.promise;
    };
    firebaseCloudApi.getCreationDate = function() {
      var defer;
      defer = $q.defer();
      Storage.creationDate('get').then(function(date) {
        if (date) {
          return defer.resolve(date);
        } else {
          return firebase.database().ref('installation/' + DEVICETOKEN).once('value').then(function(data) {
            console.log(data.val(), 'DATe');
            Storage.creationDate('set', data.val().createdAt);
            return defer.resolve(data.val().createdAt);
          }, function(error) {
            return defer.reject(error);
          });
        }
      });
      return defer.promise;
    };
    firebaseCloudApi.getDeviceToken = function() {
      var defer;
      defer = $q.defer();
      if (ionic.Platform.isWebView()) {
        Storage.deviceToken('get').then(function(deviceToken) {
          var push;
          if (deviceToken) {
            DEVICETOKEN = deviceToken;
            return defer.resolve(deviceToken);
          } else {
            push = PushNotification.init(PushConfig);
            return push.on('registration', function(data) {
              Storage.deviceToken('set', data.registrationId);
              DEVICETOKEN = data.registrationId;
              return defer.resolve(data.registrationId);
            });
          }
        });
      } else {
        DEVICETOKEN = 'DUMMY_UUID';
        Storage.deviceToken('set', 'DUMMY_UUID');
        defer.resolve('DUMMY_UUID');
      }
      return defer.promise;
    };
    firebaseCloudApi.saveNotification = function() {
      var defer;
      console.log(DEVICETOKEN);
      defer = $q.defer();
      firebase.database().ref('notifications/' + DEVICETOKEN).push({
        "movieId": 930,
        "alert": "TEST Notification",
        "createdAt": "2016-12-22T12:56:59.706Z",
        "updatedAt": "2016-12-22T12:57:14.455Z",
        "movieDetails": {
          "found": true,
          "movie_id": 930,
          "no_of_views": "193",
          "no_of_likes": "189",
          "title": "test notif",
          "type": "youtube",
          "tagline": "",
          "videourl": "https:\/\/balsamiq.com\/",
          "embedurl": "https:\/\/www.youtube.com\/embed\/?autoplay=1",
          "director": "ShortFilmWindow",
          "image": "http:\/\/shortfilm.staging.wpengine.com\/wp-content\/themes\/short-film\/assets\/img\/placeholder.jpg",
          "duration": "5",
          "region": "",
          "language": "",
          "genres": ["Uncategorized"],
          "content": "",
          "slug": "test-notif-2"
        }
      }).then(function(result) {
        return defer.resolve(result);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    firebaseCloudApi.fetchNotifications = function() {
      var defer;
      defer = $q.defer();
      firebaseCloudApi.getCreationDate().then(function(date) {
        return firebase.database().ref('notifications').orderByChild('created').startAt(date).limitToLast(LIMITTOLAST).once('value').then(function(data) {
          var count, flag, i, j, keys, movieDetails, notifications, obj, ref, t, t2, temp;
          count = 0;
          if (data.val()) {
            temp = data.val();
            keys = Object.keys(temp);
            notifications = [];
            for (i = j = 0, ref = keys.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
              temp[keys[i]].id = keys[i];
              t = temp[keys[i]];
              movieDetails = JSON.parse(decodeURIComponent(t.movieDetails));
              obj = {
                "fromnow": moment(moment.unix(t.created).toString()).fromNow(),
                "createdAt": t.created,
                "notificationId": t.id,
                "alert": t.alert,
                "movieDetails": movieDetails,
                "status": t.status
              };
              flag = false;
              if (t.deviceIDs) {
                t2 = t.deviceIDs[DEVICETOKEN];
                if (t2) {
                  if (t2.hasCleared === false && t2.hasSeen === false) {
                    obj.status = 'unread';
                    count++;
                  } else if (t2.hasCleared === false && t2.hasSeen === true) {
                    obj.status = 'read';
                  }
                } else {
                  count++;
                  obj.status = 'unread';
                }
              } else {
                count++;
                obj.status = 'unread';
              }
              if (_.isString(obj.movieDetails.title) && obj.movieDetails.title.indexOf('+') !== -1) {
                obj.movieDetails.title = obj.movieDetails.title.replace(/\+/g, ' ');
              }
              if (_.isString(obj.movieDetails.director) && obj.movieDetails.director.indexOf('+') !== -1) {
                obj.movieDetails.director = obj.movieDetails.director.replace(/\+/g, ' ');
              }
              if (_.isString(obj.movieDetails.tagline) && obj.movieDetails.tagline.indexOf('+') !== -1) {
                obj.movieDetails.tagline = obj.movieDetails.tagline.replace(/\+/g, ' ');
              }
              if (t.deviceIDs) {
                if (t.deviceIDs[DEVICETOKEN]) {
                  if (!t.deviceIDs[DEVICETOKEN].hasCleared) {
                    notifications.push(obj);
                  }
                } else {
                  notifications.push(obj);
                }
              } else {
                notifications.push(obj);
              }
            }
            $rootScope.unreadNotificationCount = count;
            return defer.resolve(notifications);
          } else {
            return defer.resolve([]);
          }
        }, function(error) {
          return defer.reject(error);
        });
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    firebaseCloudApi.getUnreadNotificationsCount = function() {
      var count, defer;
      count = 0;
      defer = $q.defer();
      firebaseCloudApi.getCreationDate().then(function(date) {
        console.log(date, 'DATE');
        return firebase.database().ref('notifications').orderByChild('created').startAt(date).limitToLast(LIMITTOLAST).once('value').then(function(data) {
          var i, j, keys, ref, t, t2, temp;
          if (data.val()) {
            temp = data.val();
            keys = Object.keys(temp);
            for (i = j = 0, ref = keys.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
              temp[keys[i]].id = keys[i];
              t = temp[keys[i]];
              if (t.deviceIDs) {
                t2 = t.deviceIDs[DEVICETOKEN];
                if (t2) {
                  if (t2.hasCleared === false && t2.hasSeen === false) {
                    count++;
                  }
                } else {
                  count++;
                }
              } else {
                count++;
              }
            }
            $rootScope.unreadNotificationCount = count;
            return defer.resolve(count);
          } else {
            return defer.resolve(count);
          }
        }, function(error) {
          return defer.reject(error);
        });
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    firebaseCloudApi.fetchAllDevices = function() {
      var defer;
      defer = $q.defer();
      firebase.database().ref('installation').once('value').then(function(data) {
        return defer.resolve(data.val());
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    firebaseCloudApi.deleteNotifications = function() {
      var deferred;
      deferred = $q.defer();
      firebaseCloudApi.getCreationDate().then(function(date) {
        return firebase.database().ref('notifications').orderByChild('created').startAt(date).limitToLast(LIMITTOLAST).once('value').then(function(data) {
          var i, j, keys, ref, result, results;
          result = data.val();
          if (result) {
            keys = Object.keys(result);
            results = [];
            for (i = j = 0, ref = keys.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
              results.push(firebase.database().ref('notifications/' + keys[i] + '/deviceIDs/' + DEVICETOKEN).update({
                hasCleared: true
              }).then(function(result) {
                return deferred.resolve(result);
              }, function(error) {
                return deferred.reject(error);
              }));
            }
            return results;
          } else {
            return deferred.reject('error');
          }
        }, function(error) {
          return deferred.reject(error);
        });
      }, function(error) {
        return deferred.reject(error);
      });
      return deferred.promise;
    };
    firebaseCloudApi.updateNotificationStatus = function(notificationId) {
      var defer;
      console.log(DEVICETOKEN, notificationId);
      if (notificationId) {
        defer = $q.defer();
        firebase.database().ref('notifications/' + notificationId + '/deviceIDs').child(DEVICETOKEN).set({
          hasCleared: false,
          hasSeen: true
        }).then(function(result) {
          return defer.resolve(result);
        }, function(error) {
          return defer.reject(error);
        });
      } else {
        defer.reject('Notification ID is null');
      }
      return defer.promise;
    };
    firebaseCloudApi.registerDevice = function(deviceToken) {
      var defer;
      defer = $q.defer();
      firebaseCloudApi.getDeviceToken().then(function(token) {
        console.log(token, 'DEVICETOKEN -- registerDevice');
        return firebase.database().ref('installation/' + token).once('value').then(function(data) {
          var flag, result, timestamp;
          result = data.val();
          flag = false;
          console.log(result, 'FETCH DATA');
          timestamp = moment().unix().valueOf();
          if (result) {
            if (result.deviceToken === token) {
              flag = true;
            }
            if (flag) {
              console.log('deviceAlreadyRegistered');
            } else {
              console.log('newDevice');
            }
            if (!flag) {
              firebase.database().ref('installation').child(token).set({
                device: ionic.Platform.platform(),
                deviceToken: token,
                createdAt: timestamp
              });
              Storage.creationDate('set', timestamp);
            }
          } else {
            if (result === null) {
              firebase.database().ref('installation').child(token).set({
                device: ionic.Platform.platform(),
                deviceToken: token,
                createdAt: timestamp
              });
              Storage.creationDate('set', timestamp);
            }
          }
          return defer.resolve('success');
        }, function(error) {
          return defer.reject('error');
        });
      });
      return defer.promise;
    };
    return firebaseCloudApi;
  }
]);

shortFilmWindow.service('InitialiseService', [
  '$q', 'DetailsAPI', 'App', '$rootScope', '$ImageCacheFactory', 'FirebaseApi', 'PushConfig', function($q, DetailsAPI, App, $rootScope, $ImageCacheFactory, FirebaseApi, PushConfig) {
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
              mstPopular: $rootScope.vData.defaults.content.popular.most_popular,
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

shortFilmWindow.controller('sidebarCtrl', [
  "FirebaseApi", "$scope", "$rootScope", "$ionicModal", "$ionicPopup", "$ionicSideMenuDelegate", "App", "DetailsAPI", "$ionicLoading", "$window", "Storage", "$timeout", function(FirebaseApi, $scope, $rootScope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, App, DetailsAPI, $ionicLoading, $window, Storage, $timeout) {
    $scope.showsearchbar = false;
    $scope.searchDisplay = 'tabview';
    $scope.errorType = '';
    $scope.SearchResult = [];
    $scope.classname = '';
    $scope.watchListCount = '0';
    $rootScope.unreadNotificationCount = 0;
    $scope.getwatchlistDetails = [];
    $scope.hideSearchBar = function() {
      return $scope.showsearchbar = 'hide';
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
    $rootScope.$on('openNotification', function(event, pn) {
      App.fromNotification = 1;
      console.log("PUSH NOTIFICATION", pn, "SIDEBAR");
      DetailsAPI.videoId = pn.payload.movieId;
      if ($rootScope.unreadNotificationCount) {
        $rootScope.unreadNotificationCount--;
      }
      App.notificationPayload = pn;
      return App.navigate('init');
    });
    $rootScope.$on('receiveNotification', function(event, pn) {
      console.log("PUSH NOTIFICATION RECEIVED", pn);
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
      return FirebaseApi.getUnreadNotificationsCount().then(function(value) {
        console.log('GET UNREAD ROOT');
        return $rootScope.unreadNotificationCount = value;
      });
    };
    $scope.singlePlayService = function(videoData) {
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
    $scope.searchMovie = function(txt) {
      if (txt == null) {
        txt = null;
      }
      console.log(txt);
      if (txt) {
        return Storage.watchlistDetails('get').then(function(value) {
          if (_.isNull(value)) {
            value = [];
          }
          $scope.watchlistDetails = value;
          $scope.searchDisplay = 'loader';
          App.hideKeyboard();
          return DetailsAPI.searchResult(txt).then(function(data) {
            var device_height, device_width;
            if (!_.isEmpty($scope.SearchResult)) {
              $scope.SearchResult = [];
            }
            $scope.SearchResult = data;
            device_width = $window.innerWidth;
            device_height = $window.innerHeight;
            $scope.hgt = device_height - 32;
            return $timeout(function() {
              if ($scope.SearchResult.length === 0) {
                $scope.errorType = 'no_Search_result';
                return $scope.searchDisplay = 'error';
              } else {
                $scope.classname = 'searchResult';
                return $scope.searchDisplay = 'searchresult';
              }
            });
          }, function(error) {
            $scope.errorType = 'offline';
            return $scope.searchDisplay = 'error';
          });
        });
      }
    };
    $scope.onTapToRetry = function() {
      return $scope.searchMovie();
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
    return $scope.showPopup = function() {
      var myPopup;
      $scope.data = {};
      return myPopup = $ionicPopup.show({
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
  }
]);

shortFilmWindow.factory('Storage', [
  '$rootScope', '$q', function($rootScope, $q) {
    var Storage;
    Storage = {};
    Storage.watchlistDetails = function(action, params) {
      switch (action) {
        case 'set':
          return localforage.setItem('watchlist_details', params, function(err, value) {
            return $rootScope.$broadcast('watchListUpdate', params);
          });
        case 'get':
          return localforage.getItem('watchlist_details');
        case 'remove':
          return localforage.removeItem('watchlist_details');
      }
    };
    Storage.deviceToken = function(action, data) {
      var defer;
      if (data == null) {
        data = {};
      }
      defer = $q.defer();
      switch (action) {
        case 'set':
          localforage.setItem('device_token', data).then(function() {
            return defer.resolve();
          });
          break;
        case 'get':
          localforage.getItem('device_token').then(function(data) {
            return defer.resolve(data);
          });
          break;
        case 'remove':
          localforage.removeItem('device_token').then(function() {
            return defer.resolve();
          });
      }
      return defer.promise;
    };
    Storage.creationDate = function(action, data) {
      var defer;
      if (data == null) {
        data = {};
      }
      defer = $q.defer();
      switch (action) {
        case 'set':
          localforage.setItem('creation_date', data).then(function() {
            return defer.resolve();
          });
          break;
        case 'get':
          localforage.getItem('creation_date').then(function(data) {
            return defer.resolve(data);
          });
          break;
        case 'remove':
          localforage.removeItem('creation_date').then(function() {
            return defer.resolve();
          });
      }
      return defer.promise;
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
          PulltorefreshAPI.saveData({
            premiere: data.defaults.content.popular.weekly_premiere,
            new_addition: data.defaults.content.popular.new_additions,
            mstPopular: data.defaults.content.popular.most_popular,
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
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.init = function() {
      return $scope.genre = DetailsAPI.genre_array;
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
      defer = $q.defer();
      $http.get(GLOBAL_URL + ("/wp-json/get_genre_videos?genre_id=" + GenreId)).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    GenreAPI.ApplyFilter = function(param) {
      var defer;
      defer = $q.defer();
      $http.get(GLOBAL_URL + ("/wp-json/get_genre_videos?genre_id=" + param[0] + "&sort_key=" + param[1] + "&language_id=" + param[2])).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
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
          console.log("Len not zero");
          $scope.genreData = DetailsAPI.GlobalChild_array;
          $scope.genre = DetailsAPI.Global_array;
          $scope.sortData = DetailsAPI.Sort;
          $scope.language = DetailsAPI.Filter;
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          $scope.used_height = 88 + 73;
          $scope.hgt = device_height - $scope.used_height;
          $scope.display = 'result';
          return console.log("Global Child array", $scope.genreData);
        } else {
          return GenreAPI.GetSingleGenre(DetailsAPI.videoId).then(function(data) {
            console.log("Length zero");
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
            $scope.hgt = device_height + 3 - $scope.used_height;
            return console.log("Global Child array", $scope.genreData);
          }, function(error) {
            return $scope.display = 'error';
          });
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
      GenreAPI.ApplyFilter(arr).then(function(data) {
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
      }, function(error) {
        $scope.errorType = '';
        return $scope.display = 'error';
      });
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
      $scope.lang = null;
      arr = [DetailsAPI.Global_array.genre_id, $scope.sort_key, $scope.lang];
      $ionicLoading.hide();
      ({
        hideOnStateChange: false
      });
      $scope.display = 'loader';
      return GenreAPI.ApplyFilter(arr).then(function(data) {
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
      }, function(error) {
        $scope.errorType = '';
        $scope.display = 'error';
        return $ionicLoading.hide();
      });
    };
    $scope.hideNoReset = function() {
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

shortFilmWindow.controller('playlistCtrl', [
  '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', function($scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading) {
    $scope.doRefresh = function() {
      return PulltorefreshAPI.pullrequest().then((function(_this) {
        return function(data) {
          PulltorefreshAPI.saveData({
            premiere: data.defaults.content.popular.weekly_premiere,
            new_addition: data.defaults.content.popular.new_additions,
            mstPopular: data.defaults.content.popular.most_popular,
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
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.test = function() {
      return $scope.playlist = DetailsAPI.playlist_array;
    };
    return $scope.singleplaylist = function(playlistId) {
      DetailsAPI.videoId = playlistId;
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
      $http.get(GLOBAL_URL + ("/wp-json/get_playlist_videos/?playlist_id=" + playlistId)).then(function(data) {
        return defer.resolve(angular.fromJson(data.data));
      }, function(error) {
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
          return $scope.headerwidth = device_width - 100 - 27;
        } else {
          $scope.display = 'loader';
          return PlaylistAPI.GetSingleplaylist(DetailsAPI.videoId).then(function(data) {
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
          }, function(error) {
            $scope.display = 'error';
            return $ionicLoading.hide();
          });
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
        return $scope.init();
      }
    };
  }
]);

shortFilmWindow.controller('popularCtrl', [
  '$scope', '$rootScope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$window', 'InitialiseService', 'Storage', '$timeout', 'GenreAPI', function($scope, $rootScope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $window, InitialiseService, Storage, $timeout, GenreAPI) {
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
    $rootScope.$on('receiveNotification', function(event, pn) {
      return $scope.doRefresh();
    });
    $scope.detectSlideChange = function(swiperInstance) {
      return $scope.currentCard = $scope.allContentArray[swiperInstance.activeIndex];
    };
    $scope.singlePlaylistGenre = function(playlistId, type) {
      DetailsAPI.videoId = playlistId;
      if (type === "playlist") {
        App.navigate("singlePlaylist");
      }
      if (type === "category") {
        return App.navigate("singleGenre");
      }
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
      console.log("Refreshing");
      if (!App.isOnline()) {
        $scope.checkNetwork = false;
        return console.log("not calling pull api");
      } else {
        PulltorefreshAPI.pullrequest().then((function(_this) {
          return function(data) {
            console.log("data from pull request");
            console.log(data);
            $scope.checkNetwork = true;
            PulltorefreshAPI.saveData({
              premiere: data.defaults.content.popular.weekly_premiere,
              new_addition: data.defaults.content.popular.new_additions,
              mstPopular: data.defaults.content.popular.most_popular,
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
        })(this), function(error) {
          return $scope.$broadcast('scroll.refreshComplete');
        });
        return $ionicLoading.hide();
      }
    };
    $scope.singlePlayService = function(videoData) {
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
      return App.navigate('init');
    };
    $scope.initApp = function() {
      console.log("Inside init app");
      $scope.used_height = 86 + 105;
      $scope.hgt = $rootScope.device_height + 3 - $scope.used_height;
      if (!App.isOnline()) {
        $scope.checkNetwork = false;
        return $scope.display = 'nonetwork';
      } else {
        return initDetailsApi();
      }
    };
    initDetailsApi = function() {
      var additionArr, awPlalistArr, genArr, noteworthyArr, premierArr;
      premierArr = [];
      additionArr = [];
      noteworthyArr = [];
      awPlalistArr = [];
      genArr = [];
      $scope.allContentArray = [];
      premierArr.push({
        "order": 1,
        "cardtitle": "This Week's Release",
        "p": "New Cinema of New India",
        "iconimg": "weekly_premiere",
        "content": DetailsAPI.array,
        "addedToWatchList": 0,
        "movieId": DetailsAPI.array.movie_id
      });
      noteworthyArr = _.map(DetailsAPI.array_noteworthy, function(value, key, list) {
        return {
          "order": 2,
          "cardtitle": "Noteworthy",
          "p": value.genreCategory,
          "iconimg": "noteworthy",
          "content": value,
          "addedToWatchList": 0,
          "movieId": value.movie_id
        };
      });
      additionArr = _.map(DetailsAPI.array_addition, function(value, key, list) {
        return {
          "order": 3,
          "cardtitle": "New Additions",
          "p": "Just starting out on their big journey!",
          "iconimg": "new_additions",
          "content": value,
          "addedToWatchList": 0,
          "movieId": value.movie_id
        };
      });
      genArr.push({
        "order": 5,
        "cardtitle": "Genre List",
        "p": "Choose Your Genre",
        "iconimg": "genre",
        "content": DetailsAPI.genre_array,
        "addedToWatchList": 0,
        "movieId": ""
      });
      awPlalistArr.push({
        "order": 6,
        "cardtitle": "Awesome Playlist",
        "p": "Sit back and relax with some popcorn!",
        "iconimg": "awesome_playlists",
        "content": DetailsAPI.array_awplalist,
        "addedToWatchList": 0,
        "movieId": ""
      });
      $scope.allContentArray = _.union(premierArr, noteworthyArr, additionArr, genArr, awPlalistArr);
      console.log("Data in final array");
      console.log($scope.allContentArray);
      $scope.currentCard = $scope.allContentArray[0];
      $scope.refreshSwiper = false;
      $timeout((function() {
        $scope.refreshSwiper = true;
        return initWatchlist();
      }), 1000);
      return $scope.display = 'result';
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
