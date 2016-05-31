shortFilmWindow
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
          $rootScope.vData = data
        .then (data) ->
          allImageUrls = []
          _.each data.defaults.content, (defaultValue,key)->
            switch key
              when 'genre'
                _.each defaultValue, (value)->
                  allImageUrls.push value.genre_image_url

              when 'playlists'  
                _.each defaultValue, (value)->
                  allImageUrls.push value.playlist_image_url

              when 'popular'  
                 _.each defaultValue, (popularValue,popularKey)->
                  switch popularKey
                    when 'awesome_playlist'
                      _.each popularValue.awesome_playlist, (value)->
                        allImageUrls.push value.playlist_image_url 
                    when 'new_additions'
                      _.each popularValue.new_additions, (value)->
                        allImageUrls.push value.image
                    when 'weekly_premiere'
                      _.each popularValue.weekly_premiere, (value)->
                        allImageUrls.push value.image           
             
          $ImageCacheFactory.Cache([ allImageUrls ])
          DetailsAPI.setData
            premiere: $rootScope.vData.defaults.content.popular.weekly_premiere
            new_addition: $rootScope.vData.defaults.content.popular.new_additions
            noteworthy: $rootScope.vData.defaults.content.popular.noteworthy
            awesome_playlist: $rootScope.vData.defaults.content.popular.awesome_playlist
            genre: $rootScope.vData.defaults.content.genre
            playlist: $rootScope.vData.defaults.content.playlists  

          deferred.resolve $rootScope.vData
       else
         deferred.reject()
      deferred.promise
 }
]
