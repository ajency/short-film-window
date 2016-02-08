angular.module('SFWApp.tabs', []).controller('popularCtrl', [
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
