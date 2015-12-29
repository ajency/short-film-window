angular.module 'SFWApp.VideoDetailsAPI',[]

.factory 'DetailsAPI',['$q', 'App', '$http' ,($q, App, $http)->

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



	DetailsAPI.GetVideoDetails = ()->
		defer = $q.defer()

		$http.get 'http://shortfilm.staging.wpengine.com/wp-json/get_defaults'
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

		$http.get "http://shortfilm.staging.wpengine.com/wp-json/get_video?id=#{VideoId}"
		.then (data)->
			console.log 'single video data succ'
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

			console.log DetailsAPI.playlist_array
			console.log DetailsAPI.genre_array
			console.log DetailsAPI.array
			console.log DetailsAPI.array_addition
			console.log DetailsAPI.array_noteworthy
			console.log DetailsAPI.array_awplalist




	DetailsAPI

]