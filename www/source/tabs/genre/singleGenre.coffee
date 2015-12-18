angular.module 'SFWApp.tabs'

.controller 'singleGenre', ['$scope','$ionicLoading','App','GenreAPI','DetailsAPI','$ionicHistory', ($scope,$ionicLoading,App,GenreAPI,DetailsAPI,$ionicHistory)->
	
	$scope.init = () ->
		$ionicLoading.show
		  content: 'Loading'
		  animation: 'fade-in'
		  showBackdrop: true
		  maxWidth: 600
		  showDelay: 0

		console.log DetailsAPI.genre_array
		$scope.genre = DetailsAPI.genre_array
		

		GenreAPI.GetSingleGenre(DetailsAPI.videoId)
		.then (data)=>
			
			$scope.genreData= data.movies
			$scope.genre = data.genre
			console.log $scope.genreData
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


	$scope.view= 
		back :()->
			$ionicHistory.goBack();
			# count = -1
			# App.goBack count	

		
]
