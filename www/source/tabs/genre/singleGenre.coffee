angular.module 'SFWApp.tabs'

.controller 'singleGenre', ['$scope','$ionicLoading','App',($scope,$ionicLoading,App)->

	$scope.sortGenre = ()->
		$ionicLoading.show
						scope: $scope
						templateUrl:'views/filterPopup/sortPopupgener.html'
						hideOnStateChange: true	


	$scope.filterGenre = ()->
		App.navigate 'filterGenreCtrl',{},{}			

	$scope.hide = () ->
	        $ionicLoading.hide();
	        hideOnStateChange: false

		
]
