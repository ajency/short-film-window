angular.module 'SFWApp.watchlist', []

.controller 'watchlistCtrl', ['$scope','Storage','DetailsAPI','App','$window','$ionicScrollDelegate'
     ,($scope,Storage,DetailsAPI,App,$window,$ionicScrollDelegate)->
        $scope.watchlistDetails = []
        $scope.display = 'loader'
        $scope.watchFlag = '0'
        $scope.addvideoDetails= []
        $scope.init = ()->
            console.log "watch list "
            $scope.getData()


        $scope.getData= ()->
            Storage.watchlistDetails 'get'
            .then (value)->
                console.log value
                $scope.watchlistDetails = value
                if  _.isNull($scope.watchlistDetails)
                    $scope.display = 'no_result'
                    $scope.$apply()
                else
                    if($scope.watchlistDetails.length >0)
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



        $scope.updatewatchlist = (Id)->
            console.log Id
            $scope.display = 'loader'
            $scope.CheckWatchlist(Id)
            $ionicScrollDelegate.resize()



        $scope.singleplay = (videoid)->
            console.log videoid
            DetailsAPI.videoId = videoid
            console.log DetailsAPI.videoId
            console.log "enterd single play ."
            App.navigate 'init'

        $scope.CheckWatchlist = (Id) ->
            console.log "checking if video exist"
            console.log Id
            Storage.watchlistDetails 'get'
            .then (value)->
                console.log value
                $scope.getwatchlistDetails = value
                i = 0
                while i < $scope.getwatchlistDetails.length
                    if $scope.getwatchlistDetails[i].movie_id == Id
                        console.log "Movie already added "

                        console.log  $scope.addvideoDetails
                        $scope.getwatchlistDetails.splice(i,1)
                        console.log $scope.getwatchlistDetails
                        $scope.updatewatch()
                        $scope.watchFlag = '1'
                    else
                        console.log "New movie entry "
                    i++


        $scope.updatewatch = ()->
            i= 0
            $scope.watchlistDetails =  $scope.getwatchlistDetails
            while i < $scope.getwatchlistDetails.length
                $scope.addvideoDetails.push($scope.getwatchlistDetails[i])
                i++
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
            Storage.watchlistDetails 'set', $scope.watchlistDetails











]