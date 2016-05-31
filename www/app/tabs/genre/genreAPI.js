shortFilmWindow.factory('GenreAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var GenreAPI;
    GenreAPI = {};
    GenreAPI.GetSingleGenre = function(GenreId) {
      var defer;
      defer = $q.defer();
      $http.get(GLOBAL_URL + ("/wp-json/get_genre_videos?genre_id=" + GenreId)).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    GenreAPI.ApplyFilter = function(param) {
      var defer;
      defer = $q.defer();
      $http.get(GLOBAL_URL + ("/wp-json/get_genre_videos?genre_id=" + param[0] + "&sort_key=" + param[1] + "&language_id=" + param[2])).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    return GenreAPI;
  }
]);
