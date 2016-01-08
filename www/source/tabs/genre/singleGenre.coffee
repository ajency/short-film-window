angular.module 'SFWApp.tabs'

.controller 'singleGenre', ['$scope','$ionicLoading','App','GenreAPI','DetailsAPI','$ionicHistory','share','$window', ($scope,$ionicLoading,App,GenreAPI,DetailsAPI,$ionicHistory,share,$window)->

	$scope.lang = null
	$scope.sort_key = null
	$scope.errorType = ''
	$scope.filterimg = 'img/icons/filter_grey.png'
	$scope.sortimg = 'img/icons/sort_notapplied.png'
	$scope.display = 'loader'
	$scope.Popuparray = []
	$scope.PopuparrayClicked = ['img/icons/fresh_red.png','img/icons/popularity_red.png','img/icons/length-Red.png']
	$scope.PopuparrayImages = ['img/icons/fresh_grey.png','img/icons/popularity_grey.png','img/icons/length_grey.png']


	$scope.share = () ->
		share.shareNative()
	$scope.init = () ->
		if ( DetailsAPI.GlobalChild_array.length >0 )
			console.log "Genre cached"
			$scope.genreData= DetailsAPI.GlobalChild_array
			$scope.genre = DetailsAPI.Global_array
			$scope.sortData = DetailsAPI.Sort
			$scope.language = DetailsAPI.Filter
			$scope.display = 'result'

			device_width = $window.innerWidth;
			device_height = $window.innerHeight;
			console.log device_width
			console.log device_height
			$scope.used_height = 88 + 73
			$scope.hgt = device_height - $scope.used_height
			console.log $scope.hgt

		else
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
				$scope.display = 'result'

				device_width = $window.innerWidth;
				device_height = $window.innerHeight;
				console.log device_width
				console.log device_height
				$scope.used_height = 88 + 73
				$scope.hgt = device_height - $scope.used_height
				console.log $scope.hgt

			, (error)=>
				console.log 'Error Loading data'
				$scope.display = 'error'



	$scope.sortGenre = ()->
		$ionicLoading.show
			scope: $scope
			templateUrl:'views/filterPopup/sortPopupgener.html'
			hideOnStateChange: true

	$scope.langSelected = (language_id) ->
		console.log language_id
		$scope.lang = language_id

	$scope.filterGenre = ()->
		$ionicLoading.show
			scope: $scope
			templateUrl:'views/filterPopup/filterpopup.html'
			hideOnStateChange: true

	$scope.getId = (sort_id)->
		console.log sort_id
		$scope.sort_key = sort_id
		$scope.Popuparray = ['img/icons/fresh_grey.png','img/icons/popularity_grey.png','img/icons/length_grey.png']
		$scope.Popuparray[sort_id] = $scope.PopuparrayClicked[sort_id]
		$scope.txtcolor = ['','','']
		$scope.txtcolor[sort_id] = 'color:#AF152F'

	$scope.popup = ()->
		console.log "popup init called "
		if _.isNull($scope.sort_key)
			$scope.Popuparray = $scope.PopuparrayImages
			console.log $scope.Popuparray[1]
		else
			$scope.Popuparray = ['img/icons/fresh_grey.png','img/icons/popularity_grey.png','img/icons/length_grey.png']
			$scope.Popuparray[$scope.sort_key] = $scope.PopuparrayClicked[$scope.sort_key]
			$scope.txtcolor = ['','','']
			$scope.txtcolor[$scope.sort_key] = 'color:#AF152F'


	$scope.FiltersortApply = ()->
		console.log $scope.lang
		console.log $scope.sort_key
		if _.isNull($scope.lang)
			$scope.filterimg = 'img/icons/filter_grey.png'
		else
			$scope.filterimg = 'img/icons/filter_red.png'

		if _.isNull($scope.sort_key)
			$scope.sortimg = 'img/icons/sort_notapplied.png'
		else
			$scope.sortimg = $scope.PopuparrayClicked[$scope.sort_key]


		arr = [ DetailsAPI.Global_array.genre_id , $scope.sort_key, $scope.lang ]

		$ionicLoading.hide();
		hideOnStateChange: false
		$scope.display = 'loader'

		GenreAPI.ApplyFilter(arr)
		.then (data)=>
			DetailsAPI.GlobalChild_array = data.movies
			DetailsAPI.Global_array = data.genre
			DetailsAPI.Filter = data.filters.languages
			DetailsAPI.Sort = data.sort_keys
			if DetailsAPI.GlobalChild_array.length > 0
				$scope.display = 'result'
			else
				$scope.errorType = 'no_Search_result'
				$scope.display = 'error'

			$scope.genreData= data.movies
			$scope.genre = data.genre
			$scope.sortData= data.sort_keys
			$scope.language = data.filters.languages
			$ionicLoading.hide();
		, (error)=>
			console.log 'Error Loading data'
			$scope.errorType = ''
			$scope.display = 'error'

			$ionicLoading.hide();
		# $scope.sort_key = ''
		# $scope.lang = ''



	$scope.hide = () ->
		$ionicLoading.hide();
		hideOnStateChange: false

	$scope.reset = () ->
		$scope.sortimg = 'img/icons/sort_notapplied.png'
		$scope.filterimg = 'img/icons/filter_grey.png'
		$scope.sort_key = null
		$scope.lang = ''
		console.log $scope.lang
		console.log $scope.sort_key
		arr = [ DetailsAPI.Global_array.genre_id , $scope.sort_key, $scope.lang ]
		$ionicLoading.hide();
		hideOnStateChange: false
		$scope.display = 'loader'
		GenreAPI.ApplyFilter(arr)
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
			$scope.display = 'result'
		, (error)=>
			console.log 'Error Loading data'
			$scope.errorType = ''
			$scope.display = 'error'
			$ionicLoading.hide();




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

	$scope.view =
	    swiper = new Swiper( document.getElementById("singlegenre"), {
	      pagination: '.swiper-pagination'
	      paginationClickable: true
	      direction: 'vertical'
	      });

		onTapToRetry : ->
			console.log $scope.errorType
			$scope.reset()
			$scope.display = 'loader'




]
