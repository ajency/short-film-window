angular.module 'SFWApp.tabs'
.controller 'notificationsCtrl', ['$rootScope','$scope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$stateParams','ParseNotificationService'
  ,($rootScope,$scope,App,PulltorefreshAPI,DetailsAPI,$ionicLoading,$stateParams,ParseNotificationService)->

    $scope.result = 'loader'

    $scope.refreshNotifications = ()->
      $scope.getNotifications()

    $scope.getNotifications = ()->
      $scope.notificationArray = []
      if App.isOnline()
        ParseNotificationService.getNotificationsWithStatus()
        .then (data) ->
          console.log data
          $scope.notificationArray = data
          $scope.result = 'display'
        .catch (error) ->
          console.log error
          $scope.result = 'error'
      else
        $scope.result = 'error'

    $scope.clearNotifications = ()->
      if App.isOnline()
        ParseNotificationService.deleteNotifications()
        .then (data) ->
          console.log data
          $scope.notificationArray = []
          $scope.result = 'no-new-notifications'
          $scope.result = 'display'
        .catch (error) ->
          console.log error
          $scope.result = 'error'
      else
        $scope.result = 'error'

    $scope.markNotificationAsRead = (notification_id)->
      if App.isOnline()
        ParseNotificationService.updateNotificationStatus(notification_id)
        .then (data) ->
          console.log data
          match = _.findWhere $scope.notificationArray, {"notification_id": notification_id}
          _.extend match, {status:'read'}
          console.log match

          $scope.result = 'display'
        .catch (error) ->
          console.log error
          $scope.result = 'error'
      else
        $scope.result = 'error'






]
