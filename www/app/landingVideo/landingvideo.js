angular.module('SFWApp.landing', []).controller('landingCtrl', [
  '$scope', 'App', 'DetailsAPI', function($scope, App, DetailsAPI) {
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
        return App.navigate('popular', {}, {});
      };
    })(this), (function(_this) {
      return function(error) {
        return console.log('Error Loading data');
      };
    })(this));
  }
]);
