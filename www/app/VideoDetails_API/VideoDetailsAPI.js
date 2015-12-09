angular.module('SFWApp.VideoDetailsAPI', []).factory('DetailsAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    var DetailsAPI;
    DetailsAPI = {};
    DetailsAPI.imageUrl = '';
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
      console.log(opts);
      DetailsAPI.array = opts;
      return console.log(DetailsAPI.array.image);
    };
    return DetailsAPI;
  }
]);
