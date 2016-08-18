shortFilmWindow
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
				PulltorefreshAPI.saveData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,mstPopular :data.defaults.content.popular.most_popular,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})
				$scope.playlist = DetailsAPI.playlist_array
				$scope.$broadcast('scroll.refreshComplete');
				$ionicLoading.hide();

			, (error)=>
				$scope.$broadcast('scroll.refreshComplete');
				$ionicLoading.hide();



		$scope.test = ->
		    $scope.playlist = DetailsAPI.playlist_array

		$scope.singleplaylist = (playlistId)->
			DetailsAPI.videoId = playlistId
			App.navigate "singlePlaylist"

]
