angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', 'DetailsAPI', '$ionicLoading', '$ionicHistory', 'share', 'Storage', function($scope, $sce, App, DetailsAPI, $ionicLoading, $ionicHistory, share, Storage) {
    $scope.Videodetails = [];
    $scope.display = 'result';
    $scope.addvideoDetails = [];
    $scope.getwatchlistDetails = [];
    $scope.watchFlag = '0';
    $scope.share = function() {
      console.log("social sharing ");
      return share.shareNative();
    };
    $scope.addwatchlist = function() {
      console.log("video added to watchlist ");
      console.log(DetailsAPI.singleVideoarray);
      return $scope.CheckWatchlist();
    };
    $scope.CheckWatchlist = function() {
      console.log("checking if video exist");
      return Storage.watchlistDetails('get').then(function(value) {
        var i;
        console.log(value);
        $scope.getwatchlistDetails = value;
        if (_.isNull($scope.getwatchlistDetails)) {
          console.log("new video  entry");
          $scope.addvideoDetails.push(DetailsAPI.singleVideoarray);
          return Storage.watchlistDetails('set', $scope.addvideoDetails);
        } else {
          i = 0;
          while (i < $scope.getwatchlistDetails.length) {
            if ($scope.getwatchlistDetails[i].movie_id === DetailsAPI.singleVideoarray.movie_id) {
              console.log("Movie already added ");
              $scope.watchFlag = '1';
            } else {
              console.log("New movie entry ");
            }
            i++;
          }
          if ($scope.watchFlag === '0') {
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
