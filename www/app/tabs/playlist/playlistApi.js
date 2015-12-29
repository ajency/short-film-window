angular.module('SFWApp.tabs').factory('PlaylistAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var GenreAPI;
    GenreAPI = {};
    GenreAPI.GetSingleplaylist = function(playlistId) {
      var defer;
      console.log(playlistId);
      defer = $q.defer();
      $http.get(URL + ("/wp-json/get_playlist_videos/?playlist_id=" + playlistId)).then(function(data) {
        console.log('single genre data succ');
        console.log(data);
        return defer.resolve(data.data);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    return GenreAPI;
  }
]);
