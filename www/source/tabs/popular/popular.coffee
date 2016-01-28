angular.module 'SFWApp.tabs',[]
.controller 'popularCtrl', ['$scope','$rootScope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$window'
  ,($scope,$rootScope, App, PulltorefreshAPI, DetailsAPI,$ionicLoading,$window)->


    $scope.$on '$ionicView.afterEnter', ->
      console.log 'Loading Swiper'
      $rootScope.swiper = new Swiper(angular.element(document.querySelector('#popularswipeId')),
        direction: 'vertical'
        )

    $scope.$on '$ionicView.beforeLeave', ->
      console.log 'Destory'
      $rootScope.swiper.destroy()


    $scope.singleplaylist = (playlistId)->
      console.log playlistId
      DetailsAPI.videoId = playlistId
      console.log DetailsAPI.videoId
      App.navigate "singlePlaylist"

    $scope.doRefresh = ()->

      # $ionicLoading.show
      #   content: 'Loading'
      #   animation: 'fade-in'
      #   showBackdrop: true
      #   maxWidth: 600
      #   showDelay: 0


      PulltorefreshAPI.pullrequest()
      .then (data)=>
        console.log data.defaults.content.popular.weekly_premiere.image
        PulltorefreshAPI.saveData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})

        $scope.premeiere= DetailsAPI.array
        $scope.addition= DetailsAPI.array_addition
        $scope.noteworthy= DetailsAPI.array_noteworthy
        $scope.awplalist= DetailsAPI.array_awplalist
        $scope.videoId = DetailsAPI.array.videoId
        $scope.$broadcast('scroll.refreshComplete');
        $ionicLoading.hide();


      , (error)=>
        $scope.$broadcast('scroll.refreshComplete');
        if App.isOnline
          $scope.errorType = 'offline'
          $scope.display = 'error'
        else
          $scope.classname = 'no_Search_result'
          $scope.display = 'error'

        $ionicLoading.hide();

    $scope.singleplay = (videoid)->

      console.log videoid
      DetailsAPI.videoId = videoid
      console.log DetailsAPI.videoId
      console.log "enterd single play ."
      App.navigate 'init'

    $scope.test = ->
      device_width = $window.innerWidth;
      device_height = $window.innerHeight;
      console.log device_width
      console.log device_height

      $scope.used_height = 86 + 73
      $scope.hgt = device_height - $scope.used_height
      console.log $scope.hgt

      $scope.premeiere= DetailsAPI.array
      $scope.addition= DetailsAPI.array_addition
      $scope.noteworthy= DetailsAPI.array_noteworthy
      $scope.awplalist= DetailsAPI.array_awplalist
      $scope.videoId = DetailsAPI.array.videoId

    App.previousState = 'landing' if App.previousState == 'landing'

]
