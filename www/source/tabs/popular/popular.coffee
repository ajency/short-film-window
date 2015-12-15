angular.module 'SFWApp.tabs',[]
.controller 'popularCtrl', ['$scope','App','PulltorefreshAPI','DetailsAPI'
	,($scope, App, PulltorefreshAPI, DetailsAPI)->
		$scope.doRefresh = ()->
			console.log PulltorefreshAPI
			

			PulltorefreshAPI.pullrequest()
			.then (data)=>
				console.log data.defaults.content.popular.weekly_premiere.image
				PulltorefreshAPI.saveData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})
				
				$scope.premeiere= DetailsAPI.array
				$scope.addition= DetailsAPI.array_addition
				$scope.noteworthy= DetailsAPI.array_noteworthy
				$scope.awplalist= DetailsAPI.array_awplalist
				$scope.videoId = DetailsAPI.array.videoId
				$scope.$broadcast('scroll.refreshComplete');
				

			, (error)=>
				$scope.$broadcast('scroll.refreshComplete');
				console.log 'Error Loading data'

		$scope.singleplay = (videoid)->

			console.log videoid
			DetailsAPI.videoId = videoid
			console.log DetailsAPI.videoId
			console.log "enterd single play ."
			App.navigate 'init', {}, {animate: false, back: false}	

		$scope.test = ->
		    $scope.premeiere= DetailsAPI.array
		    $scope.addition= DetailsAPI.array_addition
		    $scope.noteworthy= DetailsAPI.array_noteworthy
		    $scope.awplalist= DetailsAPI.array_awplalist
		    $scope.videoId = DetailsAPI.array.videoId
]