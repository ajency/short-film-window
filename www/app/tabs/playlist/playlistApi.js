angular.module('SFWApp.tabs').factory('PlaylistAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var GenreAPI;
    GenreAPI = {};
    GenreAPI.GetSingleplaylist = function(playlistId) {
      var defer;
      defer = $q.defer();
      $http.get(URL + ("/wp-json/get_playlist_videos/?playlist_id=" + playlistId)).then(function(data) {
        var j;
        j = angular.fromJson(data.data);
        return defer.resolve(j);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    return GenreAPI;
  }
]);
