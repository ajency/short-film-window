shortFilmWindow.factory('share', [
  '$q', 'App', '$http', function($q, App, $http) {
    var share;
    share = {};
    share.shareNative = function(slug, params) {
      var shareURL;
      if (params == null) {
        params = '';
      }
      console.log("Sharing video");
      if (window.plugins && window.plugins.socialsharing) {
        switch (params) {
          case '':
            shareURL = URL + '/' + slug;
            break;
          default:
            shareURL = URL + '/' + params + '/' + slug;
        }
        return window.plugins.socialsharing.share(null, 'shortFilm Window', null, shareURL, (function() {
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
