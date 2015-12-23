angular.module 'SFWApp.tabs'

.controller 'singlePlaylist', ['$scope','$ionicLoading','App','PlaylistAPI','DetailsAPI','$ionicHistory', ($scope,$ionicLoading,App,PlaylistAPI,DetailsAPI,$ionicHistory)->

    $scope.init = () ->
        swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination'
                paginationClickable: true
                direction: 'vertical'
                    });

        $ionicLoading.show
          content: 'Loading'
          animation: 'fade-in'
          showBackdrop: true
          maxWidth: 600
          showDelay: 0


        # $scope.playlist = DetailsAPI.genre_array


        PlaylistAPI.GetSingleplaylist(DetailsAPI.videoId)
        .then (data)=>

            $scope.playlistData= data.movies
            $scope.playlist = data.playlist
            $ionicLoading.hide();
        , (error)=>
            console.log 'Error Loading data'
            $ionicLoading.hide();

    $scope.singleplay = (videoid)->

        console.log videoid
        DetailsAPI.videoId = videoid
        console.log DetailsAPI.videoId
        console.log "enterd single play ."
        App.navigate 'init'

    $scope.back = ()->
        $ionicHistory.goBack();
        # count = -1
        # App.goBack count

]
