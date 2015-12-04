angular.module('ionicTest', ['ionic'])

.controller('ionicTestCtrl', function($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate) {
  $scope.slideContent = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

$ionicModal.fromTemplateUrl('my-modal.html', function(modal) {
    $scope.taskModal = modal;    
}, {
    scope: $scope    
});

$scope.openModal = function(){
	$scope.taskModal.show();
};

$scope.closeModal = function()
{
	$scope.taskModal.hide();
};

$scope.showPopup = function()
{
	$scope.data = {}

	var myPopup = $ionicPopup.show(
	{
		template: '<input class="padding" type="password" ng-modal="data-wifi">',
		title: 'Enter Wi-Fi Password',
		subTitle: 'Please use normal things',
		scope: $scope,
		buttons: [
		{ text: 'Cancel' },
		{ 
			text: 'Save', 
			cssClass: 'test',
			type: 'button-positive'			
		}
		]
	});
};

});
