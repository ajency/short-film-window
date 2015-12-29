angular.module 'SFWApp.tabs'

.factory 'GenreAPI',['$q', 'App', '$http' ,($q, App, $http)->

	GenreAPI = {}

	GenreAPI.GetSingleGenre = (GenreId)->
		console.log GenreId
		defer = $q.defer()

		$http.get "http://shortfilm.staging.wpengine.com/wp-json/get_genre_videos?genre_id=#{GenreId}"
		.then (data)->
			console.log 'single genre data succ'
			console.log data
			defer.resolve data.data
		, (error)->
			console.log 'eroor'
			defer.reject error

		defer.promise
	GenreAPI.ApplyFilter = (param)->
		console.log param
		defer = $q.defer()
		$http.get "http://shortfilm.staging.wpengine.com/wp-json/get_genre_videos?genre_id=#{param[0]}&sort_key=#{param[1]}&&language_id=#{param[2]}"
		.then (data)->
			console.log 'single video data succ'
			console.log data
			defer.resolve data.data
		, (error)->
			console.log 'eroor'
			defer.reject error

		defer.promise


	GenreAPI

]

