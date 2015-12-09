angular.module 'SFWApp.init', []

.controller 'InitCtrl', ['$scope', '$sce','App'
	 ,($scope, $sce,App)->

	console.log 'In Init'
	Vtype = '0'


	$scope.$on '$ionicView.afterEnter', ->
		console.log 'after enter'

		
	$scope.view =
		back:->
			count = -1
			App.goBack count

	  

		playVideo : ()->
		  App.navigate 'singlePlayer', {}, {}
				




]




