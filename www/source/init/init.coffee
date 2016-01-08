angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App','DetailsAPI','$ionicLoading','$ionicHistory','share','Storage'
	 ,($scope, $sce,App,DetailsAPI,$ionicLoading,$ionicHistory,share,Storage)->
	$scope.Videodetails = []
	$scope.display = 'result'
	$scope.addvideoDetails = []
	$scope.getwatchlistDetails = []
	$scope.watchFlag = '0'
	$scope.share = ()->
		console.log "social sharing "
		share.shareNative()

	$scope.addwatchlist = ()->
		console.log "video added to watchlist "
		console.log DetailsAPI.singleVideoarray
		$scope.CheckWatchlist()


	$scope.CheckWatchlist = () ->
		console.log "checking if video exist"
		Storage.watchlistDetails 'get'
			.then (value)->
				console.log value
				$scope.getwatchlistDetails = value
				if _.isNull($scope.getwatchlistDetails)
					console.log "new video  entry"
					$scope.addvideoDetails.push(DetailsAPI.singleVideoarray)
					Storage.watchlistDetails 'set', $scope.addvideoDetails

				else
					i = 0

					while i < $scope.getwatchlistDetails.length
						if $scope.getwatchlistDetails[i].movie_id == DetailsAPI.singleVideoarray.movie_id
							console.log "Movie already added "
							$scope.watchFlag = '1'
						else
							console.log "New movie entry "
						i++

					if $scope.watchFlag == '0'
						i= 0

						while i < $scope.getwatchlistDetails.length
							$scope.addvideoDetails.push($scope.getwatchlistDetails[i])
							i++

						$scope.addvideoDetails.push(DetailsAPI.singleVideoarray)
						Storage.watchlistDetails 'set', $scope.addvideoDetails







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




