angular.module('SFWApp.tabs').controller('notificationsCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', 'ParseNotificationService', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams, ParseNotificationService) {
    $scope.notificationArray = [];
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
          console.log(error);
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
        return ParseNotificationService.deleteNotifications().then(function(data) {
          return console.log(data);
        })["catch"](function(error) {
          console.log(error);
          return $scope.result = 'error';
        });
      } else {
        return $scope.result = 'error';
      }
    };
    return $scope.markNotificationAsRead = function(notification_id) {
      var match;
      if (App.isOnline()) {
        console.log($scope.notificationArray, notification_id);
        match = _.findWhere($scope.notificationArray, {
          "notification_id": '' + notification_id + ''
        });
        console.log(match);
        _.extend(match, {
          status: 'read'
        });
        console.log($scope.notificationArray);
        return ParseNotificationService.updateNotificationStatus(notification_id).then(function(data) {
          return console.log(data);
        })["catch"](function(error) {
          console.log(error);
          return $scope.result = 'error';
        });
      } else {
        return $scope.result = 'error';
      }
    };
  }
]);
