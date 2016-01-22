angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App','DetailsAPI','$ionicLoading','$ionicHistory','share','Storage','InitialiseService','$rootScope'
     ,($scope, $sce,App,DetailsAPI,$ionicLoading,$ionicHistory,share,Storage,InitialiseService,$rootScope)->
    $scope.Videodetails = []
    $scope.display = 'loader'
    $scope.addvideoDetails = []
    $scope.getwatchlistDetails = []
    $scope.watchFlag = '0'
    $scope.intFlag = '0'
    $scope.watchlistimg = ''

    $scope.share = ()->
        console.log "social sharing "
        share.shareNative()

    $scope.addwatchlist = ()->
        console.log "video added to watchlist "
        console.log DetailsAPI.singleVideoarray
        $scope.CheckWatchlist()

    $scope.checkIfaddedlist = () ->
        console.log "checking if video exist"
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
        console.log "checking if video exist"
        Storage.watchlistDetails 'get'
        .then (value)->
            console.log value
            $scope.getwatchlistDetails = value
            if _.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length == 0
                console.log "new video  entry"
                $scope.addvideoDetails.push(DetailsAPI.singleVideoarray)
                Storage.watchlistDetails 'set', $scope.addvideoDetails
                $scope.watchlistimg = 'icon-unfavorite'
                $scope.$apply()

            else
                console.log $scope.addvideoDetails
                i = 0
                while i < $scope.getwatchlistDetails.length
                    if $scope.getwatchlistDetails[i].movie_id == DetailsAPI.singleVideoarray.movie_id
                        console.log "Movie already added "

                        console.log  $scope.addvideoDetails
                        $scope.getwatchlistDetails.splice(i,1)
                        console.log $scope.getwatchlistDetails
                        $scope.updatewatchlist()
                        $scope.watchlistimg = 'icon-favorite'
                        $scope.$apply()

                        $scope.watchFlag = '1'
                    else
                        console.log "New movie entry "
                    i++

                if $scope.watchFlag == '0'
                    $scope.watchlistimg = 'icon-unfavorite'

                    n =  $scope.getwatchlistDetails.length
                    i= 0
                    while i < n
                        $scope.addvideoDetails.push($scope.getwatchlistDetails[i])
                        i++

                    $scope.addvideoDetails.push(DetailsAPI.singleVideoarray)
                    Storage.watchlistDetails 'set', $scope.addvideoDetails
                    $scope.$apply()



    $scope.updatewatchlist = ()->
        $scope.watchlistimg = 'icon-favorite'
        $scope.$apply()

        i= 0

        while i < $scope.getwatchlistDetails.length
            $scope.addvideoDetails.push($scope.getwatchlistDetails[i])
            i++
        Storage.watchlistDetails 'set', $scope.addvideoDetails


    $scope.init = ()->

        if !angular.isUndefined(DetailsAPI.singleVideoarray.movie_id )
            console.log "Single video Data Cached"
            $scope.Videodetails =  DetailsAPI.singleVideoarray
        else
            DetailsAPI.GetSingleVideo(DetailsAPI.videoId)
            .then (data)=>
                $scope.display = 'result'
                console.log "single video  data succ"
                DetailsAPI.singleVideoarray = data
                $scope.Videodetails = data
                document.getElementById('synopsis').outerHTML = ($scope.Videodetails.content);
                $scope.checkIfaddedlist()

            , (error)=>
                console.log 'Error Loading data'
                $scope.display = 'error'


        console.log  DetailsAPI.videoId
        console.log 'In Init'
        Vtype = '0'


    $scope.initializeApp = ()->
      $ionicLoading.show
        content: 'Loading'
        animation: 'fade-in'
        showBackdrop: true
        maxWidth: 600
        showDelay: 0

      InitialiseService.initialize().then (data)->
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
          App.navigate 'singlePlayer'

     if App.fromNotification
      $scope.initializeApp()
    else
      $scope.init();

    $scope.showSynopsisDiv = false

    $rootScope.$on 'receiveNotification' , (event,args)->
      console.log ''+args
      $rootScope.getnotificationcount()

    $rootScope.$on 'openNotification' , (event,args)->
      console.log ''+args
      $rootScope.getnotificationcount()





]




