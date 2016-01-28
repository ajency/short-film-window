angular.module('SFWApp.services', []).service('InitialiseService', [
  '$q', 'DetailsAPI', 'App', '$rootScope', '$ImageCacheFactory', function($q, DetailsAPI, App, $rootScope, $ImageCacheFactory) {
    return {
      initialize: function() {
        var deferred;
        deferred = void 0;
        deferred = void 0;
        deferred = $q.defer();
        if (App.isOnline()) {
          DetailsAPI.GetVideoDetails().then(function(data) {
            $rootScope.vData = data;
            return $ImageCacheFactory.Cache([data.defaults.content.popular.weekly_premiere.image]);
          }).then(function(data) {
            return DetailsAPI.setData({
              premiere: $rootScope.vData.defaults.content.popular.weekly_premiere,
              new_addition: $rootScope.vData.defaults.content.popular.new_additions,
              noteworthy: $rootScope.vData.defaults.content.popular.noteworthy,
              awesome_playlist: $rootScope.vData.defaults.content.popular.awesome_playlist,
              genre: $rootScope.vData.defaults.content.genre,
              playlist: $rootScope.vData.defaults.content.playlists
            });
          }).then(function(data) {
            return deferred.resolve($rootScope.vData);
          });
        } else {
          deferred.reject();
        }
        return deferred.promise;
      }
    };
  }
]);
