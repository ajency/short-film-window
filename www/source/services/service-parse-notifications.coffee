angular.module('SFWApp.services').service 'ParseNotificationService', [
  '$q'
  '$window'
  'ParseConfiguration'
  '$state'
  'DetailsAPI'
  'ParseService'
  ($q, $window, ParseConfiguration, $state,DetailsAPI,ParseService) ->
    {
      initialize: ->
        Parse.initialize ParseConfiguration.applicationId, ParseConfiguration.javascriptKey

      getInstallationId: ->
        ParseService.getInstallationId()

      getNotificationsWithStatus: ->
        deferred = $q.defer()
        Parse.Cloud.run 'fetchNotifications', {},
          success: (results) ->
            console.log results
            deferred.resolve results
            return
          error: (error) ->
            console.log 'Some error.'
            deferred.reject error
            return
        deferred.promise    
    }
]


# Parse.initialize(ParseConfiguration.applicationId, ParseConfiguration.javascriptKey)
# getInstallationId