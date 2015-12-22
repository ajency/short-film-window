angular.module 'SFWApp.faq', []

.controller 'faqCtrl', ['$scope','$sce','$ionicHistory',($scope,$sce,$ionicHistory)->

	$scope.view =

		back:->
			$ionicHistory.goBack();
			# count = -1
			# App.goBack count

		init:->

			modifiedUrl = "http://www.shortfilmwindow.com/faq/"
			$scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);

		]