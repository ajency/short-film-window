angular.module('SFWApp.landing', []).controller('landingCtrl', [
  '$scope', 'App', 'DetailsAPI', '$sce', '$ionicLoading', '$ImageCacheFactory', '$cordovaToast', function($scope, App, DetailsAPI, $sce, $ionicLoading, $ImageCacheFactory, $cordovaToast) {
    return $scope.view = {
      skip: true,
      skiplangingVideo: function() {
        land_vid_html5_api.pause();
        console.log("skip video");
        return $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 600,
          hideOnStateChange: true,
          showDelay: 0
        });
      },
      init: function() {
        console.log('enterd init');
        if (App.isOnline()) {
          console.log("online");
          console.log("Toast error");
          return DetailsAPI.GetVideoDetails().then((function(_this) {
            return function(data) {
              console.log(data.defaults.content.popular.weekly_premiere.image);
              $ImageCacheFactory.Cache([data.defaults.content.popular.weekly_premiere.image]).then(function() {
                return console.log("Images done loading!");
              }, function(failed) {
                return console.log("An image failed: " + failed);
              });
              DetailsAPI.setData({
                premiere: data.defaults.content.popular.weekly_premiere,
                new_addition: data.defaults.content.popular.new_additions,
                noteworthy: data.defaults.content.popular.noteworthy,
                awesome_playlist: data.defaults.content.popular.awesome_playlist,
                genre: data.defaults.content.genre,
                playlist: data.defaults.content.playlists
              });
              console.log('enterd api');
              $ionicLoading.hide();
              return App.navigate('popular');
            };
          })(this), (function(_this) {
            return function(error) {
              $ionicLoading.hide();
              ({
                skip: false
              });
              return console.log('Error Loading data');
            };
          })(this));
        } else {
          console.log("offline");
          ({
            skip: false
          });
          return $cordovaToast.show('Please Connect to Internet', 'long', 'bottom').then((function(success) {}, console.log("toast displayed")), function(error) {});
        }
      }
    };
  }
]);
