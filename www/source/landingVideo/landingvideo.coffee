angular.module 'SFWApp.landing', []

.controller 'landingCtrl', ['$scope','App','DetailsAPI','$sce','$ionicLoading','$ImageCacheFactory','$cordovaToast','$state','$timeout','$ionicPlatform','InitialiseService'

  ,($scope,App,DetailsAPI,$sce,$ionicLoading,$ImageCacheFactory,$cordovaToast,$state,$timeout,$ionicPlatform,InitialiseService)->
    $scope.view =
      skip : true

      skiplangingVideo:->
        land_vid_html5_api.pause();
        console.log "skip videoa"
        $ionicLoading.show
          content: 'Loading'
          animation: 'fade-in'
          showBackdrop: true
          maxWidth: 600
          hideOnStateChange:true
          showDelay: 0
      init:->
        console.log 'sadsasadad'
        InitialiseService.initialize().then (data) ->
          console.log data
          $ionicLoading.hide()
          App.navigate 'popular'
          return
        , (error) ->
          $cordovaToast.show('Please Connect to Internet', 'long', 'bottom').then (success) ->
            console.log('toast displayed')
            return
          return
        return  

        


    # $timeout (->
    #     console.log 'timeout'
    #     
    #     return
    #   ), 5000 
    # return    
        



]
