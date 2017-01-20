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
                                    push = PushNotification.init PushSettings
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
                  console.log User,' USER'
                  defer = $q.defer()
                  firebase.database().ref('notification/'+ DEVICETOKEN).push
                        "createdAt": "2016-11-25T05:35:10.017Z",
                        "data": {
                             
                              "typeOfEvent": "Wedding",
                              "updatedOn": "2016-11-25 11:05",
                              "venueId": 445,
                              "venueName": "Aura Grande",
                              "venueSlug": "aura-grande-andheri-east"
                        },
                        "hasSaved": false,
                        "hasSeen": false,
                        "message": "Recce meeting scheduled on Saturday, December 24 2016, 20:30 PM for Velantan dsilva is Confirmed",
                        "objectId": "03ikAu36Hr",
                        "processed": true,
                        "processedDate": {
                              "__type": "Date",
                              "iso": "2016-11-25T05:36:09.990Z"
                        },
                        "recipientUser": "afreenquadri@yahoo.com",
                        "sentStatus": false,
                        "title": "Recce meeting is Confirmed",
                        "type": "edit_scheduled_event_status",
                        "updatedAt": "2016-11-25T05:36:10.022Z"
    
    
                  .then (result) ->
                        defer.resolve result
                  , (error) ->
                        defer.reject error
                  defer.promise
            firebaseCloudApi.fetchNotifications = () ->
                  defer = $q.defer()
                  firebase.database().ref('notification/' + DEVICETOKEN).once('value').then (data)->
                        if data.val()
                              notificationService.notificationList = []
                              temp = data.val()
                              keys = Object.keys(temp)
                              notifications = []
                              for i in [0...keys.length]
                                    temp[keys[i]].id = keys[i]
                                    notifications.push temp[keys[i]]
                              notificationService.addNotificationtoList notifications
                              notificationList = _.filter notifications, (value)-> value if _.isObject(value)
                              defer.resolve notificationList
                        else
                              defer.resolve []
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
            firebaseCloudApi.updateNotificationStatus = (notificationId)->
                  console.log DEVICETOKEN, notificationId
                  if notificationId
                        defer = $q.defer()
                        firebase.database().ref('notification/' + DEVICETOKEN +'/'+ notificationId).update
                              hasSeen : true
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