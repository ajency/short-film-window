angular.module 'SFWApp.landing', []

.controller 'landingCtrl', ['$scope','App','DetailsAPI','$sce','$ionicLoading','$ImageCacheFactory','$cordovaToast','$state','$timeout','$ionicPlatform','InitialiseService'
    ,($scope,App,DetailsAPI,$sce,$ionicLoading,$ImageCacheFactory,$cordovaToast,$state,$timeout,$ionicPlatform,InitialiseService)->
        $scope.view =
            skip : true

            skiplangingVideo:->
                land_vid_html5_api.pause();
                this.init()
                $ionicLoading.show
                    content: 'Loading'
                    animation: 'fade-in'
                    showBackdrop: true
                    maxWidth: 600
                    hideOnStateChange:true
                    showDelay: 0
            init:->
                console.log 'init'
                InitialiseService.initialize()
                .then (data) ->
                    $ionicLoading.hide()
                    App.navigate 'popular'
                , (error) ->
                    $ionicLoading.hide()
                    $cordovaToast.show('Please Connect to Internet', 'long', 'bottom')
                    return





        # $timeout (->
        #     console.log 'timeout'
        #
        #     return
        #   ), 5000
        # return




]
