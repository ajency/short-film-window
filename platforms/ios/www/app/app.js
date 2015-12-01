angular.module('SFWApp', ['ionic', 'ngCordova', 'SFWApp.init', 'SFWApp.navigate', 'SFWApp.Global']).run([
  '$rootScope', 'App', '$timeout', function($rootScope, App, $timeout, ngCordova) {
    $rootScope.App = App;
    App.navigate('init', {}, {
      animate: false,
      back: false
    });
    return $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      App.previousState = from.name;
      return App.currentState = to.name;
    });
  }
]);
