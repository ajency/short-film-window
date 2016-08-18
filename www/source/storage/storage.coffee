angular.module 'SFWApp.storage', []
.factory 'Storage', [->

    Storage = {}

    Storage.watchlistDetails = (action, params)->
        switch action
            when 'set'
                localforage.setItem 'watchlist_details', params
            when 'get'
                localforage.getItem 'watchlist_details'
            when 'remove'
                localforage.removeItem 'watchlist_details'


    Storage
]