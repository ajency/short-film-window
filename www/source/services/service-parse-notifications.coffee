angular.module('SFWApp.services').service 'ParseNotificationService', [
  '$q'
  '$window'
  'ParseConfiguration'
  '$rootScope'
  ($q, $window, ParseConfiguration,$rootScope) ->
    {
      getNotificationsWithStatus: ->
        deferred = $q.defer()
        installation_id = ParseConfiguration.installationId
        console.log installation_id
        Parse.Cloud.run 'listAllNotificationsForUser', {"installation_id" : installation_id},
          success: (results) ->
            notificationArray = []
            _.each results, (value) ->
            obj =
              "createdAt": value.attributes.createdAt
              "notificationId": value.attributes.notificationId.id
              "installationId": value.attributes.installationId.id
              "alert": value.attributes.notificationId.attributes.alert
              "status": value.attributes.status
            notificationArray.push obj
            deferred.resolve notificationArray
            return
          error: (error) ->
            console.log error
            deferred.reject error
            return
        deferred.promise

      getUnreadNotificationsCount: ->
        deferred = $q.defer()
        installation_id = ParseConfiguration.installationId
        console.log installation_id
        Parse.Cloud.run 'countUnreadNotifications', {"installation_id" : installation_id},
          success: (count) ->
            deferred.resolve count
            return
          error: (error) ->
            console.log error
            deferred.reject error
            return
        deferred.promise

      updateNotificationStatus: (notification_id)->
        deferred = $q.defer()
        installation_id = ParseConfiguration.installationId
        Parse.Cloud.run 'updateNotificationStatusAsRead', {"installation_id" : installation_id,"notification_id" : notification_id},
          success: (results) ->
            console.log results
            deferred.resolve results
            return
          error: (error) ->
            console.log 'Some error.'
            deferred.reject error
            return
        deferred.promise

      deleteNotifications: ()->
        deferred = $q.defer()
        installation_id = ParseConfiguration.installationId
        Parse.Cloud.run 'deleteAllNotification', {"installation_id" : installation_id},
          success: (results) ->
            notificationArray = []
            _.each results, (value) ->
            obj =
              "createdAt": value.attributes.createdAt
              "notificationId": value.attributes.notificationId.id
              "installationId": value.attributes.installationId.id
              "alert": value.attributes.notificationId.attributes.alert
              "status": value.attributes.status
            notificationArray.push obj
            deferred.resolve notificationArray
            return
          error: (error) ->
            deferred.reject error
            return
        deferred.promise
    }
]
