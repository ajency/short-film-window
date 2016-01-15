angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', '$ionicLoading', '$ionicHistory', 'share', 'Storage', 'InitialiseService', function($scope, $sce, App, DetailsAPI, $ionicLoading, $ionicHistory, share, Storage, InitialiseService) {
    $scope.Videodetails = [];
    $scope.display = 'result';
    $scope.addvideoDetails = [];
    $scope.getwatchlistDetails = [];
    $scope.watchFlag = '0';
    $scope.intFlag = '0';
    $scope.watchlistimg = '';
    $scope.share = function() {
      console.log("social sharing ");
      return share.shareNative();
    };
    $scope.addwatchlist = function() {
      console.log("video added to watchlist ");
      console.log(DetailsAPI.singleVideoarray);
      return $scope.CheckWatchlist();
    };
    $scope.checkIfaddedlist = function() {
      console.log("checking if video exist");
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
      console.log("checking if video exist");
      return Storage.watchlistDetails('get').then(function(value) {
        var i, n;
        console.log(value);
        $scope.getwatchlistDetails = value;
        if (_.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length === 0) {
          console.log("new video  entry");
          $scope.addvideoDetails.push(DetailsAPI.singleVideoarray);
          Storage.watchlistDetails('set', $scope.addvideoDetails);
          $scope.watchlistimg = 'icon-unfavorite';
          return $scope.$apply();
        } else {
          console.log($scope.addvideoDetails);
          i = 0;
          while (i < $scope.getwatchlistDetails.length) {
            if ($scope.getwatchlistDetails[i].movie_id === DetailsAPI.singleVideoarray.movie_id) {
              console.log("Movie already added ");
              console.log($scope.addvideoDetails);
              $scope.getwatchlistDetails.splice(i, 1);
              console.log($scope.getwatchlistDetails);
              $scope.updatewatchlist();
              $scope.watchlistimg = 'icon-favorite';
              $scope.$apply();
              $scope.watchFlag = '1';
            } else {
              console.log("New movie entry ");
            }
            i++;
          }
          if ($scope.watchFlag === '0') {
            $scope.watchlistimg = 'icon-unfavorite';
            n = $scope.getwatchlistDetails.length;
            i = 0;
            while (i < n) {
              $scope.addvideoDetails.push($scope.getwatchlistDetails[i]);
              i++;
            }
            $scope.addvideoDetails.push(DetailsAPI.singleVideoarray);
            Storage.watchlistDetails('set', $scope.addvideoDetails);
            return $scope.$apply();
          }
        }
      });
    };
    $scope.updatewatchlist = function() {
      var i;
      $scope.watchlistimg = 'icon-favorite';
      $scope.$apply();
      i = 0;
      while (i < $scope.getwatchlistDetails.length) {
        $scope.addvideoDetails.push($scope.getwatchlistDetails[i]);
        i++;
      }
      return Storage.watchlistDetails('set', $scope.addvideoDetails);
    };
    $scope.init = function() {
      var Vtype;
      if (!angular.isUndefined(DetailsAPI.singleVideoarray.movie_id)) {
        console.log("Single video Data Cached");
        $scope.Videodetails = DetailsAPI.singleVideoarray;
      } else {
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 600,
          showDelay: 0
        });
        DetailsAPI.GetSingleVideo(DetailsAPI.videoId).then((function(_this) {
          return function(data) {
            $scope.display = 'result';
            console.log("single video  data succ");
            DetailsAPI.singleVideoarray = data;
            $scope.Videodetails = data;
            document.getElementById('synopsis').outerHTML = $scope.Videodetails.content;
            $scope.checkIfaddedlist();
            return $ionicLoading.hide();
          };
        })(this), (function(_this) {
          return function(error) {
            console.log('Error Loading data');
            $scope.display = 'error';
            return $ionicLoading.hide();
          };
        })(this));
      }
      console.log(DetailsAPI.videoId);
      console.log('In Init');
      return Vtype = '0';
    };
    $scope.initializeApp = function() {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 600,
        showDelay: 0
      });
      InitialiseService.initialize().then(function(data) {});
      return $scope.init();
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
