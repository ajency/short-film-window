angular.module 'SFWApp.tabs'
.controller 'notificationsCtrl', ['$rootScope','$scope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$stateParams','ParseNotificationService'
  ,($rootScope,$scope,App,PulltorefreshAPI,DetailsAPI,$ionicLoading,$stateParams,ParseNotificationService)->

    $scope.notificationArray = []

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
          console.log error
          $scope.result = 'error'
      else
        $scope.result = 'error'

    $scope.clearNotifications = ()->
      if App.isOnline()
        $scope.notificationArray = []
        $scope.result = 'no-new-notifications'
        ParseNotificationService.deleteNotifications()
        .then (data) ->
          console.log data
        .catch (error) ->
          console.log error
          $scope.result = 'error'
      else
        $scope.result = 'error'

    $scope.markNotificationAsRead = (notification_id)->
      if App.isOnline()
        console.log $scope.notificationArray,notification_id
        match = _.findWhere $scope.notificationArray, {"notification_id": ''+notification_id+''}
        console.log match
        _.extend match, {status:'read'}
        console.log $scope.notificationArray

        ParseNotificationService.updateNotificationStatus(notification_id)
        .then (data) ->
          console.log data
        .catch (error) ->
          console.log error
          $scope.result = 'error'
      else
        $scope.result = 'error'






]
