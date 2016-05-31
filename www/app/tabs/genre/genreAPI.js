angular.module('SFWApp.tabs').factory('GenreAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var GenreAPI;
    GenreAPI = {};
    GenreAPI.GetSingleGenre = function(GenreId) {
      var defer;
      console.log(GenreId);
      defer = $q.defer();
      $http.get(GLOBAL_URL + ("/wp-json/get_genre_videos?genre_id=" + GenreId)).then(function(data) {
        console.log('single genre data succ');
        console.log(data);
        return defer.resolve(data.data);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    GenreAPI.ApplyFilter = function(param) {
      var defer;
      console.log(param);
      defer = $q.defer();
      $http.get(GLOBAL_URL + ("/wp-json/get_genre_videos?genre_id=" + param[0] + "&sort_key=" + param[1] + "&language_id=" + param[2])).then(function(data) {
        console.log('single video data succ');
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
