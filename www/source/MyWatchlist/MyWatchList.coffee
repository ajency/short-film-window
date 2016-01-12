angular.module 'SFWApp.watchlist', []

.controller 'watchlistCtrl', ['$scope','Storage','DetailsAPI','App','$window'
     ,($scope,Storage,DetailsAPI,App,$window)->
        $scope.watchlistDetails = []
        $scope.display = 'loader'
        $scope.init = ()->
            console.log "watch list "
            Storage.watchlistDetails 'get'
            .then (value)->
                console.log value
                $scope.watchlistDetails = value
                if $scope.watchlistDetails.length >0
                    device_width = $window.innerWidth;
                    device_height = $window.innerHeight;
                    console.log device_width
                    console.log device_height
                    $scope.used_height = 43 +72
                    $scope.hgt = device_height - $scope.used_height
                    $scope.display = 'result'
                    $scope.$apply()
                else
                    $scope.display = 'no_result'
                    $scope.$apply()




        $scope.singleplay = (videoid)->
            console.log videoid
            DetailsAPI.videoId = videoid
            console.log DetailsAPI.videoId
            console.log "enterd single play ."
            App.navigate 'init'








]