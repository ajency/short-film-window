angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App','DetailsAPI'
	 ,($scope, $sce,App,DetailsAPI)->
	$scope.Videodetails = []
	
	DetailsAPI.GetSingleVideo(DetailsAPI.videoId)
	.then (data)=>
		console.log "single video  data succ"
		DetailsAPI.singleVideoarray = data
		$scope.Videodetails = data
		console.log $scope.Videodetails
		console.log $scope.Videodetails.image

		

	, (error)=>
		console.log 'Error Loading data'	
	
	console.log  DetailsAPI.videoId
	console.log 'In Init'
	Vtype = '0'


	$scope.$on '$ionicView.afterEnter', ->
		console.log 'after enter'

		
	$scope.view =
		back:->
			App.navigate 'home', {}, {}
			# count = -1
			# App.goBack count

	  

		playVideo : ()->
		  App.navigate 'singlePlayer', {}, {}
				




]




