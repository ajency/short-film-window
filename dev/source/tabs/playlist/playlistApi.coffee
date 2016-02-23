shortFilmWindow

.factory 'PlaylistAPI',['$q', 'App', '$http' ,($q, App, $http)->

    GenreAPI = {}

    GenreAPI.GetSingleplaylist = (playlistId)->
        defer = $q.defer()
        $http.get URL+"/wp-json/get_playlist_videos/?playlist_id=#{playlistId}"
        .then (data)->
            j = angular.fromJson data.data 
            defer.resolve j
        , (error)->
            defer.reject error

        defer.promise

    GenreAPI

]

