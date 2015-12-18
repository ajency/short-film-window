angular.module('SFWApp.tabs').factory('GenreAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var GenreAPI;
    GenreAPI = {};
    GenreAPI.GetSingleGenre = function(GenreId) {
      var defer;
      console.log(GenreId);
      defer = $q.defer();
      $http.get("http://shortfilm.staging.wpengine.com/wp-json/get_genre_videos?genre_id=" + GenreId).then(function(data) {
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
