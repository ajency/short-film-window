
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.landing','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar','SFWApp.services'
             , 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI','SFWApp.tabs'
             ,'ion-sticky','ionicLazyLoad','ionic.ion.imageCacheFactory','vimeoEmbed','SFWApp.storage','SFWApp.watchlist']

.value('ParseConfiguration',
  applicationId: '2T1prpN7BMpV0QcVNJS6BDuDr1jmgy0bspF8TY1E'
  javascriptKey: 'ZjvDbNoggTgKtbIJW8asuVw8huGoEBPVvcKbbXru'
  clientKey: 'qm7Z3fHnfXRrN2kirOySQXoiOWixKkLj7yeZeDJo'
 )

.run ['$ionicPlatform','$state', '$rootScope', 'App', '$timeout','Set_Get','$cordovaSplashscreen','$window','$cordovaNetwork','$cordovaToast','DetailsAPI','ParseConfiguration', 'InitialiseService'
  , ($ionicPlatform,$state,$rootScope, App, $timeout,Set_Get,$cordovaSplashscreen,$window, $cordovaNetwork,$cordovaToast,DetailsAPI,ParseConfiguration, InitialiseService)->

    $ionicPlatform.ready ->
      $rootScope.isAndroid = ionic.Platform.isAndroid()

      # ParsePushPlugin.on 'receivePN', (pn)->
      #   console.log 'yo i got this push notification:' + JSON.stringify pn;
      #   $rootScope.$broadcast 'receivePN', { payload: pn }

      # ParsePushPlugin.on 'openPN', (pn)->
      #   console.log 'Yo, I get this when the user clicks open a notification from the tray:' + JSON.stringify pn;
      #   $rootScope.$broadcast 'openPN', { payload: pn }
      InitialiseService.initialize()
      .then (data) ->
          # $ionicLoading.hide()
          App.navigate 'popular'
      , (error) ->
          $cordovaToast.show('Please Connect to Internet', 'long', 'bottom')

      
        window.fbAsyncInit = ->
          Parse.FacebookUtils.init
            # appId: '955517544488844'
            appId: '586411814878247'
            version: 'v2.3'
            xfbml: true
          return

        ((d, s, id) ->
          js = undefined
          fjs = d.getElementsByTagName(s)[0]
          if d.getElementById(id)
            return
          js = d.createElement(s)
          js.id = id
          js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7'
          fjs.parentNode.insertBefore js, fjs
          return
        ) document, 'script', 'facebook-jssdk'


    $rootScope.App = App

  #....YouTube Api loading
    # tag = document.createElement('script')
    # tag.src = 'https://www.youtube.com/iframe_api'
    # firstScriptTag = document.getElementsByTagName('script')[0]
    # firstScriptTag.parentNode.insertBefore tag, firstScriptTag
    #..... device screen size
    device_width = $window.innerWidth;
    device_height = $window.innerHeight;

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

    # $timeout ->
    #   App.navigate 'landingvideo'
    # , 300



    return

]

