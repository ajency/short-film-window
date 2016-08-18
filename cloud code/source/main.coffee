_ = require('underscore.js')

Parse.Cloud.afterSave 'Notifications', (request) ->
  alertNotification = request.object.get('notification')
  movieId = request.object.get('movieId')
  #Android
  queryAndroid = new (Parse.Query)(Parse.Installation)
  queryAndroid.equalTo 'deviceType', 'android'
  Parse.Push.send {
    'where': queryAndroid
    'data': alertNotification
    'movieId': movieId
  },
    success: ->
      console.log 'Push was successful android'
      return
    error: (error) ->
      console.log 'Handle error android'
      return
  #iOS
  queryIOS = new (Parse.Query)(Parse.Installation)
  queryIOS.equalTo 'deviceType', 'ios'
  Parse.Push.send {
    'where': queryIOS
    'data': alertNotification
    'movieId': movieId
  },
    success: ->
      console.log 'Push was successful ios'
      return
    error: (error) ->
      console.log 'Handle error ios'
      return

Parse.Cloud.define 'sendNotification', (request, response) ->
  alertNotification = request.params.alert
  movieId = request.params.movieId
  data = 
    'alert': alertNotification
    'movieId': movieId
  installationQuery = new (Parse.Query)(Parse.Installation)
  user = new (Parse.User)
  Parse.Cloud.useMasterKey()
  obj = {}
  promiseArr = []
  saveNotification(data).then ((notificationResult) ->
    installationQuery.find
      success: (installations) ->
        _.each installations, (installation) ->
          installationId = installation.get('installationId')
          promiseArr.push saveNotificationStatus(installation, notificationResult)
        Parse.Promise.when(promiseArr).then ((res) ->
          response.success notificationResult.id
        ), (error) ->
          response.error error
      error: (error) ->
        response.error error
  ), (error) ->
    response.error error

saveNotification = (notificationData) ->
  promise = new (Parse.Promise)
  notificationObj = new (Parse.Object)('Notifications')
  notificationObj.set 'notification', notificationData
  notificationObj.save().then ((obj) ->
    promise.resolve obj
  ), (error) ->
    promise.reject error
  promise

saveNotificationStatus = (installation, notification) ->
  promise = new (Parse.Promise)
  notificationStausObj = new (Parse.Object)('NotificationStatus')
  notificationStausObj.set 'installationId', installation
  notificationStausObj.set 'notificationId', notification
  notificationStausObj.set 'status', 'unread'
  notificationStausObj.save().then ((obj) ->
    promise.resolve obj
  ), (error) ->
    promise.reject error
  promise

Parse.Cloud.define 'updateNotificationStatusAsRead', (request, response) ->
  `var user`
  installation_id = request.params.installation_id
  notification_id = request.params.notification_id
  user = new (Parse.User)
  Parse.Cloud.useMasterKey()
  installationQuery = new (Parse.Query)(Parse.Installation)
  user = new (Parse.User)
  Parse.Cloud.useMasterKey()
  notificationsQuery = new (Parse.Query)('Notifications')
  notificationsQuery.get(notification_id).then ((notificationObj) ->
    installationQuery.get(installation_id).then ((installationObj) ->
      updateStatus(notificationObj, installationObj).then ((result) ->
        response.success installationObj
      ), (error) ->
        response.error error
    ), (error) ->
      response.error error
  ), (error) ->
    response.error error

updateStatus = (notification, installation) ->
  promise = new (Parse.Promise)
  statusQuery = new (Parse.Query)('NotificationStatus')
  statusQuery.include 'notificationId'
  statusQuery.include 'installationId'
  statusQuery.equalTo 'notificationId', notification
  statusQuery.equalTo 'installationId', installation
  statusQuery.first().then ((statusObj) ->
    statusObj.set 'status', 'read'
    statusObj.save().then ((obj) ->
      promise.resolve obj
    ), (error) ->
      promise.reject error
  ), (error) ->
    promise.reject error
  promise

Parse.Cloud.define 'listAllNotificationsForUser', (request, response) ->
  installation_id = request.params.installation_id
  installationQuery = new (Parse.Query)(Parse.Installation)
  user = new (Parse.User)
  Parse.Cloud.useMasterKey()
  installationQuery.get(installation_id).then ((installationObj) ->
    listQuery = new (Parse.Query)('NotificationStatus')
    listQuery.include 'notificationId'
    listQuery.include 'installationId'
    listQuery.equalTo 'installationId', installationObj
    listQuery.find
      success: (result) ->
        response.success result
      error: (error) ->
        response.error error
  ), (error) ->
    response.error error