angular.module('SFWApp.tabs').controller('notificationsCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', 'ParseNotificationService', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams, ParseNotificationService) {
    $scope.notificationArray = [];
    $rootScope.$on('receiveNotification', function(event, pn) {
      return $scope.getNotifications();
    });
    $scope.getNotifications = function() {
      if (App.isOnline()) {
        $scope.result = 'loader';
        return ParseNotificationService.getNotificationsWithStatus().then(function(data) {
          if (data.length === 0) {
            return $scope.result = 'no-new-notifications';
          } else {
            $scope.notificationArray = data;
            return $scope.result = 'display';
          }
        })["catch"](function(error) {
          return $scope.result = 'error';
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
    return $scope.markNotificationAsRead = function(notification_id) {
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
  }
]);
