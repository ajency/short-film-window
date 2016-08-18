angular.module('SFWApp.services', []).service 'ParseService', [
  '$q'
  '$window'
  'ParseConfiguration'
  '$state'
  'DetailsAPI'
  ($q, $window, ParseConfiguration, $state,DetailsAPI) ->
    {
      initialize: ->
        deferred = $q.defer()
        $window.parsePlugin.initialize ParseConfiguration.applicationId, ParseConfiguration.clientKey, (->
          deferred.resolve 'success'
          return
        ), (e) ->
          deferred.reject e
          return
        deferred.promise
      getInstallationId: ->
        deferred = $q.defer()
        $window.parsePlugin.getInstallationId ((id) ->
          deferred.resolve id
          return
        ), (e) ->
          deferred.reject e
          return
        deferred.promise
      subscribe: (_channel) ->
        deferred = $q.defer()
        $window.parsePlugin.subscribe _channel, (->
          deferred.resolve true
          return
        ), (e) ->
          deferred.reject false
          return
        deferred.promise
      unsubscribe: (_channel) ->
        deferred = $q.defer()
        $window.parsePlugin.unsubscribe _channel, (->
          deferred.resolve true
          return
        ), (e) ->
          deferred.reject false
          return
        deferred.promise
      getSubscriptions: ->
        deferred = $q.defer()
        $window.parsePlugin.getSubscriptions ((_channelsArray) ->
          deferred.resolve _channelsArray
          return
        ), (e) ->
          deferred.reject false
          return
        deferred.promise
      registerCallback: (_pushCallback) ->
        deferred = $q.defer()
        $window.parsePlugin.registerCallback 'onNotification', (->
          console.log 'call back successfully registered'

        ), (error) ->
          deferred.reject error
          return
        deferred.promise

    }
]
