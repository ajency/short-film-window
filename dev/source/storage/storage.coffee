shortFilmWindow
.factory 'Storage', [
  '$rootScope','$q',
  ($rootScope,$q)->
    Storage = {}

    Storage.watchlistDetails = (action, params)->
        switch action
            when 'set'
                localforage.setItem 'watchlist_details', params, (err, value) ->
                   $rootScope.$broadcast 'watchListUpdate' , params
            when 'get'
                localforage.getItem 'watchlist_details'
            when 'remove'
                localforage.removeItem 'watchlist_details'
    Storage.deviceToken = (action, data={})->
        defer = $q.defer()
        switch action
            when 'set'
                localforage.setItem 'device_token', data
                .then -> defer.resolve()
            when 'get'
                localforage.getItem 'device_token'
                .then (data)-> defer.resolve data
            when 'remove'
                localforage.removeItem 'device_token'
                .then -> defer.resolve()
        defer.promise

    Storage
]