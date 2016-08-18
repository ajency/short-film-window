(function() {
  var _, saveNotification, saveNotificationStatus, updateStatus;

  _ = require('underscore.js');

  Parse.Cloud.afterSave('Notifications', function(request) {
    var alertNotification, movieId, queryAndroid, queryIOS;
    alertNotification = request.object.get('notification');
    movieId = request.object.get('movieId');
    queryAndroid = new Parse.Query(Parse.Installation);
    queryAndroid.equalTo('deviceType', 'android');
    Parse.Push.send({
      'where': queryAndroid,
      'data': alertNotification,
      'movieId': movieId
    }, {
      success: function() {
        console.log('Push was successful android');
      },
      error: function(error) {
        console.log('Handle error android');
      }
    });
    queryIOS = new Parse.Query(Parse.Installation);
    queryIOS.equalTo('deviceType', 'ios');
    return Parse.Push.send({
      'where': queryIOS,
      'data': alertNotification,
      'movieId': movieId
    }, {
      success: function() {
        console.log('Push was successful ios');
      },
      error: function(error) {
        console.log('Handle error ios');
      }
    });
  });

  Parse.Cloud.define('sendNotification', function(request, response) {
    var alertNotification, data, installationQuery, movieId, obj, promiseArr, user;
    alertNotification = request.params.alert;
    movieId = request.params.movieId;
    data = {
      'alert': alertNotification,
      'movieId': movieId
    };
    installationQuery = new Parse.Query(Parse.Installation);
    user = new Parse.User;
    Parse.Cloud.useMasterKey();
    obj = {};
    promiseArr = [];
    return saveNotification(data).then((function(notificationResult) {
      return installationQuery.find({
        success: function(installations) {
          _.each(installations, function(installation) {
            var installationId;
            installationId = installation.get('installationId');
            return promiseArr.push(saveNotificationStatus(installation, notificationResult));
          });
          return Parse.Promise.when(promiseArr).then((function(res) {
            return response.success(notificationResult.id);
          }), function(error) {
            return response.error(error);
          });
        },
        error: function(error) {
          return response.error(error);
        }
      });
    }), function(error) {
      return response.error(error);
    });
  });

  saveNotification = function(notificationData) {
    var notificationObj, promise;
    promise = new Parse.Promise;
    notificationObj = new Parse.Object('Notifications');
    notificationObj.set('notification', notificationData);
    notificationObj.save().then((function(obj) {
      return promise.resolve(obj);
    }), function(error) {
      return promise.reject(error);
    });
    return promise;
  };

  saveNotificationStatus = function(installation, notification) {
    var notificationStausObj, promise;
    promise = new Parse.Promise;
    notificationStausObj = new Parse.Object('NotificationStatus');
    notificationStausObj.set('installationId', installation);
    notificationStausObj.set('notificationId', notification);
    notificationStausObj.set('status', 'unread');
    notificationStausObj.save().then((function(obj) {
      return promise.resolve(obj);
    }), function(error) {
      return promise.reject(error);
    });
    return promise;
  };

  Parse.Cloud.define('updateNotificationStatusAsRead', function(request, response) {
    var user;
    var installationQuery, installation_id, notification_id, notificationsQuery, user;
    installation_id = request.params.installation_id;
    notification_id = request.params.notification_id;
    user = new Parse.User;
    Parse.Cloud.useMasterKey();
    installationQuery = new Parse.Query(Parse.Installation);
    user = new Parse.User;
    Parse.Cloud.useMasterKey();
    notificationsQuery = new Parse.Query('Notifications');
    return notificationsQuery.get(notification_id).then((function(notificationObj) {
      return installationQuery.get(installation_id).then((function(installationObj) {
        return updateStatus(notificationObj, installationObj).then((function(result) {
          return response.success(installationObj);
        }), function(error) {
          return response.error(error);
        });
      }), function(error) {
        return response.error(error);
      });
    }), function(error) {
      return response.error(error);
    });
  });

  updateStatus = function(notification, installation) {
    var promise, statusQuery;
    promise = new Parse.Promise;
    statusQuery = new Parse.Query('NotificationStatus');
    statusQuery.include('notificationId');
    statusQuery.include('installationId');
    statusQuery.equalTo('notificationId', notification);
    statusQuery.equalTo('installationId', installation);
    statusQuery.first().then((function(statusObj) {
      statusObj.set('status', 'read');
      return statusObj.save().then((function(obj) {
        return promise.resolve(obj);
      }), function(error) {
        return promise.reject(error);
      });
    }), function(error) {
      return promise.reject(error);
    });
    return promise;
  };

  Parse.Cloud.define('listAllNotificationsForUser', function(request, response) {
    var installationQuery, installation_id, user;
    installation_id = request.params.installation_id;
    installationQuery = new Parse.Query(Parse.Installation);
    user = new Parse.User;
    Parse.Cloud.useMasterKey();
    return installationQuery.get(installation_id).then((function(installationObj) {
      var listQuery;
      listQuery = new Parse.Query('NotificationStatus');
      listQuery.include('notificationId');
      listQuery.include('installationId');
      listQuery.equalTo('installationId', installationObj);
      return listQuery.find({
        success: function(result) {
          return response.success(result);
        },
        error: function(error) {
          return response.error(error);
        }
      });
    }), function(error) {
      return response.error(error);
    });
  });

}).call(this);
