angular.module 'SFWApp.tabs'

.controller 'singlePlaylist', ['$scope','$ionicLoading','App','PlaylistAPI','DetailsAPI','$ionicHistory', ($scope,$ionicLoading,App,PlaylistAPI,DetailsAPI,$ionicHistory)->

    $scope.display= 'loader'
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
        else
            console.log "Playlist emplty"
            $ionicLoading.show
              content: 'Loading'
              animation: 'fade-in'
              showBackdrop: true
              maxWidth: 600
              showDelay: 0
            PlaylistAPI.GetSingleplaylist(DetailsAPI.videoId)
            .then (data)=>
                DetailsAPI.Global_array = data.playlist
                DetailsAPI.GlobalChild_array = data.movies
                $scope.playlistData= data.movies
                $scope.playlist = data.playlist
                $scope.display = 'result'
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
