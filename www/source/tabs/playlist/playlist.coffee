angular.module 'SFWApp.tabs'
.controller 'playlistCtrl', ['$scope','App','PulltorefreshAPI','DetailsAPI'

	,($scope,App,PulltorefreshAPI,DetailsAPI)->

		$scope.doRefresh = ()->
			
			PulltorefreshAPI.pullrequest()
			.then (data)=>
				console.log data.defaults.content.popular.weekly_premiere.image
				PulltorefreshAPI.saveData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})
				$scope.playlist = DetailsAPI.playlist_array
				$scope.$broadcast('scroll.refreshComplete');
				
				
			, (error)=>
				$scope.$broadcast('scroll.refreshComplete');
				console.log 'Error Loading data'

		

		$scope.test = ->
		    $scope.playlist = DetailsAPI.playlist_array

]
