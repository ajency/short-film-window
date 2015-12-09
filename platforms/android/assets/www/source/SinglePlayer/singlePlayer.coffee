angular.module 'SFWApp.singlePlayer', []

.controller 'playerCtrl', ['$scope','$sce','DetailsAPI'
	,($scope,$sce,DetailsAPI)->
		console.log  DetailsAPI.array.image

		$scope.view =


			init:->
				vType = ''
				if(vType == 'vimeo')
					console.log "Viemo video Playing"
					$scope.player1 = $sce.trustAsHtml('<iframe id="player1" src="http://player.vimeo.com/video/82125785?api=1&autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
				else 
					player = new YT.Player('player2', {
			          height: '100%',
			          width: '100%',
			          videoId: 'M7lc1UVf-vimeoVE',
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
