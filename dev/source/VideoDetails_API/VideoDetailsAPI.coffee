shortFilmWindow

.factory 'DetailsAPI',['$q', 'App', '$http','$ImageCacheFactory' ,($q, App, $http,$ImageCacheFactory)->

	DetailsAPI = {}

	DetailsAPI.videoId = ''
	DetailsAPI.array_addition = []
	DetailsAPI.array_noteworthy = []
	DetailsAPI.array_awplaylist = []
	DetailsAPI.genre_array = []
	DetailsAPI.playlist_array = []
	DetailsAPI.Global_array = []
	DetailsAPI.GlobalChild_array = []
	DetailsAPI.Filter = []
	DetailsAPI.Sort = []
	DetailsAPI.array = []
	DetailsAPI.singleVideoarray = []
	DetailsAPI.imagArray = []
	DetailsAPI.initialize = 0



	DetailsAPI.GetVideoDetails = ()->
		defer = $q.defer()


		$http.get URL+'/wp-json/get_defaults'
		.then (data)->
			console.log data
			defer.resolve data.data
		, (error)->
	    	defer.reject error

		defer.promise

	DetailsAPI.GetSingleVideo = (VideoId)->

		defer = $q.defer()

		$http.get URL+"/wp-json/get_video?id=#{VideoId}"
		.then (data)->
			defer.resolve data.data
		, (error)->
			defer.reject error

		defer.promise

	DetailsAPI.searchResult = (txt)->
		defer = $q.defer()

		$http.get URL+"/wp-json/search?str=#{txt}"
		.then (data)->
			defer.resolve data.data
		, (error)->
			defer.reject error

		defer.promise

	DetailsAPI.setData = (opts={})->
			DetailsAPI.array = opts.premiere
			DetailsAPI.array_addition = opts.new_addition
			DetailsAPI.array_noteworthy = opts.noteworthy
			DetailsAPI.array_awplalist = opts.awesome_playlist
			DetailsAPI.genre_array = opts.genre
			DetailsAPI.playlist_array = opts.playlist
			DetailsAPI.initialize = 1

			# Pre-loading all images ....

			# i = 0

			# while i < DetailsAPI.genre_array.length
			# 	DetailsAPI.imagArray = DetailsAPI.genre_array[i].genre_image_url
			# 	# $ImageCacheFactory.Cache [
			# 	# 	DetailsAPI.genre_array[i].genre_image_url,
			# 	# ]
			# 	# .then ()=>
			# 	# 	console.log("Images done loading!");
			# 	# ,(failed)=>
			# 	# 	console.log("An image filed: "+failed);
			# i++



	DetailsAPI

]