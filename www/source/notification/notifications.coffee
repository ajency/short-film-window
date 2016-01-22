angular.module 'SFWApp.tabs'
.controller 'notificationsCtrl', ['$rootScope','$scope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$stateParams','ParseNotificationService'
  ,($rootScope,$scope,App,PulltorefreshAPI,DetailsAPI,$ionicLoading,$stateParams,ParseNotificationService)->

    $scope.result = 'loader'

    $scope.formData = (data,clear = 0)->
      if clear
        $scope.notificationArray = []
      else
         $scope.notificationArray.push obj


    $scope.getNotifications = ()->
      $scope.notificationArray = []
      if App.isOnline()
        ParseNotificationService.getNotificationsWithStatus()
        .then (data) ->
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
          $scope.result = 'display'
        .catch (error) ->
          console.log error
          $scope.result = 'error'
      else
        $scope.result = 'error'





]
