angular.module('SFWApp', ['ionic', 'ngCordova', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global', 'SFWApp.sidebar', 'ngSanitize', 'SFWApp.singlePlayer', 'SFWApp.VideoDetailsAPI']).run([
  '$rootScope', 'App', '$timeout', 'DetailsAPI', 'Set_Get', function($rootScope, App, $timeout, DetailsAPI, Set_Get) {
    var firstScriptTag, tag;
    tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    $rootScope.App = App;
    DetailsAPI.GetVideoDetails().then((function(_this) {
      return function(data) {
        console.log(data.defaults.content.popular.weekly_premiere.image);
        DetailsAPI.setData(data.defaults.content.popular.weekly_premiere);
        return App.navigate('home', {}, {});
      };
    })(this), (function(_this) {
      return function(error) {
        return console.log('Error Loading data');
      };
    })(this));
    return $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      App.previousState = from.name;
      return App.currentState = to.name;
    });
  }
]);
