angular.module('SFWApp.VideoDetailsAPI').factory('PulltorefreshAPI', [
  '$q', 'App', '$http', 'DetailsAPI', function($q, App, $http, DetailsAPI) {
    var PulltorefreshAPI;
    PulltorefreshAPI = {};
    PulltorefreshAPI.pullrequest = function() {
      var defer;
      defer = $q.defer();
      $http.get(URL + '/wp-json/get_defaults').then(function(data) {
        console.log('succ');
        console.log(data);
        return defer.resolve(data.data);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    PulltorefreshAPI.saveData = function(opts) {
      if (opts == null) {
        opts = {};
      }
      console.log(opts);
      DetailsAPI.array = opts.premiere;
      DetailsAPI.array_addition = opts.new_addition;
      DetailsAPI.array_noteworthy = opts.noteworthy;
      DetailsAPI.array_awplalist = opts.awesome_playlist;
      DetailsAPI.genre_array = opts.genre;
      return DetailsAPI.playlist_array = opts.playlist;
    };
    return PulltorefreshAPI;
  }
]);
