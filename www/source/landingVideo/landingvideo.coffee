angular.module 'SFWApp.landing', []

.controller 'landingCtrl', ['$scope','App','DetailsAPI','$sce','$ionicLoading','$ImageCacheFactory','$cordovaToast'

	,($scope,App,DetailsAPI,$sce,$ionicLoading,$ImageCacheFactory,$cordovaToast)->
		$scope.view =
			skip : true

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
				if App.isOnline()
					console.log "online"
					# error
					console.log "Toast error"
					DetailsAPI.GetVideoDetails()
					.then (data)=>
						console.log data.defaults.content.popular.weekly_premiere.image
						$ImageCacheFactory.Cache [
					        data.defaults.content.popular.weekly_premiere.image,

					     ]
					    .then ()=>
					        console.log("Images done loading!");
					    ,(failed)=>
					        console.log("An image failed: "+failed);


						DetailsAPI.setData({premiere :data.defaults.content.popular.weekly_premiere
											,new_addition :data.defaults.content.popular.new_additions
											,noteworthy :data.defaults.content.popular.noteworthy
											,awesome_playlist:data.defaults.content.popular.awesome_playlist
											,genre:data.defaults.content.genre
											,playlist:data.defaults.content.playlists})
						console.log 'enterd api'
						$ionicLoading.hide();
						App.navigate 'popular'

					, (error)=>
						$ionicLoading.hide();
						skip :false
						console.log 'Error Loading data'
				else
					console.log "offline"
					skip :false
					$cordovaToast.show('Please Connect to Internet', 'long', 'bottom').then ((success) ->
					# success
					console.log "toast displayed"
					), (error) ->
						console.log "error toast "




]
