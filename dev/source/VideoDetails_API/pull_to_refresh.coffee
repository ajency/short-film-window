shortFilmWindow

.factory 'PulltorefreshAPI',['$q', 'App', '$http','DetailsAPI' ,($q, App, $http,DetailsAPI)->

	PulltorefreshAPI = {}


	PulltorefreshAPI.pullrequest = ()->

		defer = $q.defer()

		$http.get GLOBAL_URL + '/wp-json/get_defaults'
		.then (data)->
			console.log "Inside get data pull to refresh",data
			defer.resolve data.data
		, (error)->
	    	defer.reject error

		defer.promise

	PulltorefreshAPI.saveData = (opts={})->
		console.log "Inside save data pull to refresh",opts
		DetailsAPI.array = opts.premiere
		DetailsAPI.array_addition = opts.new_addition
		DetailsAPI.array_noteworthy = opts.noteworthy
		DetailsAPI.array_awplalist = opts.awesome_playlist
		DetailsAPI.genre_array = opts.genre
		DetailsAPI.playlist_array = opts.playlist
		DetailsAPI.array_mostpopular = opts.mstPopular

	PulltorefreshAPI





]