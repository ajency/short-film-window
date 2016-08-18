
shortFilmWindow = angular.module 'SFWApp', ['ionic','ngCordova','ngAnimate','ngSanitize','ion-sticky','ionicLazyLoad','ionic.ion.imageCacheFactory','ionic.contrib.ui.ionThread','templates']

shortFilmWindow.value('ParseConfiguration',
  applicationId: 'DMhdPZNQAUzklzpPb9Lhp8qHZFjcVU9klP0jxLsO'
  javascriptKey: 'TTrki92xoLK7s4POTGeFk4i2Ynm8tPbPl7QrKl7K'
  clientKey: 'gsGvDg9ZkEqzwqYZiFsTZZsMQxdCQ9EcNbrTWAY5'
  masterKey: 'LALmaz73J44ndeC2n7vuuySMVLGHUSTEQADmJPKN'
  installationId: ''
 )

shortFilmWindow.run ['$ionicPlatform','$state', '$rootScope', 'App', '$timeout','$window','$cordovaNetwork','$cordovaToast','DetailsAPI','ParseConfiguration', ($ionicPlatform,$state,$rootScope, App, $timeout,$window, $cordovaNetwork,$cordovaToast,DetailsAPI,ParseConfiguration)->

  $ionicPlatform.ready ->

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
          Parse.FacebookUtils.init
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

shortFilmWindow.config ['$compileProvider','$ionicConfigProvider', ($compileProvider,$ionicConfigProvider)->
  # $ionicConfigProvider.views.maxCache 0
  # $ionicConfigProvider.views.forwardCache false
  # $ionicConfigProvider.views.transition 'none'
  # if ionic.Platform.isAndroid()
  $ionicConfigProvider.scrolling.jsScrolling false

  $compileProvider.debugInfoEnabled false

  # scrollable = document.querySelector '#genreScroll'
  # lazyImgConfigProvider.setOptions
  #   offset: 100
  #   errorClass: 'error'
  #   successClass: 'success'
  #   onError: (image) ->
  #   onSuccess: (image) ->
  #   container: angular.element(scrollable)

]



