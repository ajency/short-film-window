angular.module 'SFWApp.submit', []

.controller 'onlineSubmitCtrl', ['$scope','$ionicHistory','App',($scope,$ionicHistory,App)->

	$scope.view =

		back:->
			$ionicHistory.goBack();
			# count = -1
			# App.goBack count

		init:->
			console.log "online submit entered"


		offlineCalled:->
			App.navigate "offlineSubmit"
				

		]