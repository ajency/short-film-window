shortFilmWindow
.controller 'InitCtrl', ['$scope', '$sce','App','DetailsAPI','$ionicLoading','$ionicHistory','share','Storage','InitialiseService','ParseNotificationService','$rootScope'
     ,($scope, $sce,App,DetailsAPI,$ionicLoading,$ionicHistory,share,Storage,InitialiseService,ParseNotificationService,$rootScope)->
    $scope.Videodetails = []
    # $scope.display = 'loader'
    $scope.addvideoDetails = []
    $scope.getwatchlistDetails = []
    $scope.watchFlag = '0'
    $scope.intFlag = '0'
    $scope.watchlistimg = ''
    $scope.showLoaderOrSynopsis = true

    $scope.showVideo = false

    $scope.share = (slug)->
        console.log "social sharing "
        share.shareNative(slug)

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


    $scope.init = (movieId = '')->
        if !angular.isUndefined(DetailsAPI.singleVideoarray.movie_id )
            $scope.display = 'result'
            $scope.Videodetails =  DetailsAPI.singleVideoarray.singleVideoarray
            $scope.checkIfaddedlist()
            DetailsAPI.GetSingleVideo(DetailsAPI.singleVideoarray.movie_id)
            .then (data)->
                $scope.showLoaderOrSynopsis = false
                document.getElementById('synopsis').outerHTML = (data.content)
                $scope.initPlayer()
            , (error)=>
                # $scope.display = 'error' 
                console.log 'error'  
        else
            DetailsAPI.GetSingleVideo(movieId)
            .then (data)=>
                $scope.display = 'result'
                obj = {"movie_id":data.movie_id,"singleVideoarray":data}
                DetailsAPI.singleVideoarray = obj
                $scope.Videodetails = data
                $scope.Videodetails
                $scope.showLoaderOrSynopsis = false
                document.getElementById('synopsis').outerHTML = ($scope.Videodetails.content);
                $scope.initPlayer()

            , (error)=>
                # $scope.display = 'error' 
                console.log 'error'   

    $scope.initPlayer = ()->
        $scope.vType = DetailsAPI.singleVideoarray.singleVideoarray.type
        $scope.videourl = DetailsAPI.singleVideoarray.singleVideoarray.videourl

        if($scope.vType == 'vimeo')
          modifiedUrl = DetailsAPI.singleVideoarray.singleVideoarray.embedurl
          console.log modifiedUrl
          $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl)
          console.log $scope.player1
        else
          console.log $scope.videourl
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

    onPlayerReady = (event) ->
        event.target.playVideo()

    onPlayerStateChange = (event) ->
      if event.data == YT.PlayerState.PLAYING and !done
        setTimeout stopVideo, 6000
        done = true

    stopVideo = ->
      player.stopVideo()    


    $scope.initializeApp = ()->

      console.log  App.notificationPayload.payload.notificationId
      $scope.display = 'loader'

      ParseNotificationService.updateNotificationStatus(App.notificationPayload.payload.notificationId)
      .then (data)->  
        console.log data
        $scope.init(DetailsAPI.videoId)

      .catch (error)->
        console.log error
        $scope.init(DetailsAPI.videoId)


    $scope.$on '$ionicView.afterEnter', ->
        console.log 'after enter'


    $scope.view =
        onTapToRetry: ->
            console.log 'retry'
            $scope.init()

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




