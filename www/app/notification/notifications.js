angular.module('SFWApp.tabs').controller('notificationsCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', 'ParseNotificationService', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams, ParseNotificationService) {
    $scope.result = 'loader';
    $scope.refreshNotifications = function() {
      return $scope.getNotifications();
    };
    $scope.getNotifications = function() {
      $scope.notificationArray = [];
      if (App.isOnline()) {
        return ParseNotificationService.getNotificationsWithStatus().then(function(data) {
          console.log(data);
          $scope.notificationArray = data;
          return $scope.result = 'display';
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
        return ParseNotificationService.deleteNotifications().then(function(data) {
          console.log(data);
          $scope.notificationArray = [];
          $scope.result = 'no-new-notifications';
          return $scope.result = 'display';
        })["catch"](function(error) {
          console.log(error);
          return $scope.result = 'error';
        });
      } else {
        return $scope.result = 'error';
      }
    };
    return $scope.markNotificationAsRead = function(notification_id) {
      if (App.isOnline()) {
        return ParseNotificationService.updateNotificationStatus(notification_id).then(function(data) {
          var match;
          console.log(data);
          match = _.findWhere($scope.notificationArray, {
            "notification_id": notification_id
          });
          _.extend(match, {
            status: 'read'
          });
          console.log(match);
          return $scope.result = 'display';
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
