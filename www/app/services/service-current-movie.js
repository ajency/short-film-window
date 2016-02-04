angular.module('SFWApp.services').service('currentMovie', [
  '$q', function($q) {
    var movieData;
    movieData = {};
    return {
      saveCurrentMovie: function(data) {
        if (data == null) {
          data = {};
        }
        movieData = data;
        return movieData;
      },
      getCurrentMovie: function() {
        return movieData;
      }
    };
  }
]);
