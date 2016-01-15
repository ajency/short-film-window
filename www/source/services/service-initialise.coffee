angular.module('SFWApp.services', [])
.service 'InitialiseService', [
  '$q'
  'DetailsAPI'
  'App'
  '$rootScope'
  '$ImageCacheFactory'
  ($q, DetailsAPI, App, $rootScope, $ImageCacheFactory) ->
    { initialize: ->
      deferred = undefined
      deferred = undefined
      deferred = $q.defer()
      if App.isOnline()
        DetailsAPI.GetVideoDetails().then (data) ->
          console.log 'first'
          $rootScope.vData = data
          $ImageCacheFactory.Cache [ data.defaults.content.popular.weekly_premiere.image ]
          return 1
        .then (data) ->
          console.log 'second'
          DetailsAPI.setData
            premiere: $rootScope.vData.defaults.content.popular.weekly_premiere
            new_addition: $rootScope.vData.defaults.content.popular.new_additions
            noteworthy: $rootScope.vData.defaults.content.popular.noteworthy
            awesome_playlist: $rootScope.vData.defaults.content.popular.awesome_playlist
            genre: $rootScope.vData.defaults.content.genre
            playlist: $rootScope.vData.defaults.content.playlists
         .then (data) ->
           deferred.resolve($rootScope.vData)
           return
       else
         deferred.reject()
      deferred.promise
 }
]
