angular.module('SFWApp.Global', []).factory('App', [
  '$state', '$ionicHistory', '$window', '$cordovaNetwork', function($state, $ionicHistory, $window, $cordovaNetwork) {
    var App;
    App = void 0;
    return App = {
      start: true,
      menuEnabled: {
        left: false,
        right: false
      },
      previousState: '',
      currentState: '',
      fromNotification: 0,
      navigate: function(state, params, opts) {
        var animate, back;
        animate = void 0;
        back = void 0;
        if (params === null) {
          params = {};
        }
        if (opts === null) {
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
        if (this.fromNotification) {
          this.fromNotification = 0;
          return $state.go("popular");
        } else {
          return $ionicHistory.goBack(count);
        }
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
