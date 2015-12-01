angular.module 'SFWApp.init',[]

.controller 'InitCtrl', ['$scope'
	 ,($scope)->

	console.log 'In Init'


	$scope.$on '$ionicView.afterEnter', ->
		console.log 'after enter'
		if typeof YT == 'undefined' or typeof YT.Player == 'undefined'
			  tag = document.createElement('script')
			  tag.src = 'https://www.youtube.com/iframe_api'
			  firstScriptTag = document.getElementsByTagName('script')[0]
			  firstScriptTag.parentNode.insertBefore tag, firstScriptTag
	$scope.view =		  

	playVideo:->
		player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

  onPlayerReady = (event) ->
        console.log 'Autostart player'
        event.target.playVideo()
		return

	onPlayerStateChange = (event) ->
	  if event.data == YT.PlayerState.PLAYING and !done
	    setTimeout stopVideo, 6000
	    done = true
	  return

	stopVideo = ->
	  player.stopVideo()
	  return
    
	

]




