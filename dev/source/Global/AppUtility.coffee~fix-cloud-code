shortFilmWindow.factory 'App', [
  '$state'
  '$ionicHistory'
  '$window'
  '$cordovaNetwork'
  ($state, $ionicHistory, $window, $cordovaNetwork) ->
    App = undefined
    App =
      start: true
      unreadNotifications : 0
      menuEnabled:
        left: false
        right: false
      previousState: ''
      currentState: ''
      fromNotification: 0
      notificationPayload : []
      navigate: (state, params, opts) ->
        animate = undefined
        back = undefined
        if params == null
          params = {}
        if opts == null
          opts = {}
        if !_.isEmpty(opts)
          animate = if _.has(opts, 'animate') then opts.animate else false
          back = if _.has(opts, 'back') then opts.back else false
          $ionicHistory.nextViewOptions
            disableAnimate: !animate
            disableBack: !back

        $state.go state, params
      getbackView: ->
        console.log $ionicHistory.backView()
      goBack: (count) ->
        if this.fromNotification
          this.fromNotification = 0
          $state.go "popular"
        else
          $ionicHistory.goBack count
      isAndroid: ->
        ionic.Platform.isAndroid()
      isIOS: ->
        ionic.Platform.isIOS()
      isWebView: ->
        ionic.Platform.isWebView()
      isOnline: ->
        if @isWebView()
          $cordovaNetwork.isOnline()
        else
          navigator.onLine
      deviceUUID: ->
        if @isWebView()
          device.uuid
        else
          'DUMMYUUID'
      hideKeyboardAccessoryBar: ->
        if $window.cordova and $window.cordova.plugins.Keyboard
          return $cordovaKeyboard.hideAccessoryBar(true)
      hideSplashScreen : ()->
        if navigator.splashscreen then navigator.splashscreen.hide()

        return
]
