
shortFilmWindow = angular.module 'SFWApp', ['ionic','ngCordova','ngAnimate','ngSanitize','ion-sticky','ionicLazyLoad','ionic.ion.imageCacheFactory','ionic.contrib.ui.ionThread','templates']

shortFilmWindow.value 'FirebaseKey',
  # RELEASE KEYS
    # apiKey: "AIzaSyCIzwFzGdQUCc_CXpo7WfW8rg_5kHyQjfU"
    # authDomain: "sfwindow-b3160.firebaseapp.com"
    # databaseURL: "https://sfwindow-b3160.firebaseio.com"
    # storageBucket: "sfwindow-b3160.appspot.com"
    # messagingSenderId: "499710069011"

  # TEST KEYS
    apiKey: "AIzaSyCVSA3tkbBp7Sk_4HB3GYnfFL0u3XUbJfk",
    authDomain: "shortfilmwindow-e5571.firebaseapp.com",
    databaseURL: "https://shortfilmwindow-e5571.firebaseio.com",
    storageBucket: "shortfilmwindow-e5571.appspot.com",
    messagingSenderId: "936233723943"
  
  # # Live Test Keys
  #   apiKey: "AIzaSyDAuU8ZODWrmz6qM2qK_f1jxP3S4qg8t48",
  #   authDomain: "sfwindowtest.firebaseapp.com",
  #   databaseURL: "https://sfwindowtest.firebaseio.com",
  #   storageBucket: "sfwindowtest.appspot.com",
  #   messagingSenderId: "462103939939"
 
.constant 'PushConfig',
    android:
      # senderID: "499710069011"
      senderID: "936233723943"
      # senderID: "462103939939"
      icon: "notification_icon"
      clearBadge: true
    ios:
      # senderID: "499710069011"
      senderID: "936233723943"
      # senderID: "462103939939"
      gcmSandbox: true
      clearBadge: true
      alert: true
      badge: true
      sound: false

shortFilmWindow.run ['PushConfig','FirebaseApi','$ionicPlatform','$state', '$rootScope', 'App', '$timeout','$window','$cordovaNetwork','$cordovaToast','DetailsAPI'
, (PushConfig,FirebaseApi,$ionicPlatform,$state,$rootScope, App, $timeout,$window, $cordovaNetwork,$cordovaToast,DetailsAPI)->

 $ionicPlatform.ready ->
      $rootScope.isAndroid = ionic.Platform.isAndroid()
      FirebaseApi.firebaseInit()
      $rootScope.App = App
      device_width = $window.innerWidth
      device_height = $window.innerHeight
      $rootScope.device_height = $window.innerHeight
      # FirebaseApi.pushPluginInit().then (result) ->
      #   console.log result
      #   if ionic.Platform.isWebView()
      #     push = PushNotification.init PushConfig
      #     push.on 'notification', (data) ->
      #       console.log data
      #       $rootScope.$broadcast 'receiveNotification', { payload: data }
            
      App.hideSplashScreen()
      if App.isInitialRun()
        App.setInitialRun false
        App.navigate 'appSlides'
      else
        App.navigate 'appInitialize'
        
      # , (error)->
      #   console.log error, 'ERROR'
      #   alert( 'ERORROR')
      # FirebaseApi.fetchNotifications().then (result)->
      #   console.log result,'NOTIFICATIONS'
      # , (error)->
      #   console.log 'ERROR'
      # FirebaseApi.getUnreadNotificationsCount()
      

    $ionicPlatform.registerBackButtonAction ((event) ->
      if $state.current.name == 'popular'
        navigator.app.exitApp()
        #<-- remove this line to disable the exit
      else
        count = -1
        App.goBack count
      return
    ), 100

  # FastClick.attach document.body
 window.fbAsyncInit = ->
          FB.init
            appId: '586411814878247'
            version: 'v2.4'
            cookie: true
            xfbml: true
          return

        ((d, s, id) ->
          js = undefined
          fjs = d.getElementsByTagName(s)[0]
          if d.getElementById(id)
            return
          js = d.createElement(s)
          js.id = id
          js.src = 'https://connect.facebook.net/en_US/sdk.js'
          fjs.parentNode.insertBefore js, fjs
          return
        ) document, 'script', 'facebook-jssdk'

 $rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams) ->
    console.log "FROM : #{from.name} , TO : #{to.name}"
    if to.name == 'notifications'
      $rootScope.pageHeader = 'Notifications'
    else
      $rootScope.pageHeader = 'ShortFilmWindow'

    if from.name == "" and to.name == 'init'
      App.fromNotification = 1
    else
      App.previousState = from.name
    App.currentState = to.name

  $rootScope.$on '$stateChangeStart', (ev, toState, toParams, fromState, fromParams) ->
    if fromState.name != '' and toState.name == 'appInitialize'
      ev.preventDefault()

]

shortFilmWindow.config ['$compileProvider','$ionicConfigProvider','$sceDelegateProvider', ($compileProvider,$ionicConfigProvider,$sceDelegateProvider)->
  # $ionicConfigProvider.views.maxCache 0
  # $ionicConfigProvider.views.forwardCache false
  # $ionicConfigProvider.views.transition 'none'
  # if ionic.Platform.isAndroid()
  $ionicConfigProvider.scrolling.jsScrolling false

  $compileProvider.debugInfoEnabled false
  $sceDelegateProvider.resourceUrlWhitelist [
    'self'
    new RegExp('^(http[s]?)://(w{3}.)?youtube.com/.+$')
  ]
  # scrollable = document.querySelector '#genreScroll'
  # lazyImgConfigProvider.setOptions
  #   offset: 100
  #   errorClass: 'error'
  #   successClass: 'success'
  #   onError: (image) ->
  #   onSuccess: (image) ->
  #   container: angular.element(scrollable)

]



