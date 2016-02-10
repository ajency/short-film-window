shortFilmWindow
.controller 'notificationsCtrl', ['$rootScope','$scope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$stateParams','ParseNotificationService'
  ,($rootScope,$scope,App,PulltorefreshAPI,DetailsAPI,$ionicLoading,$stateParams,ParseNotificationService)->

    $scope.notificationArray = []

    $rootScope.$on 'receiveNotification', (event, pn)->
      $scope.getNotifications()

    $scope.getNotifications = ()->
      if App.isOnline()
        $scope.result = 'loader'
        ParseNotificationService.getNotificationsWithStatus()
        .then (data) ->
          if data.length == 0
            $scope.result = 'no-new-notifications'
          else
            $scope.notificationArray = data
            $scope.result = 'display'

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






]
