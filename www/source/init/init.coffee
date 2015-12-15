angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App','DetailsAPI','$ionicLoading'
	 ,($scope, $sce,App,DetailsAPI,$ionicLoading)->
	$scope.Videodetails = []
	$scope.init= ()->

		$ionicLoading.show
		  content: 'Loading'
		  animation: 'fade-in'
		  showBackdrop: true
		  maxWidth: 600
		  showDelay: 0
		
		DetailsAPI.GetSingleVideo(DetailsAPI.videoId)
		.then (data)=>
			console.log "single video  data succ"
			DetailsAPI.singleVideoarray = data
			$scope.Videodetails = data
			console.log $scope.Videodetails
			console.log $scope.Videodetails.image
			$ionicLoading.hide();

		, (error)=>
			console.log 'Error Loading data'
			$ionicLoading.hide();	
	
	console.log  DetailsAPI.videoId
	console.log 'In Init'
	Vtype = '0'


	$scope.$on '$ionicView.afterEnter', ->
		console.log 'after enter'

		
	$scope.view =
		back:->
			App.navigate 'popular', {}, {}
			# count = -1
			# App.goBack count

	  

		playVideo : ()->
		  App.navigate 'singlePlayer', {}, {}
				




]




