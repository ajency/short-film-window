angular.module('SFWApp.VideoDetailsAPI', []).factory('DetailsAPI', [
  '$q', 'App', '$http', function($q, App, $http) {
    return {
      GetVideoDetails: function() {
        var defer;
        defer = $q.defer();
        $http.post(AUTH_URL + '/wp-json/get_defaults').then(function(data) {
          console.log('succ');
          console.log(data);
          return defer.resolve(data.data);
        }, function(error) {
          console.log('eroor');
          return defer.reject(error);
        });
        return defer.promise;
      }
    };
  }
]);
