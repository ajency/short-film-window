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
        var matchIndex, wl;
        $scope.getwatchlistDetails = value;
        if (_.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length === 0) {
          $scope.addvideoDetails.push(DetailsAPI.singleVideoarray);
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
      $scope.display = 'loader';
      return ParseNotificationService.updateNotificationStatus(App.notificationPayload.payload.notificationId).then(function(data) {
        return $scope.init(DetailsAPI.videoId);
      })["catch"](function(error) {
        return $scope.init(DetailsAPI.videoId);
      });
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
