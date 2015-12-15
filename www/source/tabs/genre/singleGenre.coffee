angular.module 'SFWApp.tabs'

.controller 'singleGenre', ['$scope','$ionicLoading',($scope,$ionicLoading)->

	$scope.sortGenre = ()->
		$ionicLoading.show
						scope: $scope
						templateUrl:'views/genre/singleGenre.html'
						hideOnStateChange: true	

	$scope.hide = () ->
	        $ionicLoading.hide();
	        hideOnStateChange: false

		
]
