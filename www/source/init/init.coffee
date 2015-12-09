angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App','DetailsAPI'
	 ,($scope, $sce,App,DetailsAPI)->
	
	DetailsAPI.GetSingleVideo(DetailsAPI.videoId)
	.then (data)=>
		console.log "succ"
		

	, (error)=>
		console.log 'Error Loading data'	
	
	console.log  DetailsAPI.videoId
	console.log 'In Init'
	Vtype = '0'


	$scope.$on '$ionicView.afterEnter', ->
		console.log 'after enter'

		
	$scope.view =
		back:->
			count = -1
			App.goBack count

	  

		playVideo : ()->
		  App.navigate 'singlePlayer', {}, {}
				




]




