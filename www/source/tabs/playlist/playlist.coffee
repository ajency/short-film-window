angular.module 'SFWApp.tabs'
.controller 'playlistCtrl', ['$scope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading'

	,($scope,App,PulltorefreshAPI,DetailsAPI,$ionicLoading)->

		$scope.doRefresh = ()->
			# $ionicLoading.show
			#   content: 'Loading'
			#   animation: 'fade-in'
			#   showBackdrop: true
			#   maxWidth: 600
			#   showDelay: 0

			PulltorefreshAPI.pullrequest()
			.then (data)=>
				console.log data.defaults.content.popular.weekly_premiere.image
				PulltorefreshAPI.saveData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})
				$scope.playlist = DetailsAPI.playlist_array
				$scope.$broadcast('scroll.refreshComplete');
				$ionicLoading.hide();

			, (error)=>
				$scope.$broadcast('scroll.refreshComplete');
				console.log 'Error Loading data'
				$ionicLoading.hide();



		$scope.test = ->
		    $scope.playlist = DetailsAPI.playlist_array

		$scope.singleplaylist = (playlistId)->
			console.log playlistId
			DetailsAPI.videoId = playlistId
			console.log DetailsAPI.videoId
			App.navigate "singlePlaylist"

]
