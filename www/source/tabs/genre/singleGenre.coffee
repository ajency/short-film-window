angular.module 'SFWApp.tabs'

.controller 'singleGenre', ['$scope','$ionicLoading',($scope,$ionicLoading)->

	$scope.sortGenre = ()->
		$ionicLoading.show
						scope: $scope
						templateUrl:'views/filterPopup/sortPopupgener.html'
						hideOnStateChange: true	


	$scope.filterGenre = ()->
		$ionicLoading.show
						scope: $scope
						templateUrl:'views/filterPopup/filterPopup.html'
						hideOnStateChange: true						

	$scope.hide = () ->
	        $ionicLoading.hide();
	        hideOnStateChange: false

		
]
