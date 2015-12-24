angular.module 'SFWApp.tabs'

.controller 'singleGenre', ['$scope','$ionicLoading','App','GenreAPI','DetailsAPI','$ionicHistory', ($scope,$ionicLoading,App,GenreAPI,DetailsAPI,$ionicHistory)->

	$scope.init = () ->
		swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination'
				paginationClickable: true
				direction: 'vertical'
					});

		if ( DetailsAPI.GlobalChild_array.length >0 )
			console.log "Genre cached"
			$scope.genreData= DetailsAPI.GlobalChild_array
			$scope.genre = DetailsAPI.Global_array
			$scope.sortData = DetailsAPI.Sort
			$scope.language = DetailsAPI.Filter

		else
			$ionicLoading.show
			  content: 'Loading'
			  animation: 'fade-in'
			  showBackdrop: true
			  maxWidth: 600
			  showDelay: 0
			GenreAPI.GetSingleGenre(DetailsAPI.videoId)
			.then (data)=>
				DetailsAPI.GlobalChild_array = data.movies
				DetailsAPI.Global_array = data.genre
				DetailsAPI.Filter = data.filters.languages
				DetailsAPI.Sort = data.sort_keys

				$scope.genreData= data.movies
				$scope.genre = data.genre
				$scope.sortData= data.sort_keys
				$scope.language = data.filters.languages
				$ionicLoading.hide();
			, (error)=>
				console.log 'Error Loading data'
				$ionicLoading.hide();


		$scope.sortGenre = ()->
			$ionicLoading.show
				scope: $scope
				templateUrl:'views/filterPopup/sortPopupgener.html'
				hideOnStateChange: true


	$scope.filterGenre = ()->
		$ionicLoading.show
			scope: $scope
			templateUrl:'views/filterPopup/filterpopup.html'
			hideOnStateChange: true

	$scope.hide = () ->

        $ionicLoading.hide();
        hideOnStateChange: false


	$scope.singleplay = (videoid)->

		console.log videoid
		DetailsAPI.videoId = videoid
		console.log DetailsAPI.videoId
		console.log "enterd single play ."
		App.navigate 'init'

	$scope.back = ()->
		# $ionicHistory.goBack();
		DetailsAPI.GlobalChild_array = []
		DetailsAPI.Global_array = []
		DetailsAPI.Filter = []
		DetailsAPI.Sort = []
		count = -1
		App.goBack count







]
