shortFilmWindow
.controller 'appInitializeCtrl', ['$scope','App','InitialiseService','ParseConfiguration','$rootScope'
  ,($scope,App,InitialiseService,ParseConfiguration,$rootScope)->
    $scope.initApp = ()->

      console.log "APP STARTED"
      #App.hideSplashScreen()
      Parse.initialize ParseConfiguration.applicationId,ParseConfiguration.javascriptKey,ParseConfiguration.masterKey
      if App.isWebView()
        console.log "ISWEBVIEW"
        ParsePushPlugin.getInstallationObjectId (id) ->
          console.log id,"---------------------------------installationId"
          ParseConfiguration.installationId = id
        , (e) ->
          console.log e,"installationId-ERROR"
          ParseConfiguration.installationId =  0

        window.ParsePushPlugin.on 'openPN', (pn)->
          console.log "OPENPN",pn
          $rootScope.$broadcast 'openNotification', { payload: pn }

        window.ParsePushPlugin.on 'receivePN', (pn)->
          console.log "RECEIVEPN",pn
          console.log pn
          $rootScope.$broadcast 'receiveNotification', { payload: pn }

      # tag = document.createElement('script')
      # tag.src = 'https://www.youtube.com/iframe_api'
      # firstScriptTag = document.getElementsByTagName('script')[0]
      # firstScriptTag.parentNode.insertBefore tag, firstScriptTag

      $scope.display = 'loader'
      $scope.errorType = 'offline'

      if !App.isOnline()
        $scope.display = 'error'
      else
        InitialiseService.initialize()
        .then (data) ->
          console.log data, " INITIALIZED"
          App.navigate 'popular'
        , (error) ->
              $scope.display = 'error'

    $scope.initApp()


]
