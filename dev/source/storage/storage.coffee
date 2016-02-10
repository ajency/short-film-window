shortFilmWindow
.factory 'Storage', [
  '$rootScope'
  ($rootScope)->
    Storage = {}

    Storage.watchlistDetails = (action, params)->
        switch action
            when 'set'                
                localforage.setItem 'watchlist_details', params, (err, value) ->
                   console.log 'update',value 
                   $rootScope.$broadcast 'watchListUpdate' , params 
            when 'get'
                localforage.getItem 'watchlist_details'
            when 'remove'
                localforage.removeItem 'watchlist_details'


    Storage
]