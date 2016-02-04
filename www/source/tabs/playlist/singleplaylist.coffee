angular.module 'SFWApp.tabs'

.controller 'singlePlaylist', ['$scope','$rootScope','$ionicScrollDelegate','$ionicLoading','App','PlaylistAPI','DetailsAPI','$ionicHistory','share','$window','$timeout', ($scope,$rootScope,$ionicScrollDelegate,$ionicLoading,App,PlaylistAPI,DetailsAPI,$ionicHistory,share,$window,$timeout)->

    $scope.display= 'loader'


    $rootScope.slideHeader = false

    $rootScope.slideHeaderPrevious = 0


    $scope.share = () ->
        share.shareNative()
    $scope.init = () ->
        if ( DetailsAPI.GlobalChild_array.length >0 )
            console.log "Playlist cached"
            $scope.playlistData= DetailsAPI.GlobalChild_array
            $scope.playlist = DetailsAPI.Global_array
            $scope.display= 'result'
            device_width = $window.innerWidth;
            device_height = $window.innerHeight;
            console.log device_width
            console.log device_height
            $scope.used_height = 44 + 120
            console.log '******',$scope.used_height
            $scope.hgt = device_height - $scope.used_height
            console.log $scope.hgt

            # width for header..
            $scope.headerwidth = device_width - 100 -27

        else
            console.log "Playlist emplty"
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
                console.log device_width
                console.log device_height
                $scope.used_height = 44 + 120
                $scope.hgt = device_height - $scope.used_height
                console.log $scope.hgt
                $scope.headerwidth = device_width - 100 - 27
                console.log '-----',$scope.used_height


                $ionicLoading.hide();
            , (error)=>
                console.log 'Error Loading data'
                $scope.display= 'error'
                $ionicLoading.hide();

    # $scope.singleplay = (videoid)->

    #     console.log videoid
    #     DetailsAPI.videoId = videoid
    #     console.log DetailsAPI.videoId
    #     console.log "enterd single play ."
    #     App.navigate 'init'

    $scope.singlePlayService = (videoData)->
        console.log videoData
        DetailsAPI.singleVideoarray.movie_id = videoData.movie_id
        DetailsAPI.singleVideoarray.singleVideoarray = videoData
        App.navigate 'init'     

    $scope.back = ()->
        # $ionicHistory.goBack();
        DetailsAPI.Global_array = []
        DetailsAPI.GlobalChild_array = []
        count = -1
        App.goBack count
    

]
