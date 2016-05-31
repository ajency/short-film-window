shortFilmWindow.controller('appInitializeCtrl', [
  '$scope', 'App', 'DetailsAPI', 'InitialiseService', 'ParseConfiguration', '$rootScope', function($scope, App, DetailsAPI, InitialiseService, ParseConfiguration, $rootScope) {
    $scope.initApp = function() {
      var firstScriptTag, tag;
      Parse.initialize(ParseConfiguration.applicationId, ParseConfiguration.javascriptKey, ParseConfiguration.masterKey);
      if (App.isWebView()) {
        ParsePushPlugin.getInstallationObjectId(function(id) {
          return ParseConfiguration.installationId = id;
        }, function(e) {
          return ParseConfiguration.installationId = 0;
        });
        window.ParsePushPlugin.on('openPN', function(pn) {
          return $rootScope.$broadcast('openNotification', {
            payload: pn
          });
        });
        window.ParsePushPlugin.on('receivePN', function(pn) {
          return $rootScope.$broadcast('receiveNotification', {
            payload: pn
          });
        });
      }
      tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      $scope.display = 'loader';
      $scope.errorType = 'offline';
      return InitialiseService.initialize().then(function(data) {
        if (!App.isOnline()) {
          return $scope.display = 'error';
        } else {
          return App.navigate('popular');
        }
      }, function(error) {
        return $scope.display = 'error';
      });
    };
    return $scope.initApp();
  }
]);
