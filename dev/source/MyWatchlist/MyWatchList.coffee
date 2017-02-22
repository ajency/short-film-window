shortFilmWindow
.controller 'watchlistCtrl', ['$scope','Storage','DetailsAPI','App','$window','$ionicScrollDelegate','$timeout'
     ,($scope,Storage,DetailsAPI,App,$window,$ionicScrollDelegate,$timeout)->
        $scope.watchlistDetails = []
        $scope.display = 'loader'
        $scope.watchFlag = '0'
        $scope.refreshSwiper = true
        $scope.addvideoDetails= []
        $scope.init = ()->
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
                        device_width = $window.innerWidth
                        device_height = $window.innerHeight
                        $scope.used_height = 43 +90
                        $scope.hgt = device_height - $scope.used_height
                        $scope.display = 'result'
                        $scope.$apply()
                    else
                        $scope.display = 'no_result'
                        $scope.$apply()



        $scope.updatewatchlist = (Id)->
            $scope.CheckWatchlist(Id)
            $ionicScrollDelegate.resize()



        $scope.singlePlayService = (videoData)->
            DetailsAPI.singleVideoarray.movie_id = videoData.movie_id
            DetailsAPI.singleVideoarray.singleVideoarray = videoData
            App.navigate 'init'


        $scope.CheckWatchlist = (Id) ->
            matchIndex = _.findLastIndex $scope.watchlistDetails, {"movie_id": Id }
            $scope.watchlistDetails.splice matchIndex,1
            Storage.watchlistDetails 'set', $scope.watchlistDetails
            if _.isNull($scope.watchlistDetails) || $scope.watchlistDetails.length == 0
                $scope.display = 'no_result'
            else
                $scope.refreshSwiper = false
                $timeout (->
                    $scope.refreshSwiper = true
                    device_width = $window.innerWidth
                    device_height = $window.innerHeight
                    $scope.used_height = 43 +72
                    $scope.hgt = device_height - $scope.used_height
                    ), 100

]