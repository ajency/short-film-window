shortFilmWindow.service('InitialiseService', [
  '$q', 'DetailsAPI', 'App', '$rootScope', '$ImageCacheFactory', function($q, DetailsAPI, App, $rootScope, $ImageCacheFactory) {
    return {
      initialize: function() {
        var deferred;
        deferred = void 0;
        deferred = void 0;
        deferred = $q.defer();
        if (App.isOnline()) {
          DetailsAPI.GetVideoDetails().then(function(data) {
            return $rootScope.vData = data;
          }).then(function(data) {
            var allImageUrls;
            allImageUrls = [];
            _.each(data.defaults.content, function(defaultValue, key) {
              switch (key) {
                case 'genre':
                  return _.each(defaultValue, function(value) {
                    return allImageUrls.push(value.genre_image_url);
                  });
                case 'playlists':
                  return _.each(defaultValue, function(value) {
                    return allImageUrls.push(value.playlist_image_url);
                  });
                case 'popular':
                  return _.each(defaultValue, function(popularValue, popularKey) {
                    switch (popularKey) {
                      case 'awesome_playlist':
                        return _.each(popularValue.awesome_playlist, function(value) {
                          return allImageUrls.push(value.playlist_image_url);
                        });
                      case 'new_additions':
                        return _.each(popularValue.new_additions, function(value) {
                          return allImageUrls.push(value.image);
                        });
                      case 'weekly_premiere':
                        return _.each(popularValue.weekly_premiere, function(value) {
                          return allImageUrls.push(value.image);
                        });
                    }
                  });
              }
            });
            $ImageCacheFactory.Cache([allImageUrls]);
            DetailsAPI.setData({
              premiere: $rootScope.vData.defaults.content.popular.weekly_premiere,
              new_addition: $rootScope.vData.defaults.content.popular.new_additions,
              noteworthy: $rootScope.vData.defaults.content.popular.noteworthy,
              awesome_playlist: $rootScope.vData.defaults.content.popular.awesome_playlist,
              genre: $rootScope.vData.defaults.content.genre,
              playlist: $rootScope.vData.defaults.content.playlists
            });
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
