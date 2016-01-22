angular.module('SFWApp.services').factory('notificationFactory', [
  '$q', '$window', 'ParseConfiguration', 'ParseNotificationService', function($q, $window, ParseConfiguration, ParseNotificationService) {
    return {
      getNotifications: function() {
        var deferred;
        deferred = $q.defer();
        ParseNotificationService.getNotificationsWithStatus().then(function(data) {
          var notificationArray;
          notificationArray = {
            notifications: []
          };
          _.each(data, function(value) {
            var obj;
            obj = {
              "createdAt": value.attributes.createdAt,
              "notificationId": value.attributes.notificationId.id,
              "installationId": value.attributes.installationId.id,
              "alert": value.attributes.notificationId.attributes.alert,
              "status": value.attributes.status
            };
            return notificationArray.notifications.push(obj);
          });
          return deferred.resolve(notificationArray);
        })["catch"](function(error) {
          return deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  }
]);
