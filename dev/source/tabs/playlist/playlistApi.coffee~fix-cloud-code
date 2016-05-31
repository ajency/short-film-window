shortFilmWindow

.factory 'PlaylistAPI',['$q', 'App', '$http' ,($q, App, $http)->

    GenreAPI = {}

    GenreAPI.GetSingleplaylist = (playlistId)->
        defer = $q.defer()
<<<<<<< HEAD:www/source/tabs/playlist/playlistApi.coffee

        $http.get GLOBAL_URL+"/wp-json/get_playlist_videos/?playlist_id=#{playlistId}"
        .then (data)->
            console.log 'single genre data succ'
            console.log data
            defer.resolve angular.fromJson(data.data)
=======
        $http.get URL+"/wp-json/get_playlist_videos/?playlist_id=#{playlistId}"
        .then (data)->
            j = angular.fromJson data.data 
            defer.resolve j
>>>>>>> SFW-develop:dev/source/tabs/playlist/playlistApi.coffee
        , (error)->
            defer.reject error

        defer.promise

    GenreAPI

]

