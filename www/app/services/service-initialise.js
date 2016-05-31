angular.module('SFWApp.services', []).service('InitialiseService', [
  '$q', 'DetailsAPI', 'App', '$rootScope', '$ImageCacheFactory', function($q, DetailsAPI, App, $rootScope, $ImageCacheFactory) {
    return {
      initialize: function() {
        var deferred;
        deferred = void 0;
        deferred = void 0;
        deferred = $q.defer();
        DetailsAPI.GetVideoDetails().then(function(data) {
          console.log('first');
          $rootScope.vData = data;
          $ImageCacheFactory.Cache([data.defaults.content.popular.weekly_premiere.image]);
          return 1;
        }).then(function(data) {
          console.log('second');
          return DetailsAPI.setData({
            premiere: $rootScope.vData.defaults.content.popular.weekly_premiere,
            new_addition: $rootScope.vData.defaults.content.popular.new_additions,
            noteworthy: $rootScope.vData.defaults.content.popular.noteworthy,
            awesome_playlist: $rootScope.vData.defaults.content.popular.awesome_playlist,
            genre: $rootScope.vData.defaults.content.genre,
            playlist: $rootScope.vData.defaults.content.playlists
          });
        }).then(function(data) {
          deferred.resolve($rootScope.vData);
        });
        return deferred.promise;
      }
    };
  }
]);
