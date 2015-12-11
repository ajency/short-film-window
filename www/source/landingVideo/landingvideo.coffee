angular.module 'SFWApp.landing', []

.controller 'landingCtrl', ['$scope','App','DetailsAPI'

	,($scope,App,DetailsAPI)->

		DetailsAPI.GetVideoDetails()
		.then (data)=>
			console.log data.defaults.content.popular.weekly_premiere.image
			DetailsAPI.setData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist})
			App.navigate 'home', {}, {}

		, (error)=>
			console.log 'Error Loading data'
	
]
				