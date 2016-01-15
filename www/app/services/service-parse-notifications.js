angular.module('SFWApp.services').service('ParseNotificationService', [
  '$q', '$window', 'ParseConfiguration', '$state', 'DetailsAPI', 'ParseService', function($q, $window, ParseConfiguration, $state, DetailsAPI, ParseService) {
    return {
      initialize: function() {
        return Parse.initialize(ParseConfiguration.applicationId, ParseConfiguration.javascriptKey);
      },
      getInstallationId: function() {
        return ParseService.getInstallationId();
      },
      getNotificationsWithStatus: function() {
        var deferred;
        deferred = $q.defer();
        Parse.Cloud.run('fetchNotifications', {}, {
          success: function(results) {
            console.log(results);
            deferred.resolve(results);
          },
          error: function(error) {
            console.log('Some error.');
            deferred.reject(error);
          }
        });
        return deferred.promise;
      }
    };
  }
]);
