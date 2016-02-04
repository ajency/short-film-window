angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', '$ionicLoading', '$ionicHistory', 'share', 'Storage', 'InitialiseService', 'ParseNotificationService', '$rootScope', function($scope, $sce, App, DetailsAPI, $ionicLoading, $ionicHistory, share, Storage, InitialiseService, ParseNotificationService, $rootScope) {
    var onPlayerReady, onPlayerStateChange, stopVideo;
    $scope.Videodetails = [];
    $scope.addvideoDetails = [];
    $scope.getwatchlistDetails = [];
    $scope.watchFlag = '0';
    $scope.intFlag = '0';
    $scope.watchlistimg = '';
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
    $scope.init = function() {
      var Vtype, modifiedUrl, player;
      if (!angular.isUndefined(DetailsAPI.singleVideoarray.movie_id)) {
        console.log("Single video Data Cached");
        $scope.display = 'result';
        $scope.Videodetails = DetailsAPI.singleVideoarray.singleVideoarray;
        console.log($scope.Videodetails);
        $scope.checkIfaddedlist();
        $ionicLoading.hide();
        $scope.vType = DetailsAPI.singleVideoarray.singleVideoarray.type;
        $scope.videourl = DetailsAPI.singleVideoarray.singleVideoarray.videourl;
        if ($scope.vType === 'vimeo') {
          modifiedUrl = DetailsAPI.singleVideoarray.singleVideoarray.embedurl;
          console.log(modifiedUrl);
          $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);
        } else {
          player = new YT.Player('player2', {
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
      }
      return Vtype = '0';
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
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 600,
        showDelay: 0
      });
      console.log(App.notificationPayload.payload.notificationId);
      return ParseNotificationService.updateNotificationStatus(App.notificationPayload.payload.notificationId).then(function(data) {
        console.log(data);
        return $scope.init();
      })["catch"](function(error) {
        console.log(error);
        return $scope.init();
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
