angular.module('SFWApp.services', []).service('ParseService', [
  '$q', '$window', 'ParseConfiguration', '$state', 'DetailsAPI', function($q, $window, ParseConfiguration, $state, DetailsAPI) {
    return {
      initialize: function() {
        var deferred;
        deferred = $q.defer();
        $window.parsePlugin.initialize(ParseConfiguration.applicationId, ParseConfiguration.clientKey, (function() {
          deferred.resolve('success');
        }), function(e) {
          deferred.reject(e);
        });
        return deferred.promise;
      },
      getInstallationId: function() {
        var deferred;
        deferred = $q.defer();
        $window.parsePlugin.getInstallationId((function(id) {
          deferred.resolve(id);
        }), function(e) {
          deferred.reject(e);
        });
        return deferred.promise;
      },
      subscribe: function(_channel) {
        var deferred;
        deferred = $q.defer();
        $window.parsePlugin.subscribe(_channel, (function() {
          deferred.resolve(true);
        }), function(e) {
          deferred.reject(false);
        });
        return deferred.promise;
      },
      unsubscribe: function(_channel) {
        var deferred;
        deferred = $q.defer();
        $window.parsePlugin.unsubscribe(_channel, (function() {
          deferred.resolve(true);
        }), function(e) {
          deferred.reject(false);
        });
        return deferred.promise;
      },
      getSubscriptions: function() {
        var deferred;
        deferred = $q.defer();
        $window.parsePlugin.getSubscriptions((function(_channelsArray) {
          deferred.resolve(_channelsArray);
        }), function(e) {
          deferred.reject(false);
        });
        return deferred.promise;
      },
      registerCallback: function(_pushCallback) {
        var deferred;
        deferred = $q.defer();
        $window.parsePlugin.registerCallback('onNotification', (function() {
          return console.log('call back successfully registered');
        }), function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  }
]);
