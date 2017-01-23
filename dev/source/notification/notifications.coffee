shortFilmWindow
.controller 'notificationsCtrl', ['FirebaseApi','$rootScope','$scope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$stateParams','ParseNotificationService','Storage','$timeout','$window'
  ,(FirebaseApi,$rootScope,$scope,App,PulltorefreshAPI,DetailsAPI,$ionicLoading,$stateParams,ParseNotificationService,Storage,$timeout,$window)->

    $scope.notificationArray = []

    $rootScope.$on 'receiveNotification', (event, pn)->
      console.log "RECEIVE PUSH Notifications",event,pn
      $scope.getNotifications()

    $scope.view =
      onTapToRetry: ->
        $scope.getNotifications()

    $scope.getNotifications = ()->
      console.log "GET Notifications"
      $rootScope.$broadcast 'refreshContent',{}
      $scope.hgt = $window.innerHeight - 80
      $scope.swiperhgt = $scope.hgt - 31
      if App.isOnline()
        $scope.result = 'loader'
        Storage.watchlistDetails 'get'
        .then (value)->
          if _.isNull value
            value = []
          $scope.getwatchlistDetails = value
          FirebaseApi.fetchNotifications()
          .then (data) ->
            console.log data,"PARSE Notifications"
            if data.length == 0
              console.log "No data"
              $scope.result = 'no-new-notifications'
            else
              console.log "Data present"
              $scope.refreshSwiper = false
              $scope.notificationArray = data
              $timeout ( ->
                $scope.refreshSwiper = true
                $scope.result = 'display'
                ),50
          , (error) ->
            console.log "In error", error
            $scope.result = 'error'
          .catch (error) ->
            console.log "In error", error
            $scope.result = 'error'
      else
        console.log "App not online"
        $scope.result = 'error'

    $scope.clearNotifications = ()->
      if App.isOnline()
        $scope.notificationArray = []
        $scope.result = 'no-new-notifications'
        $rootScope.unreadNotificationCount = 0
        FirebaseApi.deleteNotifications()
        .then (data) ->
          console.log data
        .catch (error) ->
          $scope.result = 'error'
      else
        $scope.result = 'error'

    $scope.markNotificationAsRead = (notification_id)->
      if App.isOnline()
        matchIndex = _.findLastIndex $scope.notificationArray, {"notificationId": ''+notification_id+''}
        $scope.notificationArray[matchIndex].status = 'read'
        if $rootScope.unreadNotificationCount
          $rootScope.unreadNotificationCount--

        FirebaseApi.updateNotificationStatus(notification_id)
        .then (data) ->
          console.log data
        .catch (error) ->
          $scope.result = 'error'
      else
        $scope.result = 'error'


    $scope.checkIfaddedToWatchList = (movie_id)->
      if $scope.getwatchlistDetails.length > 0
        match = _.findIndex $scope.getwatchlistDetails, {"movie_id": movie_id}
        if match != -1
          'selected'
        else
          'notselected'
      else
        'notselected'

    $scope.findIndexInWatchlist = (movieId) ->
      match = _.findIndex $scope.getwatchlistDetails, {"movie_id": movieId}

          
    $scope.addwatchlist = (movieData,notificationId) ->
      $scope.markNotificationAsRead(notificationId)
      obj =
        "movie_id" : movieData.movie_id
        "singleVideoarray" : movieData

      matchInWatchList = $scope.findIndexInWatchlist(movieData.movie_id)
      if matchInWatchList  == -1
        $scope.getwatchlistDetails.push(obj)
        Storage.watchlistDetails 'set', $scope.getwatchlistDetails
      else
        $scope.getwatchlistDetails.splice matchInWatchList,1
        Storage.watchlistDetails 'set', $scope.getwatchlistDetails

    $scope.singlePlayService = (videoData,notificationId)->
      $scope.markNotificationAsRead(notificationId)
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id
      DetailsAPI.singleVideoarray.singleVideoarray = videoData
      App.navigate 'init'






]
