
angular.module 'SFWApp', ['ionic','ngCordova','ngAnimate','SFWApp.landing','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar','SFWApp.services'
             , 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI','SFWApp.tabs'
             ,'ion-sticky','ionicLazyLoad','ionic.ion.imageCacheFactory','vimeoEmbed','SFWApp.storage','SFWApp.watchlist','SFWApp.directives']

.value('ParseConfiguration',
  applicationId: 'DMhdPZNQAUzklzpPb9Lhp8qHZFjcVU9klP0jxLsO'
  javascriptKey: 'TTrki92xoLK7s4POTGeFk4i2Ynm8tPbPl7QrKl7K'
  clientKey: 'gsGvDg9ZkEqzwqYZiFsTZZsMQxdCQ9EcNbrTWAY5'
  masterKey: 'LALmaz73J44ndeC2n7vuuySMVLGHUSTEQADmJPKN'
  installationId: ''
 )

.run ['$ionicPlatform','$state', '$rootScope', 'App', '$timeout','Set_Get','$window','$cordovaNetwork','$cordovaToast','DetailsAPI','ParseConfiguration','InitialiseService', ($ionicPlatform,$state,$rootScope, App, $timeout,Set_Get,$window, $cordovaNetwork,$cordovaToast,DetailsAPI,ParseConfiguration,InitialiseService)->

  $ionicPlatform.ready ->
    App.navigate 'appInitialize'        

    Parse.initialize ParseConfiguration.applicationId,ParseConfiguration.javascriptKey,ParseConfiguration.masterKey

    ParsePushPlugin.getInstallationObjectId (id) ->
      console.log id
      ParseConfiguration.installationId = id
    , (e) ->
      ParseConfiguration.installationId =  0

    window.ParsePushPlugin.on 'openPN', (pn)->
      $rootScope.$broadcast 'openNotification', { payload: pn }

    window.ParsePushPlugin.on 'receivePN', (pn)->
      $rootScope.$broadcast 'receiveNotification', { payload: pn }

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

  $rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams) ->
    if to.name == 'notifications'
      $rootScope.pageHeader = 'Notifications'
    else
      $rootScope.pageHeader = 'Shortfilm Window'

    if from.name == "" and to.name == 'init'
      App.fromNotification = 1
    else
      App.previousState = from.name
    App.currentState = to.name

  $rootScope.$on '$stateChangeStart', (ev, toState, toParams, fromState, fromParams) ->
    if fromState.name != '' and toState.name == 'appInitialize'
      console.log 'prevent'
      ev.preventDefault() 

]

# .config ['$ionicConfigProvider', ($ionicConfigProvider)->
#   $ionicConfigProvider.views.maxCache 3
#   $ionicConfigProvider.views.forwardCache true
#   $ionicConfigProvider.views.transition 'none'

# ]

