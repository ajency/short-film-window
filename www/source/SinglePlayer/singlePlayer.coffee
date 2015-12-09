angular.module 'SFWApp.singlePlayer', []

.controller 'playerCtrl', ['$scope','$sce','DetailsAPI'
	,($scope,$sce,DetailsAPI)->
		console.log  DetailsAPI.array.image

		$scope.view =


			init:->
				vType = 'vimeo'
				if(vType == 'vimeo')
					console.log "Viemo video Playing"
					$scope.player1 = $sce.trustAsHtml('<iframe id="player1" src="http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
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
