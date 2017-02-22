shortFilmWindow
.controller 'InitCtrl', ['FirebaseApi','PushConfig','$scope','App','DetailsAPI','$ionicLoading','$ionicHistory','share','Storage','$sce','FacebookGraphAPI','$cordovaOauth','$rootScope'
     ,(FirebaseApi,PushConfig,$scope, App,DetailsAPI,$ionicLoading,$ionicHistory,share,Storage,$sce,FacebookGraphAPI,$cordovaOauth,$rootScope)->

    $scope.Videodetails = []
    # $scope.display = 'loader'
    $scope.addvideoDetails = []
    $scope.getwatchlistDetails = []
    $scope.watchFlag = '0'
    $scope.intFlag = '0'
    $scope.watchlistimg = ''
    $scope.showLoaderOrSynopsis = true
    $scope.appURL = GLOBAL_URL
    $scope.showVideo = false
    $scope.showLoginBtn= true

    $scope.share = (slug)->
        share.shareNative(slug)

    $scope.addwatchlist = ()->
        $scope.CheckWatchlist()

    $scope.checkIfaddedlist = () ->
        Storage.watchlistDetails 'get'
        .then (value)->
            $scope.getwatchlistDetails = value
            if _.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length == 0
                $scope.watchlistimg = 'icon-favorite'
                $scope.$apply()
            else
            # new video added
                i = 0
                while i < $scope.getwatchlistDetails.length
                    if $scope.getwatchlistDetails[i].movie_id == $scope.Videodetails.movie_id
                        $scope.intFlag = '1'

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
            obj =
                "movie_id" : DetailsAPI.singleVideoarray.movie_id
                "singleVideoarray" : DetailsAPI.singleVideoarray.singleVideoarray
            if _.isNull($scope.getwatchlistDetails) || $scope.getwatchlistDetails.length == 0
                $scope.addvideoDetails.push(obj)
                Storage.watchlistDetails 'set', $scope.addvideoDetails
                $scope.watchlistimg = 'icon-unfavorite'
                $scope.$apply()

            else
                matchIndex = _.findLastIndex $scope.getwatchlistDetails, {"movie_id": DetailsAPI.singleVideoarray.movie_id }
                if matchIndex != -1
                    $scope.getwatchlistDetails.splice matchIndex,1
                    wl = $scope.getwatchlistDetails
                    $scope.addvideoDetails = wl
                    Storage.watchlistDetails 'set', $scope.addvideoDetails
                    $scope.watchlistimg = 'icon-favorite'
                    $scope.$apply()
                else
                    $scope.getwatchlistDetails.push(obj)
                    wl = $scope.getwatchlistDetails
                    $scope.addvideoDetails = wl
                    Storage.watchlistDetails 'set', $scope.addvideoDetails
                    $scope.watchlistimg = 'icon-unfavorite'
                    $scope.$apply()


    $scope.init = (movieId = '')->
        console.log "Inside Init controller", DetailsAPI.singleVideoarray.movie_id, DetailsAPI
        if !angular.isUndefined(DetailsAPI.singleVideoarray.movie_id )
            $scope.display = 'result'
            $scope.Videodetails =  DetailsAPI.singleVideoarray.singleVideoarray
            console.log "Displaying video details"
            console.log GLOBAL_URL
            console.log $scope.Videodetails
            $scope.checkIfaddedlist()
            DetailsAPI.GetSingleVideo(DetailsAPI.singleVideoarray.movie_id)
            .then (data)->
                $scope.showLoaderOrSynopsis = false
                $scope.synopsisData = data.content
                # console.log $scope.synopsisData
                
            , (error)->
                # $scope.display = 'error'
        else
            DetailsAPI.GetSingleVideo(movieId)
            .then (data)->
                $scope.display = 'result'
                obj = {"movie_id":data.movie_id,"singleVideoarray":data}
                DetailsAPI.singleVideoarray = obj
                $scope.Videodetails = data
                $scope.showLoaderOrSynopsis = false
                $scope.synopsisData = $scope.Videodetails.content

            , (error)->
                # $scope.display = 'error'
                console.log 'error'

    $scope.initializeApp = ()->

        $scope.display = 'loader'
        console.log "INITIALIZEAPP ", DetailsAPI
        FirebaseApi.pushPluginInit().then (result) ->
            console.log result
            if ionic.Platform.isWebView()
                push = PushNotification.init PushConfig
                push.on 'notification', (data) ->
                    console.log data
                    payload = data.additionalData
                    if App.isAndroid()
                        if payload.coldstart
                            $rootScope.$broadcast 'openNotification', { payload: payload.data }
                        else if !payload.foreground and !payload.coldstart
                            $rootScope.$broadcast 'openNotification', { payload: payload.data }
                        else if payload.foreground
                            $rootScope.$broadcast 'receiveNotification', { payload: payload.data }
                        else if !payload.foreground
                            $rootScope.$broadcast 'receiveNotification', { payload: payload.data }
                  
                    else if App.isIOS()
                        console.log 'ios'
                        console.log '----'
                        console.log payload
                        console.log '----'
                        if payload.foreground
                            $rootScope.$broadcast 'receiveNotification', { payload: payload["gcm.notification.data"] }
                        else if !payload.foreground
                            $rootScope.$broadcast 'openNotification', { payload: payload["gcm.notification.data"] }

            $scope.init(DetailsAPI.videoId)
            $scope.display = 'result'
        , (error)->
            $scope.display = 'error'

    $scope.trustAsHtml = (string) ->
        $sce.trustAsHtml string


    $scope.view =
        onTapToRetry: ->
            $scope.init()

        back:->
            DetailsAPI.singleVideoarray = []
            # $ionicHistory.goBack();
            count = -1
            App.goBack count



        playVideo : ()->
          # App.navigate 'singlePlayer'
          $scope.showVideo = true
          App.navigate 'singlePlayer'

     if App.fromNotification
      $scope.initializeApp()
     else
      $scope.init()

    
    # $scope.LoginwithFacebook = ->
    #   console.log 'clicked'
    #   $cordovaOauth.facebook('586411814878247', [ 'email' ]).then ((result) ->
    #     alert 'Auth Success..!!' + result
    #     return
    #   ), (error) ->
    #     alert 'Auth Failed..!!' + error
    #     return
    #   return

    # $scope.showSynopsisDiv = false

    # $scope.displayWeb = (Url) ->
    #     console.log Url
    #     window.open(Url, '_system')
    #     return true
    # $scope.loginFacebook = ()->
    #     FacebookGraphAPI.loginToFacebook($scope.Videodetails.slug)
    #     .then (data)->
    #         console.log 'Login successfull'
    #     ,(error)->
    #         console.log 'Login error'


    
   ]




