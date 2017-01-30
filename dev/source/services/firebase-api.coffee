shortFilmWindow
.service 'FirebaseApi', ['$ionicPlatform', '$q', 'FirebaseKey','App', 'Storage', 'PushConfig','$rootScope',
      ($ionicPlatform, $q, FirebaseKey, App, Storage, PushConfig, $rootScope)->
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
                        DEVICETOKEN = 'AAAANbS6cgA:APA91bEFfdZj4pMPeeRTx8Ldn5LPdsRKkyPFRdCamiOwvE8O7mJZMwblKS9Fv2_3roAoCwu6bkrU_xT2vdyO28dAJNfZQJtbwC0XvxwFit5yzNXheEyzsUD7jD-_Lhl6uT0KIi_Uu4LV'
                        Storage.deviceToken 'set', 'AAAANbS6cgA:APA91bEFfdZj4pMPeeRTx8Ldn5LPdsRKkyPFRdCamiOwvE8O7mJZMwblKS9Fv2_3roAoCwu6bkrU_xT2vdyO28dAJNfZQJtbwC0XvxwFit5yzNXheEyzsUD7jD-_Lhl6uT0KIi_Uu4LV'
                        defer.resolve 'AAAANbS6cgA:APA91bEFfdZj4pMPeeRTx8Ldn5LPdsRKkyPFRdCamiOwvE8O7mJZMwblKS9Fv2_3roAoCwu6bkrU_xT2vdyO28dAJNfZQJtbwC0XvxwFit5yzNXheEyzsUD7jD-_Lhl6uT0KIi_Uu4LV'
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
                  firebase.database().ref('notifications/'+ DEVICETOKEN).push
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
                  firebase.database().ref('notifications').once('value').then (data)->
                        count = 0
                        if data.val()
                              console.log data.val(), 'NOTIFICATIONS'
                              temp = data.val()
                              keys = Object.keys(temp)
                              notifications = []
                              for i in [0...keys.length]
                                    temp[keys[i]].id = keys[i]
                                    t = temp[keys[i]]
                                    movieDetails = JSON.parse(decodeURIComponent(t.movieDetails))
                                    obj =
                                          "fromnow": moment(moment.unix(t.created).toString()).fromNow()
                                          "createdAt": t.created
                                          "notificationId": t.id
                                          "alert": t.alert
                                          "movieDetails": movieDetails
                                          "status": t.status
                                    flag = false
                                    if t.deviceIDs
                                          t2 = t.deviceIDs[DEVICETOKEN]
                                          if t2
                                                if t2.hasCleared == false && t2.hasSeen == false
                                                      obj.status = 'unread'
                                                      count++
                                                else if t2.hasCleared == false && t2.hasSeen == true
                                                      obj.status = 'read'
                                          else
                                                count++
                                                obj.status = 'unread'
                                    else
                                          count++
                                          obj.status = 'unread'
                                    if _.isString(obj.movieDetails.title) and obj.movieDetails.title.indexOf('+') != -1
                                          obj.movieDetails.title = obj.movieDetails.title.replace(/\+/g, ' ')
                                    if _.isString(obj.movieDetails.director) and obj.movieDetails.director.indexOf('+') != -1
                                          obj.movieDetails.director = obj.movieDetails.director.replace(/\+/g, ' ')
                                    if _.isString(obj.movieDetails.tagline) and obj.movieDetails.tagline.indexOf('+') != -1
                                          obj.movieDetails.tagline = obj.movieDetails.tagline.replace(/\+/g, ' ')
                                    if t.deviceIDs
                                          if t.deviceIDs[DEVICETOKEN]
                                                if !t.deviceIDs[DEVICETOKEN].hasCleared
                                                      notifications.push obj
                                          else
                                                notifications.push obj
                                    else
                                          notifications.push obj
                              $rootScope.unreadNotificationCount = count
                              defer.resolve notifications
                        else
                              defer.resolve []
                  , (error)->
                        defer.reject error
                  defer.promise
                  
            firebaseCloudApi.getUnreadNotificationsCount= () ->
                  count = 0
                  defer = $q.defer()
                  firebase.database().ref('notifications').once('value').then (data)->
                        console.log 'GET UNREAD'
                        if data.val()
                              temp = data.val()
                              keys = Object.keys(temp)
                              for i in [0...keys.length]
                                    temp[keys[i]].id = keys[i]
                                    t = temp[keys[i]]
                                    console.log t, 'NOTF'
                                    if t.deviceIDs
                                          t2 = t.deviceIDs[DEVICETOKEN]
                                          if t2
                                                if t2.hasCleared == false && t2.hasSeen == false
                                                      count++
                                          else
                                                count++
                                    else
                                          count++
                              $rootScope.unreadNotificationCount = count
                              console.log 'TOTAL UNREAD', count
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
                  firebase.database().ref('notifications').once('value').then (data)->
                        console.log data.val(),'RESS'
                        result = data.val()
                        if result
                              keys = Object.keys(result)
                              console.log keys,'keys'
                              for i in [0...keys.length]
                                    firebase.database().ref('notifications/'+keys[i]+'/deviceIDs/'+DEVICETOKEN).update
                                          hasCleared: true
                                    .then (result)->
                                          
                                          deferred.resolve result
                                    , (error)->
                                          deferred.reject error
                  , (error)->
                        deferred.reject error
                  deferred.promise
            firebaseCloudApi.updateNotificationStatus = (notificationId)->
                  console.log DEVICETOKEN, notificationId
                  if notificationId
                        defer = $q.defer()
                        firebase.database().ref('notifications/'+notificationId+'/deviceIDs').child(DEVICETOKEN ).set
                              hasCleared:false
                              hasSeen: true
                        .then (result)->
                              
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