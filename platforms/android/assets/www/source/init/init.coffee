angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App'
	 ,($scope, $sce,App)->

	console.log 'In Init'
	Vtype = '0'


	$scope.$on '$ionicView.afterEnter', ->
		console.log 'after enter'

		
	$scope.view =
		init : ()->
	  

		playVideo : ()->
			# if(Vtype == '1')

				# if typeof YT == 'undefined' or typeof YT.Player == 'undefined' 
					player = new YT.Player('player', {
			          height: '500',
			          width: '400',
			          videoId: 'M7lc1UVf-VE',
					  playerVars: { 'autoplay': 1, 'rel': 0, 'wmode':'transparent' }         
					  events: {
			            'onReady': onPlayerReady,
			            'onStateChange': onPlayerStateChange
			          }
			        });
			# else
			# 	  App.navigate 'singlePlayer', {}, {animate: false, back: false}
			# 	# $scope.player1 = $sce.trustAsHtml('<iframe id="player1" src="https://player.vimeo.com/video/76979871?api=1&player_id=player1&autoplay=1" width="100%" height="354" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		
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




