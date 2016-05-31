angular.module 'SFWApp.VideoDetailsAPI',[]

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



	DetailsAPI.GetVideoDetails = ()->
		defer = $q.defer()


		$http.get GLOBAL_URL+'/wp-json/get_defaults'
		.then (data)->
			console.log 'succ'
			console.log data
			defer.resolve data.data
		, (error)->
			console.log 'eroor'
			defer.reject error

		defer.promise

	DetailsAPI.GetSingleVideo = (VideoId)->
		console.log VideoId

		defer = $q.defer()

		$http.get GLOBAL_URL+"/wp-json/get_video?id=#{VideoId}"
		.then (data)->
			console.log 'single video data succ'
			console.log data
			defer.resolve data.data
		, (error)->
			console.log 'eroor'
			defer.reject error

		defer.promise

	DetailsAPI.searchResult = (txt)->
		console.log txt

		defer = $q.defer()

		$http.get GLOBAL_URL+"/wp-json/search?str=#{txt}"
		.then (data)->
			console.log 'search video data succ'
			console.log data
			defer.resolve data.data
		, (error)->
			console.log 'eroor'
			defer.reject error

		defer.promise

	DetailsAPI.setData = (opts={})->
			console.log opts
			DetailsAPI.array = opts.premiere
			DetailsAPI.array_addition = opts.new_addition
			DetailsAPI.array_noteworthy = opts.noteworthy
			DetailsAPI.array_awplalist = opts.awesome_playlist
			DetailsAPI.genre_array = opts.genre
			DetailsAPI.playlist_array = opts.playlist

			# Pre-loading all images ....

			# i = 0

			# while i < DetailsAPI.genre_array.length
			# 	DetailsAPI.imagArray = DetailsAPI.genre_array[i].genre_image_GLOBAL_URL
			# 	# $ImageCacheFactory.Cache [
			# 	# 	DetailsAPI.genre_array[i].genre_image_GLOBAL_URL,
			# 	# ]
			# 	# .then ()=>
			# 	# 	console.log("Images done loading!");
			# 	# ,(failed)=>
			# 	# 	console.log("An image filed: "+failed);
			# i++



	DetailsAPI

]