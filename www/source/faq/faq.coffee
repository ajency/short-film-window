angular.module 'SFWApp.faq', []

.controller 'faqCtrl', ['$scope','$sce','$ionicHistory','$ionicLoading',($scope,$sce,$ionicHistory,$ionicLoading)->

	$scope.view =

		back:->
			$ionicHistory.goBack();
			# count = -1
			# App.goBack count

		init:->
            $('#player1').ready ->
                $ionicLoading.show
                  content: 'Loading'
                  animation: 'fade-in'
                  showBackdrop: true
                  maxWidth: 600
                  hideOnStateChange:true
                  showDelay: 0

            $('#player1').load ->
                $ionicLoading.hide();

            modifiedUrl = "http://www.shortfilmwindow.com/faq/"
            $scope.player1 = $sce.trustAsResourceUrl(modifiedUrl);

		]