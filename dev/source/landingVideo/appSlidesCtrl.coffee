shortFilmWindow
.controller 'appSlidesCtrl', ['$scope','App','InitialiseService','$rootScope','$ionicPlatform'
  ,($scope,App,InitialiseService,$rootScope,$ionicPlatform)->
    $scope.initApp = ()->

      console.log "APP STARTED for the first time"
      #App.hideSplashScreen()
     
          # window.ParsePushPlugin.on 'openPN', (pn)->
          #   console.log "OPENPN",pn
          #   $rootScope.$broadcast 'openNotification', { payload: pn }

          # window.ParsePushPlugin.on 'receivePN', (pn)->
          #   console.log "RECEIVEPN",pn
          #   console.log pn
          #   $rootScope.$broadcast 'receiveNotification', { payload: pn }
    
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
