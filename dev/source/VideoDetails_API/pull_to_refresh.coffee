shortFilmWindow

.factory 'PulltorefreshAPI',['$q', 'App', '$http','DetailsAPI' ,($q, App, $http,DetailsAPI)->

	PulltorefreshAPI = {}


	PulltorefreshAPI.pullrequest = ()->

		defer = $q.defer()

		$http.get URL + '/wp-json/get_defaults'
		.then (data)->
			defer.resolve data.data
		, (error)->
	    	defer.reject error

		defer.promise

	PulltorefreshAPI.saveData = (opts={})->
		DetailsAPI.array = opts.premiere
		DetailsAPI.array_addition = opts.new_addition
		DetailsAPI.array_noteworthy = opts.noteworthy
		DetailsAPI.array_awplalist = opts.awesome_playlist
		DetailsAPI.genre_array = opts.genre
		DetailsAPI.playlist_array = opts.playlist

	PulltorefreshAPI





]