angular.module('SFWApp.tabs', []).controller('popularCtrl', [
  '$scope', '$rootScope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$window', 'InitialiseService', function($scope, $rootScope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $window, InitialiseService) {
    console.log('popular');
    $scope.singleplaylist = function(playlistId) {
      DetailsAPI.videoId = playlistId;
      return App.navigate("singlePlaylist");
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
    return $scope.initDetailsApi = function() {
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
        "content": DetailsAPI.array
      });
      additionArr = _.map(DetailsAPI.array_addition, function(value, key, list) {
        return {
          "order": 2,
          "cardtitle": "New Additions",
          "p": "Just starting out on their big journey!",
          "iconimg": "new_additions",
          "content": value
        };
      });
      noteworthyArr = _.map(DetailsAPI.array_noteworthy, function(value, key, list) {
        return {
          "order": 3,
          "cardtitle": "Noteworthy",
          "p": "Completely out of the ordinary",
          "iconimg": "noteworthy",
          "content": value
        };
      });
      awPlalistArr.push({
        "order": 4,
        "cardtitle": "Awesome Playlist",
        "p": "Sit back and relax with some popcorn!",
        "iconimg": "awesome_playlists",
        "content": DetailsAPI.array_awplalist
      });
      return $scope.allContentArray = _.union(premierArr, additionArr, noteworthyArr, awPlalistArr);
    };
  }
]);
