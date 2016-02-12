shortFilmWindow

.controller 'singlePlaylist', ['$scope','$rootScope','$ionicScrollDelegate','$ionicLoading','App','PlaylistAPI','DetailsAPI','$ionicHistory','share','$window','$timeout','Storage', ($scope,$rootScope,$ionicScrollDelegate,$ionicLoading,App,PlaylistAPI,DetailsAPI,$ionicHistory,share,$window,$timeout,Storage)->

    $scope.display= 'loader'

    $scope.getwatchlistDetails = []


    $rootScope.slideHeader = false

    $rootScope.slideHeaderPrevious = 0

    $scope.detectSlideChange = (swiperInstance)->
        console.log 'asdsada'
        console.log swiperInstance


    $scope.checkIfaddedToWatchList = (movie_id)->
        if $scope.getwatchlistDetails.length > 0
            match = _.findIndex $scope.getwatchlistDetails, {"movie_id": movie_id}
            if match != -1
                'selected'
            else
                'notselected'
        else
            'notselected'

    $scope.findIndexInWatchlist = (movieId) ->
        match = _.findIndex $scope.getwatchlistDetails, {"movie_id": movieId}  

        
    $scope.addwatchlist = (movieData) ->
        console.log movieData 
        obj = 
            "movie_id" : movieData.movie_id
            "singleVideoarray" : movieData

        matchInWatchList = $scope.findIndexInWatchlist(movieData.movie_id)
        if matchInWatchList  == -1
            $scope.getwatchlistDetails.push(obj)
            Storage.watchlistDetails 'set', $scope.getwatchlistDetails
        else
            $scope.getwatchlistDetails.splice matchInWatchList,1
            Storage.watchlistDetails 'set', $scope.getwatchlistDetails 

    $scope.share = (slug) ->
        share.shareNative(slug,'playlist')
        
    $scope.init = () ->
        Storage.watchlistDetails 'get'
        .then (value)->
            if _.isNull value
                value = []
            $scope.getwatchlistDetails = value 

            if ( DetailsAPI.GlobalChild_array.length >0 )
                $scope.playlistData= DetailsAPI.GlobalChild_array
                $scope.playlist = DetailsAPI.Global_array
                $scope.display= 'result'
                device_width = $window.innerWidth;
                device_height = $window.innerHeight;
                $scope.used_height = 44 + 120
                $scope.hgt = device_height - $scope.used_height
                # width for header..
                $scope.headerwidth = device_width - 100 -27
                console.log $scope.playlist

            else
                $scope.display= 'loader'
                PlaylistAPI.GetSingleplaylist(DetailsAPI.videoId)
                .then (data)=>
                    DetailsAPI.Global_array = data.playlist
                    DetailsAPI.GlobalChild_array = data.movies
                    $scope.playlistData= data.movies
                    $scope.playlist = data.playlist
                    $scope.display = 'result'

                    device_width = $window.innerWidth;
                    device_height = $window.innerHeight;
                    $scope.used_height = 44 + 120
                    $scope.hgt = device_height - $scope.used_height
                    $scope.headerwidth = device_width - 100 - 27
                    $ionicLoading.hide();
                    console.log $scope.playlist
                , (error)=>
                    $scope.display= 'error'
                    $ionicLoading.hide();


    $scope.singlePlayService = (videoData)->
        DetailsAPI.singleVideoarray.movie_id = videoData.movie_id
        DetailsAPI.singleVideoarray.singleVideoarray = videoData
        App.navigate 'init'     

    $scope.back = ()->
        DetailsAPI.Global_array = []
        DetailsAPI.GlobalChild_array = []
        count = -1
        App.goBack count
    

]
