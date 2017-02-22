shortFilmWindow
.controller 'appInitializeCtrl', ['$scope','App','InitialiseService','$rootScope','$ionicPlatform','FirebaseApi','PushConfig'
  ,($scope,App,InitialiseService,$rootScope,$ionicPlatform, FirebaseApi,PushConfig)->
    $scope.initApp = ()->

      console.log "APP STARTED"
      #App.hideSplashScreen()
      if App.isWebView()
        console.log "ISWEBVIEW"
        # ParsePushPlugin.getInstallationObjectId (id) ->
        #   console.log id,"---------------------------------installationId"
        #   ParseConfiguration.installationId = id
        # , (e) ->
        #   console.log e,"installationId-ERROR"
        #   ParseConfiguration.installationId =  0

        # window.ParsePushPlugin.on 'openPN', (pn)->
        #   console.log "OPENPN",pn
        #   $rootScope.$broadcast 'openNotification', { payload: pn }

        # window.ParsePushPlugin.on 'receivePN', (pn)->
        #   console.log "RECEIVEPN",pn
        #   console.log pn
        #   $rootScope.$broadcast 'receiveNotification', { payload: pn }

      # tag = document.createElement('script')
      # tag.src = 'https://www.youtube.com/iframe_api'
      # firstScriptTag = document.getElementsByTagName('script')[0]
      # firstScriptTag.parentNode.insertBefore tag, firstScriptTag

      $scope.display = 'loader'
      $scope.errorType = 'offline'

      if !App.isOnline()
        $scope.display = 'error'
      else
        FirebaseApi.pushPluginInit().then (result) ->
          console.log result
          if ionic.Platform.isWebView()
            push = PushNotification.init PushConfig
            push.on 'notification', (data) ->
              console.log data
              payload = data.additionalData
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
          InitialiseService.initialize()
          .then (data) ->
            console.log data, " INITIALIZED"
            App.navigate 'popular'
          , (error) ->
                $scope.display = 'error'
        , (error)->
            $scope.display = 'error'
        
    $ionicPlatform.ready ->
      $scope.initApp()


]
