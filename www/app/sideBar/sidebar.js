angular.module('SFWApp.sidebar', []).controller('sidebarCtrl', function($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, App, DetailsAPI, $ionicLoading) {
  $scope.showsearchbar = false;
  $scope.SeacrchClicked = function() {
    console.log("search");
    $scope.showsearchbar = true;
    return $ionicLoading.show({
      scope: $scope,
      templateUrl: 'views/search/search.html',
      hideOnStateChange: true
    });
  };
  $scope.hide = function() {
    $ionicLoading.hide();
    return {
      hideOnStateChange: false
    };
  };
  $scope.displayWeb = function(Url) {
    console.log(Url);
    $ionicSideMenuDelegate.toggleLeft();
    window.open(Url, '_system');
    return true;
  };
  $scope.submit = function() {
    console.log("submit called");
    return App.navigate("onlineSubmit");
  };
  $scope.slideContent = function() {
    console.log("slide");
    console.log(DetailsAPI.imageUrl);
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.openModal = function() {
    $scope.taskModal.show();
  };
  $scope.closeModal = function() {
    $scope.taskModal.hide();
  };
  $scope.showPopup = function() {
    var myPopup;
    $scope.data = {};
    myPopup = $ionicPopup.show({
      template: '<input class="padding" type="password" ng-modal="data-wifi">',
      title: 'Enter Wi-Fi Password',
      subTitle: 'Please use normal things',
      scope: $scope,
      buttons: [
        {
          text: 'Cancel'
        }, {
          text: 'Save',
          cssClass: 'test',
          type: 'button-positive'
        }
      ]
    });
  };
});
