angular.module('SFWApp.services').service('ParseNotificationService', [
  '$q', '$window', 'ParseConfiguration', '$rootScope', function($q, $window, ParseConfiguration, $rootScope) {
    return {
      getNotificationsWithStatus: function() {
        var deferred, installation_id;
        deferred = $q.defer();
        installation_id = ParseConfiguration.installationId;
        Parse.Cloud.run('listAllNotificationsForUser', {
          "installation_id": installation_id
        }, {
          success: function(results) {
            var notificationArray;
            notificationArray = [];
            _.each(results, function(value) {
              var dt, obj;
              dt = moment(value.attributes.createdAt).format('LLLL');
              obj = {
                "createdAt": dt,
                "notificationId": value.attributes.notificationId.id,
                "installationId": value.attributes.installationId.id,
                "alert": value.attributes.notificationId.attributes.alert,
                "status": value.attributes.status
              };
              return notificationArray.push(obj);
            });
            deferred.resolve(notificationArray);
          },
          error: function(error) {
            deferred.reject(error);
          }
        });
        return deferred.promise;
      },
      getUnreadNotificationsCount: function() {
        var deferred, installation_id;
        deferred = $q.defer();
        installation_id = ParseConfiguration.installationId;
        Parse.Cloud.run('countUnreadNotifications', {
          "installation_id": installation_id
        }, {
          success: function(count) {
            deferred.resolve(count);
          },
          error: function(error) {
            console.log(error);
            deferred.reject('0');
          }
        });
        return deferred.promise;
      },
      updateNotificationStatus: function(notification_id) {
        var deferred, installation_id;
        deferred = $q.defer();
        installation_id = ParseConfiguration.installationId;
        Parse.Cloud.run('updateNotificationStatusAsRead', {
          "installation_id": installation_id,
          "notification_id": notification_id
        }, {
          success: function(results) {
            deferred.resolve(results);
          },
          error: function(error) {
            deferred.reject(error);
          }
        });
        return deferred.promise;
      },
      deleteNotifications: function() {
        var deferred, installation_id;
        deferred = $q.defer();
        installation_id = ParseConfiguration.installationId;
        Parse.Cloud.run('deleteAllNotification', {
          "installation_id": installation_id
        }, {
          success: function(results) {
            deferred.resolve(results);
          },
          error: function(error) {
            deferred.reject(error);
          }
        });
        return deferred.promise;
      }
    };
  }
]);
