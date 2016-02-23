shortFilmWindow

.factory 'GenreAPI',['$q', 'App', '$http' ,($q, App, $http)->

	GenreAPI = {}

	GenreAPI.GetSingleGenre = (GenreId)->
		defer = $q.defer()

		$http.get  URL+"/wp-json/get_genre_videos?genre_id=#{GenreId}"
		.then (data)->
			defer.resolve data.data
		, (error)->
			defer.reject error

		defer.promise
	GenreAPI.ApplyFilter = (param)->
		defer = $q.defer()

		$http.get URL+"/wp-json/get_genre_videos?genre_id=#{param[0]}&sort_key=#{param[1]}&language_id=#{param[2]}"
		.then (data)->
			defer.resolve data.data
		, (error)->
			defer.reject error

		defer.promise


	GenreAPI

]

