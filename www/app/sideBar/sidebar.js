angular.module('SFWApp.sidebar', []).controller('sidebarCtrl', function($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, App, DetailsAPI, $ionicLoading) {
  $scope.showsearchbar = false;
  $scope.display = 'tabview';
  $scope.errorType = '';
  $scope.SearchResult = [];
  $scope.singleplay = function(videoid) {
    console.log(videoid);
    DetailsAPI.videoId = videoid;
    console.log(DetailsAPI.videoId);
    console.log("enterd single play .");
    return App.navigate('init');
  };
  $scope.searchMovie = function() {
    var txt, txtvalue;
    console.log("key-up event called");
    txt = document.getElementById("autocomplete");
    txtvalue = txt.value;
    console.log(txtvalue);
    $scope.display = 'loader';
    return DetailsAPI.searchResult(txtvalue).then((function(_this) {
      return function(data) {
        console.log(data);
        $scope.SearchResult = data;
        console.log("Search data");
        if ($scope.SearchResult.length < 0) {
          $scope.errorType = 'no_Search_result';
          return $scope.display = 'error';
        } else {
          return $scope.display = 'searchresult';
        }
      };
    })(this), (function(_this) {
      return function(error) {
        console.log('Error Loading data');
        $scope.errorType = '';
        return $scope.display = 'error';
      };
    })(this));
  };
  $scope.onTapToRetry = function() {
    console.log($scope.errorType);
    if ($scope.errorType === '') {
      return $scope.searchMovie();
    } else {
      return $scope.hideSearch();
    }
  };
  $scope.hideSearch = function() {
    console.log("hide Search Bar");
    return $scope.display = 'tabview';
  };
  $scope.SeacrchClicked = function() {
    console.log("search");
    return $scope.showsearchbar = true;
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
