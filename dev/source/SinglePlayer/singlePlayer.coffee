shortFilmWindow
.controller 'playerCtrl', ['$scope','$sce','DetailsAPI','$ionicHistory','App','$timeout'
  ,($scope,$sce,DetailsAPI,$ionicHistory,App,$timeout)->

    $scope.temp = "temp"
    $scope.videoDetails = DetailsAPI.singleVideoarray
    $scope.videourl = $scope.videoDetails.singleVideoarray.videourl

    player = null
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
          # player = document.getElementById('player1')
          # console.log angular.element(player)
        else
          @vimomeo = false
          console.log $scope.videoDetails.singleVideoarray,"videoDetails"
          modifiedUrl = $scope.videoDetails.singleVideoarray.embedurl
          
     
      
          onYouTubeIframeAPIReady = () ->
            player = new YT.Player 'player2',
              height: '100%',
              width: '100%',
              videoId: $scope.videoDetails.singleVideoarray.videourl,
              events:
                'onReady': onPlayerReady
          onPlayerReady = (event)->
            console.log "PLAY"
            event.target.playVideo()

        

          
          $scope.player2 = $sce.trustAsResourceUrl(modifiedUrl)
          onYouTubeIframeAPIReady()
          # player = document.getElementById('player2')
          # console.log angular.element(player).onre
]
