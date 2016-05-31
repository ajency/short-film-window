shortFilmWindow.controller('notificationsCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', 'ParseNotificationService', 'Storage', '$timeout', '$window', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams, ParseNotificationService, Storage, $timeout, $window) {
    $scope.notificationArray = [];
    $rootScope.$on('receiveNotification', function(event, pn) {
      return $scope.getNotifications();
    });
    $scope.view = {
      onTapToRetry: function() {
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
