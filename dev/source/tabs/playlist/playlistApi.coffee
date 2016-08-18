shortFilmWindow

.factory 'PlaylistAPI',['$q', 'App', '$http' ,($q, App, $http)->

    GenreAPI = {}

    GenreAPI.GetSingleplaylist = (playlistId)->
        defer = $q.defer()
        $http.get GLOBAL_URL+"/wp-json/get_playlist_videos/?playlist_id=#{playlistId}"
        .then (data)->
            defer.resolve angular.fromJson(data.data)
        , (error)->
            defer.reject error

        defer.promise

    GenreAPI

]

