shortFilmWindow.service 'ParseNotificationService', [
  '$q'
  '$window'
  'ParseConfiguration'
  '$rootScope'
  ($q, $window, ParseConfiguration,$rootScope) ->
    {
      getNotificationsWithStatus: ->
        deferred = $q.defer()
        installation_id = ParseConfiguration.installationId
        # installation_id = 'SlTCCS8Eom'
        Parse.Cloud.run 'listAllNotificationsForUser', {"installation_id" : installation_id},
          success: (results) ->
            notificationArray = []
            _.each results, (value) ->
              j = {}
              if value.attributes.notificationId.attributes.movieDetails
                j = angular.fromJson decodeURIComponent value.attributes.notificationId.attributes.movieDetails
                obj =
                "fromnow": moment(value.attributes.createdAt).fromNow()
                "createdAt": value.attributes.createdAt
                "notificationId": value.attributes.notificationId.id
                "installationId": value.attributes.installationId.id
                "alert": value.attributes.notificationId.attributes.alert
                "movieDetails": j
                "status": value.attributes.status
              if _.isString(obj.movieDetails.title) and obj.movieDetails.title.indexOf('+') != -1
                obj.movieDetails.title = obj.movieDetails.title.replace(/\+/g, ' ')
              if _.isString(obj.movieDetails.director) and obj.movieDetails.director.indexOf('+') != -1
                obj.movieDetails.director = obj.movieDetails.director.replace(/\+/g, ' ')
              if _.isString(obj.movieDetails.tagline) and obj.movieDetails.tagline.indexOf('+') != -1
                obj.movieDetails.tagline = obj.movieDetails.tagline.replace(/\+/g, ' ')
                
              notificationArray.push obj
            deferred.resolve notificationArray
            return
          error: (error) ->
            deferred.reject error
            return
        deferred.promise

      getUnreadNotificationsCount: ->
        deferred = $q.defer()
        installation_id = ParseConfiguration.installationId
        # installation_id = 'SlTCCS8Eom'
        Parse.Cloud.run 'countUnreadNotifications', {"installation_id" : installation_id},
          success: (count) ->
            deferred.resolve count
            return
          error: (error) ->
            deferred.reject '0'
            return
        deferred.promise

      updateNotificationStatus: (notification_id)->
        deferred = $q.defer()
        installation_id = ParseConfiguration.installationId
        # installation_id = 'SlTCCS8Eom'
        Parse.Cloud.run 'updateNotificationStatusAsRead', {"installation_id" : installation_id,"notification_id" : notification_id},
          success: (results) ->
            deferred.resolve results
            return
          error: (error) ->
            deferred.reject error
            return
        deferred.promise

      deleteNotifications: ()->
        deferred = $q.defer()
        installation_id = ParseConfiguration.installationId
        # installation_id = 'SlTCCS8Eom'
        Parse.Cloud.run 'deleteAllNotification', {"installation_id" : installation_id},
          success: (results) ->
            deferred.resolve results
            return
          error: (error) ->
            deferred.reject error
            return
        deferred.promise
    }
]
