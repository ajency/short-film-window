angular.module 'SFWApp.VideoDetailsAPI',[]

.factory 'DetailsAPI',['$q', 'App', '$http' ,($q, App, $http)->

	GetVideoDetails:()->

		defer = $q.defer()

		$http.post AUTH_URL+'/wp-json/get_defaults'
		.then (data)->
			console.log 'succ'
			console.log data
			defer.resolve data.data
		, (error)->
			console.log 'eroor'
			defer.reject error

		defer.promise	

]