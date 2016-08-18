angular.module 'SFWApp.landing', []

.controller 'landingCtrl', ['$scope','App','DetailsAPI','$sce','$ionicLoading','$ImageCacheFactory','$cordovaToast','$state','$timeout','$ionicPlatform','InitialiseService'
    ,($scope,App,DetailsAPI,$sce,$ionicLoading,$ImageCacheFactory,$cordovaToast,$state,$timeout,$ionicPlatform,InitialiseService)->

        console.log "LANDING CONTROLLER"
        $scope.view =
            skip : true
            land_vid_html5_api : angular.element("#land_vid_html5_api")
            skiplangingVideo:->
                land_vid_html5_api.pause();
                console.log "skip videoa"
                $ionicLoading.show
                    content: 'Loading'
                    animation: none
                    showBackdrop: true
                    maxWidth: 600
                    hideOnStateChange:true
                    showDelay: 0
                App.navigate 'popular'
            init:->
                console.log 'sadsasadad'
                InitialiseService.initialize()
                .then (data) ->
                    $ionicLoading.hide()
                , (error) ->
                    $cordovaToast.show('Please Connect to Internet', 'long', 'bottom')
            viedoEnded : ()->
                console.log 'ended',1
                App.navigate 'popular'

        $scope.$on '$ionicView.afterEnter', ()->
            $scope.view.land_vid_html5_api = angular.element("#land_vid_html5_api")
            console.log $scope.view.land_vid_html5_api[0].onended
            $scope.view.land_vid_html5_api[0].onended = $scope.view.viedoEnded





        # $timeout (->
        #     console.log 'timeout'
        #
        #     return
        #   ), 5000
        # return




]
