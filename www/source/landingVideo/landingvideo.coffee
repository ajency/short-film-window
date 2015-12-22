angular.module 'SFWApp.landing', []

.controller 'landingCtrl', ['$scope','App','DetailsAPI','$sce','$ionicLoading'

	,($scope,App,DetailsAPI,$sce,$ionicLoading)->
		$scope.view =

			skiplangingVideo:->
				land_vid_html5_api.pause();
				console.log "skip video"
				$ionicLoading.show
				  content: 'Loading'
				  animation: 'fade-in'
				  showBackdrop: true
				  maxWidth: 600
				  hideOnStateChange:true
				  showDelay: 0
			init:->
				console.log 'enterd init'

				DetailsAPI.GetVideoDetails()
				.then (data)=>
					console.log data.defaults.content.popular.weekly_premiere.image
					DetailsAPI.setData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})
					console.log 'enterd api'
					$ionicLoading.hide();
					App.navigate 'popular'

				, (error)=>
					$ionicLoading.hide();
					console.log 'Error Loading data'
	

	  
]
				