angular.module('SFWApp.Global').factory('share', [
  '$q', 'App', '$http', function($q, App, $http) {
    var share;
    share = {};
    share.shareNative = function(videodetails) {
      if (videodetails == null) {
        videodetails = {};
      }
      console.log("Sharing video");
      console.log(videodetails);
      if (window.plugins && window.plugins.socialsharing) {
        return window.plugins.socialsharing.share('I\'ll be attending the session: ' + $scope.session.title + '.', 'PhoneGap Day 2014', null, 'http://pgday.phonegap.com/us2014', (function() {
          return console.log('Success');
        }), function(error) {
          return console.log('Share fail ' + error);
        });
      } else {
        return console.log('Share plugin not available');
      }
    };
    return share;
  }
]);
