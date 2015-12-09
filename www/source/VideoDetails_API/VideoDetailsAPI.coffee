angular.module 'SFWApp.VideoDetailsAPI',[]

.factory 'DetailsAPI',['$q', 'App', '$http' ,($q, App, $http)->

	DetailsAPI = {}
	# DetailsAPI.VideoSection = ''
	# DetailsAPI.SectionImageURL = ''
	# DetailsAPI.SectionText = ''
	DetailsAPI.imageUrl = ''
	# DetailsAPI.imageid = ''
	# no_likes = ''
	# no_views = ''
	# videotitle = ''
	# videotype = ''
	# videoURL = ''
	# videotagline = ''
	# videoduration = ''
	# director =  ''
	# country = ''
	DetailsAPI.array = []

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
		defer = $q.defer()

		$http.post 'somthing',VideoId
		.then (data)->
			console.log 'succ'
			console.log data
			defer.resolve data.data
		, (error)->
			console.log 'eroor'
			defer.reject error

		defer.promise
	


	DetailsAPI.setData = (opts)->
			console.log opts
			DetailsAPI.array =opts
			console.log DetailsAPI.array.image

	DetailsAPI		

]