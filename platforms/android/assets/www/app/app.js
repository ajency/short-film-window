angular.module('SFWApp', ['ionic', 'ngCordova', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global', 'SFWApp.sidebar', 'ngSanitize', 'SFWApp.singlePlayer']).run([
  '$rootScope', 'App', '$timeout', function($rootScope, App, $timeout, ngCordova) {
    var firstScriptTag, tag;
    tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    $rootScope.App = App;
    App.navigate('home', {}, {});
    return $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      App.previousState = from.name;
      return App.currentState = to.name;
    });
  }
]);
