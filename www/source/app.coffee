
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.landing','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar','SFWApp.services'
             , 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI','SFWApp.tabs','SFWApp.submit'
             ,'ion-sticky','ionicLazyLoad','ionic.ion.imageCacheFactory','vimeoEmbed','SFWApp.storage','SFWApp.watchlist']

.value('ParseConfiguration',
  applicationId: '2T1prpN7BMpV0QcVNJS6BDuDr1jmgy0bspF8TY1E'
  javascriptKey: 'ZjvDbNoggTgKtbIJW8asuVw8huGoEBPVvcKbbXru'
  clientKey: 'qm7Z3fHnfXRrN2kirOySQXoiOWixKkLj7yeZeDJo'
  USING_PARSE: true
  initialized: false)

.run ['$ionicPlatform','$state', '$rootScope', 'App', '$timeout','Set_Get','$cordovaSplashscreen','$window','$cordovaNetwork','$cordovaToast', 'ParseService','DetailsAPI', ($ionicPlatform,$state,$rootScope, App, $timeout,Set_Get,$cordovaSplashscreen,$window, $cordovaNetwork,$cordovaToast,ParseService,DetailsAPI)->

  $ionicPlatform.ready ->
    $rootScope.isAndroid = ionic.Platform.isAndroid()
    ParseService.initialize().then(->
      ParseService.getInstallationId()
    ).then (_response) ->
      ParseService.registerCallback (pnObj) ->
        console.log 'in assigned callback ' + JSON.stringify(pnObj)
     .then  (success) ->
      console.log 'Parse callback registered ' + success
    , (_error) ->
      console.log _error

  $window.onNotification = (pnObj) ->
    console.log 'notifications: ' + JSON.stringify(pnObj)
    if pnObj.receivedInForeground == false
      DetailsAPI.videoId = 565
      $state.go 'init'

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

  $timeout ->
    $state.go 'landingvideo'
    return
  , 3000
  return

]

