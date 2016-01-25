
angular.module 'SFWApp', ['ionic','ngCordova','ngAnimate','SFWApp.landing','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar','SFWApp.services'
             , 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI','SFWApp.tabs'
             ,'ion-sticky','ionicLazyLoad','ionic.ion.imageCacheFactory','vimeoEmbed','SFWApp.storage','SFWApp.watchlist']

.value('ParseConfiguration',
  applicationId: 'DMhdPZNQAUzklzpPb9Lhp8qHZFjcVU9klP0jxLsO'
  javascriptKey: 'TTrki92xoLK7s4POTGeFk4i2Ynm8tPbPl7QrKl7K'
  clientKey: 'gsGvDg9ZkEqzwqYZiFsTZZsMQxdCQ9EcNbrTWAY5'
  masterKey: 'LALmaz73J44ndeC2n7vuuySMVLGHUSTEQADmJPKN'
  installationId: ''
 )

.run ['$ionicPlatform','$state', '$rootScope', 'App', '$timeout','Set_Get','$cordovaSplashscreen','$window','$cordovaNetwork','$cordovaToast','DetailsAPI','ParseConfiguration','InitialiseService', ($ionicPlatform,$state,$rootScope, App, $timeout,Set_Get,$cordovaSplashscreen,$window, $cordovaNetwork,$cordovaToast,DetailsAPI,ParseConfiguration,InitialiseService)->

  $ionicPlatform.ready ->
    $cordovaSplashscreen.show()
    $rootScope.isAndroid = ionic.Platform.isAndroid()

    Parse.initialize( ParseConfiguration.applicationId,ParseConfiguration.javascriptKey,ParseConfiguration.masterKey );

    ParsePushPlugin.getInstallationObjectId (id) ->
      ParseConfiguration.installationId = id
    , (e) ->
      ParseConfiguration.installationId =  0

    ParsePushPlugin.on 'openPN', (pn)->
      console.log 'openPn',pn
      $rootScope.$broadcast 'openNotification', { payload: pn }

    ParsePushPlugin.on 'receivePN', (pn)->
      console.log 'closePn',pn
      $rootScope.$broadcast 'receiveNotification', { payload: pn }

    InitialiseService.initialize().then (data)->
      console.log 'appinit',data
      $cordovaSplashscreen.hide()
      App.navigate 'popular'




  $rootScope.App = App

#....YouTube Api loading
  tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore tag, firstScriptTag
  #..... device screen size
  device_width = $window.innerWidth;
  device_height = $window.innerHeight;
  console.log device_width
  console.log device_height

  #....swiper initialization
  swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination'
          paginationClickable: true
          direction: 'vertical'
            });

  $rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams) ->
    if from.name == "" and to.name == 'init'
      App.fromNotification = 1
    else
      App.previousState = from.name
    App.currentState = to.name
    return

  $rootScope.$on '$stateChangeStart', (ev, toState, toParams, fromState, fromParams) ->
    if fromState.name == 'init' and toState.name == 'landingvideo'
      ev.preventDefault()
    return

  # InitialiseService.initialize().then (data)->
  #   console.log 'appinit',data
  #   # $cordovaSplashscreen.hide()
  #   App.navigate 'popular'

  # $timeout ->

  # , 3000
  # return

]

