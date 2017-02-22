shortFilmWindow
.controller 'appSlidesCtrl', ['$scope','App','InitialiseService','$rootScope','$ionicPlatform','FirebaseApi','PushConfig'
  ,($scope,App,InitialiseService,$rootScope,$ionicPlatform,FirebaseApi,PushConfig)->
    $scope.initApp = ()->
      console.log "APP STARTED for the first time"
      FirebaseApi.pushPluginInit().then (result) ->
          console.log result, "PUSH INIT APP appSlidesCtrl"

          if ionic.Platform.isWebView()
            push = PushNotification.init PushConfig
            push.on 'notification', (data) ->
              console.log data
              payload = data.additionalData
              # $rootScope.$broadcast 'receiveNotification', { payload: data }
              if App.isAndroid()

                if payload.coldstart
                  $rootScope.$broadcast 'openNotification', { payload: payload.data }
                else if !payload.foreground and !payload.coldstart
                  $rootScope.$broadcast 'openNotification', { payload: payload.data }
                else if payload.foreground
                  $rootScope.$broadcast 'receiveNotification', { payload: payload.data }
                else if !payload.foreground
                  $rootScope.$broadcast 'receiveNotification', { payload: payload.data }
              
              else if App.isIOS()
                console.log 'ios'
                console.log '----'
                console.log payload
                console.log '----'
                if payload.foreground
                  $rootScope.$broadcast 'receiveNotification', { payload: JSON.parse(payload["gcm.notification.data"]) }
                else if !payload.foreground
                  $rootScope.$broadcast 'openNotification', { payload: JSON.parse(payload["gcm.notification.data"]) }
    
    $scope.startApp = ->
      if !App.isOnline()
        $scope.display = 'error'
      else
        $scope.apiLoading=true
        InitialiseService.initialize()
        .then (data) ->
          console.log data, " INITIALIZED"
          $scope.apiLoading=false
          App.navigate 'popular'
        , (error) ->
              $scope.display = 'error'

    $scope.next = ->
      $ionicSlideBoxDelegate.next()
      return

    $scope.previous = ->
      $ionicSlideBoxDelegate.previous()
      return

    # Called each time the slide changes

    $scope.slideChanged = (index) ->
      $scope.slideIndex = index
      return


    $scope.initApp()


]
