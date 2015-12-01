angular.module('SFWApp.navigate', []).controller('navigateCtrl', []).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return $stateProvider.state('init', {
      url: '/init',
      cache: false,
      controller: 'InitCtrl',
      templateUrl: 'views/init/init.html'
    });
  }
]);
