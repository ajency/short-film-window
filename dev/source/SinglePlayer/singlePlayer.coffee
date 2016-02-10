shortFilmWindow
.controller 'playerCtrl', ['$scope','$sce','DetailsAPI','$ionicHistory','App','$timeout'
  ,($scope,$sce,DetailsAPI,$ionicHistory,App,$timeout)->

    $scope.videoDetails = DetailsAPI.singleVideoarray
    $scope.videourl = $scope.videoDetails.singleVideoarray.videourl
    console.log $scope.videourl

    $scope.switchHeaderBar = true

    $timeout ->
      $scope.switchHeaderBar = !$scope.switchHeaderBar
    ,5000

    $scope.toggleHeader = ()->
      $scope.switchHeaderBar = !$scope.switchHeaderBar
      $timeout ->
        $scope.switchHeaderBar = !$scope.switchHeaderBar
        $scope.$apply()
      ,5000

    $scope.view =
      back:->
        count = -1
        App.goBack count

      vType : $scope.videoDetails.singleVideoarray.type
      vimomeo : true
      init:->
        if(@vType == 'vimeo')
          modifiedUrl = $scope.videoDetails.singleVideoarray.embedurl
          @vimomeo = true
          $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl)
        else
          @vimomeo = false
          player = new YT.Player('player2', {
            height: '100%',
            width: '100%',
            videoId:$scope.videourl ,
            playerVars: { 'autoplay': 1, 'rel': 0, 'wmode':'transparent', 'modestbranding' :1 }
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });


    onPlayerReady = (event) ->
        event.target.playVideo()

    onPlayerStateChange = (event) ->
      if event.data == YT.PlayerState.PLAYING and !done
        setTimeout stopVideo, 6000
        done = true

    stopVideo = ->
      player.stopVideo()


]
