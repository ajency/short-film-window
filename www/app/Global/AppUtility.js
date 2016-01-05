angular.module('SFWApp.Global', []).factory('App', [
  '$state', '$ionicHistory', '$window', '$cordovaNetwork', function($state, $ionicHistory, $window, $cordovaNetwork) {
    var App;
    return App = {
      start: true,
      menuEnabled: {
        left: false,
        right: false
      },
      previousState: '',
      currentState: '',
      navigate: function(state, params, opts) {
        var animate, back;
        if (params == null) {
          params = {};
        }
        if (opts == null) {
          opts = {};
        }
        if (!_.isEmpty(opts)) {
          animate = _.has(opts, 'animate') ? opts.animate : false;
          back = _.has(opts, 'back') ? opts.back : false;
          $ionicHistory.nextViewOptions({
            disableAnimate: !animate,
            disableBack: !back
          });
        }
        return $state.go(state, params);
      },
      getbackView: function() {
        return console.log($ionicHistory.backView());
      },
      goBack: function(count) {
        return $ionicHistory.goBack(count);
      },
      isAndroid: function() {
        return ionic.Platform.isAndroid();
      },
      isIOS: function() {
        return ionic.Platform.isIOS();
      },
      isWebView: function() {
        return ionic.Platform.isWebView();
      },
      isOnline: function() {
        if (this.isWebView()) {
          return $cordovaNetwork.isOnline();
        } else {
          return navigator.onLine;
        }
      },
      deviceUUID: function() {
        if (this.isWebView()) {
          return device.uuid;
        } else {
          return 'DUMMYUUID';
        }
      },
      hideKeyboardAccessoryBar: function() {
        if ($window.cordova && $window.cordova.plugins.Keyboard) {
          return $cordovaKeyboard.hideAccessoryBar(true);
        }
      }
    };
  }
]);
