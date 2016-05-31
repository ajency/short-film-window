shortFilmWindow.service('ParseNotificationService', [
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
              var j, obj;
              j = {};
              if (value.attributes.notificationId.attributes.movieDetails) {
                j = angular.fromJson(decodeURIComponent(value.attributes.notificationId.attributes.movieDetails));
              }
              obj = {
                "fromnow": moment(value.attributes.createdAt).fromNow(),
                "createdAt": value.attributes.createdAt,
                "notificationId": value.attributes.notificationId.id,
                "installationId": value.attributes.installationId.id,
                "alert": value.attributes.notificationId.attributes.alert,
                "movieDetails": j,
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
