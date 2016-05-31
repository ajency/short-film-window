shortFilmWindow
.controller 'appInitializeCtrl', ['$scope','App','DetailsAPI','InitialiseService','ParseConfiguration','$rootScope'
  ,($scope,App,DetailsAPI,InitialiseService,ParseConfiguration,$rootScope)->
    $scope.initApp = ()->

      Parse.initialize ParseConfiguration.applicationId,ParseConfiguration.javascriptKey,ParseConfiguration.masterKey

      if App.isWebView()
        ParsePushPlugin.getInstallationObjectId (id) ->
          ParseConfiguration.installationId = id
        , (e) ->
          ParseConfiguration.installationId =  0

        window.ParsePushPlugin.on 'openPN', (pn)->
          $rootScope.$broadcast 'openNotification', { payload: pn }

        window.ParsePushPlugin.on 'receivePN', (pn)->
          $rootScope.$broadcast 'receiveNotification', { payload: pn }

      tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore tag, firstScriptTag

      $scope.display = 'loader'
      $scope.errorType = 'offline'
      InitialiseService.initialize()
        .then (data) ->
          if !App.isOnline()
            $scope.display = 'error'
          else  
            App.navigate 'popular'
      , (error) ->
            $scope.display = 'error'

    $scope.initApp()        

       
]                    
