angular.module 'SFWApp.tabs'

.factory 'PlaylistAPI',['$q', 'App', '$http' ,($q, App, $http)->

    GenreAPI = {}

    GenreAPI.GetSingleplaylist = (playlistId)->
        console.log playlistId
        defer = $q.defer()

        $http.get GLOBAL_URL+"/wp-json/get_playlist_videos/?playlist_id=#{playlistId}"
        .then (data)->
            console.log 'single genre data succ'
            console.log data
            defer.resolve data.data
        , (error)->
            console.log 'eroor'
            defer.reject error

        defer.promise



    GenreAPI

]

