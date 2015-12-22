angular.module('SFWApp.submit', []).controller('onlineSubmitCtrl', [
  '$scope', '$ionicHistory', 'App', function($scope, $ionicHistory, App) {
    return $scope.view = {
      back: function() {
        return $ionicHistory.goBack();
      },
      init: function() {
        return console.log("online submit entered");
      },
      offlineCalled: function() {
        return App.navigate("offlineSubmit");
      }
    };
  }
]);
