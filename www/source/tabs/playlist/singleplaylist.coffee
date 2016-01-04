angular.module 'SFWApp.tabs'

.controller 'singlePlaylist', ['$scope','$ionicLoading','App','PlaylistAPI','DetailsAPI','$ionicHistory','share','$window','$timeout', ($scope,$ionicLoading,App,PlaylistAPI,DetailsAPI,$ionicHistory,share,$window,$timeout)->

    $scope.display= 'loader'
    $scope.share = () ->
        share.shareNative()
    $scope.init = () ->

        swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination'
                paginationClickable: true
                direction: 'vertical'
                    });

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
            $scope.hgt = device_height - $scope.used_height
            console.log $scope.hgt

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


                $ionicLoading.hide();
            , (error)=>
                console.log 'Error Loading data'
                $scope.display= 'error'
                $ionicLoading.hide();

    $scope.singleplay = (videoid)->

        console.log videoid
        DetailsAPI.videoId = videoid
        console.log DetailsAPI.videoId
        console.log "enterd single play ."
        App.navigate 'init'

    $scope.back = ()->
        # $ionicHistory.goBack();
        DetailsAPI.Global_array = []
        DetailsAPI.GlobalChild_array = []
        count = -1
        App.goBack count

]
