angular.module('SFWApp.VideoDetailsAPI', []).factory('DetailsAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var DetailsAPI;
    DetailsAPI = {};
    DetailsAPI.videoId = '';
    DetailsAPI.array_addition = [];
    DetailsAPI.array_noteworthy = [];
    DetailsAPI.array_awplaylist = [];
    DetailsAPI.array = [];
    DetailsAPI.GetVideoDetails = function() {
      var defer;
      defer = $q.defer();
      $http.get('http://shortfilm.staging.wpengine.com/wp-json/get_defaults').then(function(data) {
        console.log('succ');
        console.log(data);
        return defer.resolve(data.data);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.GetSingleVideo = function(VideoId) {
      var defer;
      console.log(VideoId);
      defer = $q.defer();
      $http.post('somthing', VideoId).then(function(data) {
        console.log('succ');
        console.log(data);
        return defer.resolve(data.data);
      }, function(error) {
        console.log('eroor');
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.setData = function(opts) {
      if (opts == null) {
        opts = {};
      }
      console.log(opts);
      DetailsAPI.array = opts.premiere;
      DetailsAPI.array_addition = opts.new_addition;
      DetailsAPI.array_noteworthy = opts.noteworthy;
      DetailsAPI.array_awplalist = opts.awesome_playlist;
      console.log(DetailsAPI.array);
      console.log(DetailsAPI.array_addition);
      console.log(DetailsAPI.array_noteworthy);
      return console.log(DetailsAPI.array_awplalist);
    };
    return DetailsAPI;
  }
]);
