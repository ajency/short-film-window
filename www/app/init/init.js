angular.module('SFWApp.init', []).controller('InitCtrl', [
  '$scope', '$sce', 'App', function($scope, $sce, App) {
    var Vtype;
    console.log('In Init');
    Vtype = '0';
    $scope.$on('$ionicView.afterEnter', function() {
      return console.log('after enter');
    });
    return $scope.view = {
      back: function() {
        var count;
        count = -1;
        return App.goBack(count);
      },
      playVideo: function() {
        return App.navigate('singlePlayer', {}, {
          animate: false,
          back: false
        });
      }
    };
  }
]);
