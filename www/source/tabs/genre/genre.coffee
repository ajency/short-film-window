angular.module 'SFWApp.tabs'
.controller 'genreCtrl', ['$rootScope','$scope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$stateParams'
  ,($rootScope,$scope,App,PulltorefreshAPI,DetailsAPI,$ionicLoading,$stateParams)->

    $scope.notificationPayload = $stateParams.data

    $scope.doRefresh = ()->
      PulltorefreshAPI.pullrequest()
      .then (data)=>
        console.log data.defaults.content.popular.weekly_premiere.image
        PulltorefreshAPI.saveData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})
        $scope.genre = DetailsAPI.genre_array
        $scope.$broadcast('scroll.refreshComplete');
        $ionicLoading.hide();
      , (error)=>
        $scope.$broadcast('scroll.refreshComplete');
        console.log 'Error Loading data'
        $ionicLoading.hide();


    $scope.init = ->
      console.log 'in genre'
      $scope.genre = DetailsAPI.genre_array

    $scope.singleGenre = (genreId)->
      DetailsAPI.videoId = genreId
      App.navigate "singleGenre"
]
