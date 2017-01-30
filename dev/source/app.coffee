
shortFilmWindow = angular.module 'SFWApp', ['ionic','ngCordova','ngAnimate','ngSanitize','ion-sticky','ionicLazyLoad','ionic.ion.imageCacheFactory','ionic.contrib.ui.ionThread','templates']

shortFilmWindow.value 'FirebaseKey',
  # RELEASE KEYS
 

  # TEST KEYS
    apiKey: "AIzaSyCVSA3tkbBp7Sk_4HB3GYnfFL0u3XUbJfk",
    authDomain: "shortfilmwindow-e5571.firebaseapp.com",
    databaseURL: "https://shortfilmwindow-e5571.firebaseio.com",
    storageBucket: "shortfilmwindow-e5571.appspot.com",
    messagingSenderId: "936233723943"
 
.constant 'PushConfig',
    android:
      senderID: "936233723943"
      clearBadge: true
    ios:
      senderID: "936233723943"
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
      console.log ionic.Platform.platform(), 'IONIC'
      if ionic.Platform.isWebView()
        push = PushNotification.init PushConfig
        push.on 'registration', (data) ->
          console.log 'DEVICE ID ->',data.registrationId
          platform = ionic.Platform.platform()
          console.log platform, "PLATFROM NAME"
          push.subscribe ''+platform+'', ()->
            console.log 'SUB : success'
          ,(e)->
            console.log 'error:'
            console.log e
          
          FirebaseApi.registerDevice data.registrationId
        push.on 'notification', (data) ->
          console.log data
          $rootScope.$broadcast 'receiveNotification', { payload: data }
      else
        FirebaseApi.registerDevice('DUMMY_UUID')
      
      # FirebaseApi.saveNotification()
      FirebaseApi.fetchNotifications().then (result)->
        console.log result,'NOTIFICATIONS'
      , (error)->
        console.log 'ERROR'
      FirebaseApi.getUnreadNotificationsCount()
      $rootScope.App = App
      device_width = $window.innerWidth
      device_height = $window.innerHeight
      $rootScope.device_height = $window.innerHeight
      App.hideSplashScreen()
      console.log 'Checking if initial'
      console.log App.isInitialRun()
      if App.isInitialRun()
        App.setInitialRun false
        App.navigate 'appSlides'
      else
        App.navigate 'appInitialize'

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



