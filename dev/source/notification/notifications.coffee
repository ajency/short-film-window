shortFilmWindow
.controller 'notificationsCtrl', ['$rootScope','$scope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$stateParams','ParseNotificationService','Storage','$timeout'
  ,($rootScope,$scope,App,PulltorefreshAPI,DetailsAPI,$ionicLoading,$stateParams,ParseNotificationService,Storage,$timeout)->

    $scope.notificationArray = []

    $rootScope.$on 'receiveNotification', (event, pn)->
      $scope.getNotifications()

    $scope.getNotifications = ()->
      if App.isOnline()
        $scope.result = 'loader'
        Storage.watchlistDetails 'get'
        .then (value)->
          if _.isNull value
            value = []
          $scope.getwatchlistDetails = value  
 
          ParseNotificationService.getNotificationsWithStatus()
          .then (data) ->
            if data.length == 0
              $scope.result = 'no-new-notifications'
              $scope.initWatchlist
            else
              $scope.refreshSwiper = false
              $timeout ( ->
                $scope.refreshSwiper = true
                $scope.notificationArray = data
                $scope.result = 'display'
                ),50

          .catch (error) ->
            $scope.result = 'error'
      else
        $scope.result = 'error'

    $scope.clearNotifications = ()->
      if App.isOnline()
        $scope.notificationArray = []
        $scope.result = 'no-new-notifications'
        $rootScope.unreadNotificationCount = 0
        ParseNotificationService.deleteNotifications()
        .then (data) ->
          console.log data
        .catch (error) ->
          $scope.result = 'error'
      else
        $scope.result = 'error'   

    $scope.markNotificationAsRead = (notification_id)->
      if App.isOnline()
        matchIndex = _.findLastIndex $scope.notificationArray, {"notificationId": ''+notification_id+''}
        console.log matchIndex
        $scope.notificationArray[matchIndex].status = 'read'
        if $rootScope.unreadNotificationCount
          $rootScope.unreadNotificationCount--

        ParseNotificationService.updateNotificationStatus(notification_id)
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
