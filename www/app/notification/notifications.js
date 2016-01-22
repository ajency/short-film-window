angular.module('SFWApp.tabs').controller('notificationsCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', '$stateParams', 'ParseNotificationService', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading, $stateParams, ParseNotificationService) {
    $scope.result = 'loader';
    $scope.formData = function(data, clear) {
      if (clear == null) {
        clear = 0;
      }
      if (clear) {
        return $scope.notificationArray = [];
      } else {
        return $scope.notificationArray.push(obj);
      }
    };
    $scope.getNotifications = function() {
      $scope.notificationArray = [];
      if (App.isOnline()) {
        return ParseNotificationService.getNotificationsWithStatus().then(function(data) {
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
    return $scope.clearNotifications = function() {
      if (App.isOnline()) {
        return ParseNotificationService.deleteNotifications().then(function(data) {
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
  }
]);
