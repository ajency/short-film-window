angular.module('SFWApp.VideoDetailsAPI', []).factory('DetailsAPI', [
  '$q', 'App', '$http', '$ImageCacheFactory', function($q, App, $http, $ImageCacheFactory) {
    var DetailsAPI;
    DetailsAPI = {};
    DetailsAPI.videoId = '';
    DetailsAPI.array_addition = [];
    DetailsAPI.array_noteworthy = [];
    DetailsAPI.array_awplaylist = [];
    DetailsAPI.genre_array = [];
    DetailsAPI.playlist_array = [];
    DetailsAPI.Global_array = [];
    DetailsAPI.GlobalChild_array = [];
    DetailsAPI.Filter = [];
    DetailsAPI.Sort = [];
    DetailsAPI.array = [];
    DetailsAPI.singleVideoarray = [];
    DetailsAPI.imagArray = [];
    DetailsAPI.initialize = 0;
    DetailsAPI.GetVideoDetails = function() {
      var defer;
      defer = $q.defer();
      $http.get(URL + '/wp-json/get_defaults').then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.GetSingleVideo = function(VideoId) {
      var defer;
      defer = $q.defer();
      $http.get(URL + ("/wp-json/get_video?id=" + VideoId)).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.searchResult = function(txt) {
      var defer;
      defer = $q.defer();
      $http.get(URL + ("/wp-json/search?str=" + txt)).then(function(data) {
        return defer.resolve(data.data);
      }, function(error) {
        return defer.reject(error);
      });
      return defer.promise;
    };
    DetailsAPI.setData = function(opts) {
      if (opts == null) {
        opts = {};
      }
      DetailsAPI.array = opts.premiere;
      DetailsAPI.array_addition = opts.new_addition;
      DetailsAPI.array_noteworthy = opts.noteworthy;
      DetailsAPI.array_awplalist = opts.awesome_playlist;
      DetailsAPI.genre_array = opts.genre;
      DetailsAPI.playlist_array = opts.playlist;
      return DetailsAPI.initialize = 1;
    };
    return DetailsAPI;
  }
]);
