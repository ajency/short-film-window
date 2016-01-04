angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App','DetailsAPI','$ionicLoading','$ionicHistory','share'
	 ,($scope, $sce,App,DetailsAPI,$ionicLoading,$ionicHistory,share)->
	$scope.Videodetails = []
	$scope.display = 'result'
	$scope.share = ()->
		console.log "social sharing "
		share.shareNative()

	$scope.init = ()->

		if !angular.isUndefined(DetailsAPI.singleVideoarray.movie_id )
			console.log "Single video Data Cached"
			$scope.Videodetails =  DetailsAPI.singleVideoarray
		else
			$ionicLoading.show
			  content: 'Loading'
			  animation: 'fade-in'
			  showBackdrop: true
			  maxWidth: 600
			  showDelay: 0

			DetailsAPI.GetSingleVideo(DetailsAPI.videoId)
			.then (data)=>
				# $scope.display = 'result'
				console.log "single video  data succ"
				DetailsAPI.singleVideoarray = data
				$scope.Videodetails = data

				$ionicLoading.hide();
				document.getElementById('synopsis').outerHTML = ($scope.Videodetails.content);
			, (error)=>
				console.log 'Error Loading data'
				$scope.display = 'error'
				$ionicLoading.hide();

		console.log  DetailsAPI.videoId
		console.log 'In Init'
		Vtype = '0'


		$scope.$on '$ionicView.afterEnter', ->
			console.log 'after enter'


	$scope.view =
		back:->
			DetailsAPI.singleVideoarray = []
			# $ionicHistory.goBack();
			count = -1
			App.goBack count



		playVideo : ()->
		  App.navigate 'singlePlayer'





]




