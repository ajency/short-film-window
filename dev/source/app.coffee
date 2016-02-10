
shortFilmWindow = angular.module 'SFWApp', ['ionic','ngCordova','ngAnimate','ngSanitize','ion-sticky','ionicLazyLoad','vimeoEmbed','ionic.ion.imageCacheFactory','templates']

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
    device_width = $window.innerWidth;
    device_height = $window.innerHeight;
    App.navigate 'appInitialize'        

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


