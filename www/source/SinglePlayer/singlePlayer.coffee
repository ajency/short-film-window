angular.module 'SFWApp.singlePlayer', []

.controller 'playerCtrl', ['$scope','$sce','DetailsAPI','$ionicHistory'
	,($scope,$sce,DetailsAPI,$ionicHistory)->

		console.log  DetailsAPI.singleVideoarray

		$scope.view =

			back:->
				$ionicHistory.goBack();
				# count = -1
				# App.goBack count

			vType : DetailsAPI.singleVideoarray.type
			vimomeo : null
			init:->

				if(@vType == 'vimeo')
					modifiedUrl = DetailsAPI.singleVideoarray.embedurl
					@vimomeo = true
					$scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);

					# $scope.player1 = modifiedUrl;

					console.log $scope.player1
				else
					@vimomeo = false
					player = new YT.Player('player2', {
						height: '100%',
						width: '100%',
						videoId:DetailsAPI.singleVideoarray.videourl ,
						playerVars: { 'autoplay': 1, 'rel': 0, 'wmode':'transparent' }
						events: {
							'onReady': onPlayerReady,
							'onStateChange': onPlayerStateChange
						}
					});

		onPlayerReady = (event) ->
		    console.log event
		    event.target.playVideo()

		onPlayerStateChange = (event) ->
		  if event.data == YT.PlayerState.PLAYING and !done
		    setTimeout stopVideo, 6000
		    done = true

		stopVideo = ->
		  player.stopVideo()


]
