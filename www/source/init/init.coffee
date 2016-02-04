angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App','DetailsAPI','$ionicLoading','$ionicHistory','share','Storage','InitialiseService','ParseNotificationService','$rootScope'
     ,($scope, $sce,App,DetailsAPI,$ionicLoading,$ionicHistory,share,Storage,InitialiseService,ParseNotificationService,$rootScope)->
    $scope.Videodetails = []
    # $scope.display = 'loader'
    $scope.addvideoDetails = []
    $scope.getwatchlistDetails = []
    $scope.watchFlag = '0'
    $scope.intFlag = '0'
    $scope.watchlistimg = ''

    $scope.showVideo = false

    $scope.share = ()->
        console.log "social sharing "
        share.shareNative()

    $scope.addwatchlist = ()->
        $scope.CheckWatchlist()

    $scope.checkIfaddedlist = () ->
        Storage.watchlistDetails 'get'
        .then (value)->
            console.log value
            $scope.getwatchlistDetails = value
            if _.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length == 0
                console.log "new video  entry"
                $scope.watchlistimg = 'icon-favorite'
                $scope.$apply()
            else
            # new video added
                i = 0
                while i < $scope.getwatchlistDetails.length
                    if $scope.getwatchlistDetails[i].movie_id == $scope.Videodetails.movie_id
                        console.log "Movie already added "
                        $scope.intFlag = '1'
                    else
                        console.log "New movie entry "
                    i++

                if $scope.intFlag == '1'
                    $scope.watchlistimg = 'icon-unfavorite'
                    $scope.$apply()


                else
                    $scope.watchlistimg = 'icon-favorite'
                    $scope.$apply()




    $scope.CheckWatchlist = () ->
        Storage.watchlistDetails 'get'
        .then (value)->
            $scope.getwatchlistDetails = value
            if _.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length == 0
                console.log 'first entry'
                $scope.addvideoDetails.push(DetailsAPI.singleVideoarray)
                Storage.watchlistDetails 'set', $scope.addvideoDetails
                $scope.watchlistimg = 'icon-unfavorite'
                $scope.$apply()

            else
                console.log 'some data present'
                matchIndex = _.findLastIndex $scope.getwatchlistDetails, {"movie_id": DetailsAPI.singleVideoarray.movie_id }
                if matchIndex != -1
                    console.log 'remove from watchlist'
                    $scope.getwatchlistDetails.splice matchIndex,1
                    wl = $scope.getwatchlistDetails
                    $scope.addvideoDetails = wl
                    Storage.watchlistDetails 'set', $scope.addvideoDetails
                    $scope.watchlistimg = 'icon-favorite'
                    $scope.$apply()
                else
                    console.log 'add'
                    $scope.getwatchlistDetails.push(DetailsAPI.singleVideoarray)
                    wl = $scope.getwatchlistDetails
                    $scope.addvideoDetails = wl
                    Storage.watchlistDetails 'set', $scope.addvideoDetails
                    $scope.watchlistimg = 'icon-unfavorite'
                    $scope.$apply()


    $scope.init = ()->
        if !angular.isUndefined(DetailsAPI.singleVideoarray.movie_id )
            console.log "Single video Data Cached"
            $scope.display = 'result'
            $scope.Videodetails =  DetailsAPI.singleVideoarray.singleVideoarray
            console.log $scope.Videodetails
            $scope.checkIfaddedlist()
            $ionicLoading.hide()

            console.log DetailsAPI.singleVideoarray

            $scope.vType = DetailsAPI.singleVideoarray.singleVideoarray.type
            $scope.videourl = DetailsAPI.singleVideoarray.singleVideoarray.videourl

            console.log $scope.vType,$scope.videourl

            if($scope.vType == 'vimeo')
              modifiedUrl = DetailsAPI.singleVideoarray.singleVideoarray.embedurl
              $scope.vimomeo = true
              $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl)
            else
              $scope.vimomeo = false
              player = new YT.Player('player2', {
                height: '100%',
                width: '100%',
                videoId:$scope.videourl ,
                playerVars: { 'autoplay': 0, 'rel': 0, 'wmode':'transparent', 'modestbranding' :1 }
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
              });  

        Vtype = '0'

    onPlayerReady = (event) ->
        event.target.playVideo()

    onPlayerStateChange = (event) ->
      if event.data == YT.PlayerState.PLAYING and !done
        setTimeout stopVideo, 6000
        done = true

    stopVideo = ->
      player.stopVideo()    


    $scope.initializeApp = ()->
      $ionicLoading.show
        content: 'Loading'
        animation: 'fade-in'
        showBackdrop: true
        maxWidth: 600
        showDelay: 0

      console.log  App.notificationPayload.payload.notificationId  

      # InitialiseService.initialize().then (data)->
      ParseNotificationService.updateNotificationStatus(App.notificationPayload.payload.notificationId)
      .then (data)->  
        console.log data
        $scope.init()

      .catch (error)->
        console.log error
        $scope.init()


    $scope.$on '$ionicView.afterEnter', ->
        console.log 'after enter'


    $scope.view =
        back:->
            DetailsAPI.singleVideoarray = []
            # $ionicHistory.goBack();
            count = -1
            App.goBack count



        playVideo : ()->
          # App.navigate 'singlePlayer'
          $scope.showVideo = true

     if App.fromNotification
      $scope.initializeApp()
    else
      $scope.init()

    $scope.showSynopsisDiv = false

]




