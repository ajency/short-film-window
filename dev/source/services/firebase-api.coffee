shortFilmWindow
.service 'FirebaseApi', ['$ionicPlatform', '$q', 'FirebaseKey','App', 'Storage', 'PushConfig',
      ($ionicPlatform, $q, FirebaseKey, App, Storage, PushConfig)->
            DEVICETOKEN = null
            # Storage.vendorDetails 'get'
            # .then (details)->
            #       User = details
            firebaseCloudApi = {}
            firebaseCloudApi.setDeviceToke = (token=null)->
                  if token
                        DEVICETOKEN = token
                  # else
                        # Storage.vendorDetails 'get'
                        # .then (details)->
                        #       User = details
            firebaseCloudApi.getDeviceToken = ()->
                  defer = $q.defer()
                  if ionic.Platform.isWebView()
                        Storage.deviceToken 'get'
                        .then (deviceToken) ->
                              if deviceToken
                                    DEVICETOKEN = deviceToken
                                    defer.resolve deviceToken
                              else
                                    push = PushNotification.init PushConfig
                                    push.on 'registration', (data) ->
                                          Storage.deviceToken 'set', data.registrationId
                                          DEVICETOKEN = data.registrationId
                                          defer.resolve data.registrationId
                        

                  else
                        DEVICETOKEN = 'DUMMY_UUID'
                        Storage.deviceToken 'set', 'DUMMY_UUID'
                        defer.resolve 'DUMMY_UUID'
                  defer.promise
            firebaseCloudApi.firebaseInit = ()->
                  console.log ' INITIALISING FIREBASE'
                  firebase.initializeApp FirebaseKey

            # firebaseCloudApi.getUser = ()->
            #       defer = $q.defer()
            #       firebase.database().ref('user/DUMMY_UUID').once('value').then (data)->
            #             defer.resolve data.val()
            #       , (error)->
            #             defer.reject error
            #       defer.promise
            firebaseCloudApi.saveNotification = () ->
                  console.log DEVICETOKEN
                  defer = $q.defer()
                  firebase.database().ref('notification/'+ DEVICETOKEN).push
                        "movieId": 930
                        "alert": "TEST Notification"
                        "createdAt" : "2016-12-22T12:56:59.706Z"
                        "updatedAt" : "2016-12-22T12:57:14.455Z"
                        "movieDetails" :
                              "found":true
                              "movie_id":930
                              "no_of_views":"193"
                              "no_of_likes":"189"
                              "title":"test notif"
                              "type":"youtube"
                              "tagline":""
                              "videourl":"https:\/\/balsamiq.com\/"
                              "embedurl":"https:\/\/www.youtube.com\/embed\/?autoplay=1"
                              "director":"ShortFilmWindow"
                              "image":"http:\/\/shortfilm.staging.wpengine.com\/wp-content\/themes\/short-film\/assets\/img\/placeholder.jpg"
                              "duration":"5","region":""
                              "language":""
                              "genres":["Uncategorized"]
                              "content":""
                              "slug":"test-notif-2"
    
    
                  .then (result) ->
                        defer.resolve result
                  , (error) ->
                        defer.reject error
                  defer.promise
            firebaseCloudApi.fetchNotifications = () ->
                  defer = $q.defer()
                  firebase.database().ref('notification/' + DEVICETOKEN).once('value').then (data)->
                        if data.val()
                              temp = data.val()
                              keys = Object.keys(temp)
                              notifications = []
                              for i in [0...keys.length]
                                    temp[keys[i]].id = keys[i]
                                    t = temp[keys[i]]
                                    obj =
                                          "fromnow": moment(t.createdAt).fromNow()
                                          "createdAt": t.createdAt
                                          "notificationId": t.id
                                          "alert": t.alert
                                          "movieDetails": t.movieDetails
                                          "status": t.status
                                    if _.isString(obj.movieDetails.title) and obj.movieDetails.title.indexOf('+') != -1
                                          obj.movieDetails.title = obj.movieDetails.title.replace(/\+/g, ' ')
                                    if _.isString(obj.movieDetails.director) and obj.movieDetails.director.indexOf('+') != -1
                                          obj.movieDetails.director = obj.movieDetails.director.replace(/\+/g, ' ')
                                    if _.isString(obj.movieDetails.tagline) and obj.movieDetails.tagline.indexOf('+') != -1
                                          obj.movieDetails.tagline = obj.movieDetails.tagline.replace(/\+/g, ' ')
                                    notifications.push obj
                              defer.resolve notifications
                        else
                              defer.resolve []
                  , (error)->
                        defer.reject error
                  defer.promise
                  
            firebaseCloudApi.getUnreadNotificationsCount= () ->
                  count = 0
                  defer = $q.defer()
                  firebase.database().ref('notification/' + DEVICETOKEN).once('value').then (data)->
                        if data.val()
                              temp = data.val()
                              keys = Object.keys(temp)
                              notifications = []
                              for i in [0...keys.length]
                                    temp[keys[i]].id = keys[i]
                                    t = temp[keys[i]]
                                    console.log t
                                    if t.status == 'unread'
                                          count++
                              defer.resolve count
                        else
                              defer.resolve count
                  , (error)->
                        defer.reject error
                  defer.promise
            firebaseCloudApi.fetchAllDevices = ()->
                  defer = $q.defer()
                  firebase.database().ref('installation').once('value').then (data)->
                        defer.resolve data.val()
                  , (error)->
                        defer.reject error
                  defer.promise
            firebaseCloudApi.deleteNotifications = ()->
                  deferred = $q.defer()
                  # installation_id = 'SlTCCS8Eom'
                  firebase.database().ref('notification/' + DEVICETOKEN).remove()
                        .then (result)->
                              console.log result,'RESS'
                              defer.resolve result
                        , (error)->
                              defer.reject error
                        defer.promise
                  deferred.promise
            firebaseCloudApi.updateNotificationStatus = (notificationId)->
                  console.log DEVICETOKEN, notificationId
                  if notificationId
                        defer = $q.defer()
                        firebase.database().ref('notification/' + DEVICETOKEN + '/' + notificationId).update
                              status : 'read'
                        .then (result)->
                              console.log result,'RESS'
                              defer.resolve result
                        , (error)->
                              defer.reject error
                        defer.promise
                  else
                        defer.reject 'Notification ID is null'
                  
            firebaseCloudApi.registerDevice = (deviceToken)->
                  firebaseCloudApi.getDeviceToken()
                  .then (token)->
                        console.log token,'DEVICETOKEN -- registerDevice'
                        firebaseCloudApi.fetchAllDevices().then (result)->
                              if result
                                    keys = Object.keys(result)
                                    flag = false
                                    for i in [0...keys.length]
                                          if result[keys[i]].deviceToken == token
                                                flag= true
                                    if flag then console.log 'deviceAlreadyRegistered' else console.log 'newDevice'
                                    if !flag
                                          firebase.database().ref('installation').push
                                                device: ionic.Platform.platform()
                                                deviceToken: token
                              else
                                    if result == null
                                          firebase.database().ref('installation').push
                                                device: ionic.Platform.platform()
                                                deviceToken: token
            # firebaseCloudApi.logout = ()->
            #       firebaseCloudApi.getDeviceToken().then (deviceToken)->
            #             console.log 'FIREBASE LOGOUT',User,deviceToken
            #             firebaseCloudApi.fetchAllDevices().then (result)->
            #                   if result
            #                         keys = Object.keys(result)
            #                         flag = false
            #                         for i in [0...keys.length]
            #                               if result[keys[i]].deviceToken == deviceToken
            #                                     console.log keys[i]
            #                                     firebase.database().ref('installation/' + User.user_id + '/' + keys[i]).remove().then (result)->
            #                                           console.log result
            #                                     , (error) ->
            #                                           console.log error
            #                   else
            #                         console.log 'NO DEVICE FOUND'
            #             # firebase.database().ref('installation/' + User.user_id + '/' + deviceToken).remove().then (result)->
            #             , (error)->
            #                   console.log error, 'error'
            
            firebaseCloudApi
]