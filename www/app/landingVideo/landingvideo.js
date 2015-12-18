angular.module('SFWApp.landing', []).controller('landingCtrl', [
  '$scope', 'App', 'DetailsAPI', '$sce', '$ionicLoading', function($scope, App, DetailsAPI, $sce, $ionicLoading) {
    return $scope.view = {
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
        return DetailsAPI.GetVideoDetails().then((function(_this) {
          return function(data) {
            console.log(data.defaults.content.popular.weekly_premiere.image);
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
            return console.log('Error Loading data');
          };
        })(this));
      }
    };
  }
]);
