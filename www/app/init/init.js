angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', '$ionicLoading', '$ionicHistory', 'share', 'Storage', function($scope, $sce, App, DetailsAPI, $ionicLoading, $ionicHistory, share, Storage) {
    $scope.Videodetails = [];
    $scope.display = 'result';
    $scope.addvideoDetails = [];
    $scope.getwatchlistDetails = [];
    $scope.watchFlag = '0';
    $scope.intFlag = '0';
    $scope.watchlistimg = 'icon-favorite';
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
          return $scope.watchlistimg = 'icon-favorite';
        } else {
          i = 0;
          while (i < $scope.getwatchlistDetails.length) {
            if ($scope.getwatchlistDetails[i].movie_id === DetailsAPI.singleVideoarray.movie_id) {
              console.log("Movie already added ");
              $scope.intFlag = '1';
            } else {
              console.log("New movie entry ");
            }
            i++;
          }
          if ($scope.intFlag === '1') {
            return $scope.watchlistimg = 'icon-unfavorite';
          } else {
            return $scope.watchlistimg = 'icon-favorite';
          }
        }
      });
    };
    $scope.CheckWatchlist = function() {
      console.log("checking if video exist");
      return Storage.watchlistDetails('get').then(function(value) {
        var i;
        console.log(value);
        $scope.getwatchlistDetails = value;
        if (_.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length === 0) {
          $scope.watchlistimg = 'icon-unfavorite';
          console.log("new video  entry");
          $scope.addvideoDetails.push(DetailsAPI.singleVideoarray);
          return Storage.watchlistDetails('set', $scope.addvideoDetails);
        } else {
          i = 0;
          while (i < $scope.getwatchlistDetails.length) {
            if ($scope.getwatchlistDetails[i].movie_id === DetailsAPI.singleVideoarray.movie_id) {
              console.log("Movie already added ");
              $scope.watchlistimg = 'icon-unfavorite';
              console.log($scope.addvideoDetails);
              $scope.addvideoDetails.splice(i, 1);
              console.log($scope.addvideoDetails);
              $scope.updatewatchlist();
              $scope.watchFlag = '1';
            } else {
              console.log("New movie entry ");
            }
            i++;
          }
          if ($scope.watchFlag === '0') {
            $scope.watchlistimg = 'icon-unfavorite';
            i = 0;
            while (i < $scope.getwatchlistDetails.length) {
              $scope.addvideoDetails.push($scope.getwatchlistDetails[i]);
              i++;
            }
            $scope.addvideoDetails.push(DetailsAPI.singleVideoarray);
            return Storage.watchlistDetails('set', $scope.addvideoDetails);
          }
        }
      });
    };
    $scope.updatewatchlist = function() {
      var i;
      $scope.watchlistimg = 'icon-favorite';
      i = 0;
      while (i < $scope.addvideoDetails.length) {
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
            console.log("single video  data succ");
            DetailsAPI.singleVideoarray = data;
            $scope.Videodetails = data;
            $scope.checkIfaddedlist();
            $ionicLoading.hide();
            return document.getElementById('synopsis').outerHTML = $scope.Videodetails.content;
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
      Vtype = '0';
      return $scope.$on('$ionicView.afterEnter', function() {
        return console.log('after enter');
      });
    };
    return $scope.view = {
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
  }
]);
