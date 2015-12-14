angular.module('SFWApp.sidebar', []).controller('sidebarCtrl', function($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, App, DetailsAPI) {
  $scope.slideMenuClicked = function(type) {
    if (type === '1') {
      return App.navigate('home', {}, {});
    } else if (type === '2') {
      return App.navigate('genertab', {}, {});
    } else if (type === '3') {
      return App.navigate('playlisttab', {}, {});
    }
  };
  $scope.singleplay = function(videoid) {
    DetailsAPI.videoId = videoid;
    console.log(DetailsAPI.videoId);
    console.log("enterd single play .");
    return App.navigate('init', {}, {
      animate: false,
      back: false
    });
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
  $scope.test = function() {
    $scope.premeiere = DetailsAPI.array;
    $scope.addition = DetailsAPI.array_addition;
    $scope.noteworthy = DetailsAPI.array_noteworthy;
    $scope.awplalist = DetailsAPI.array_awplalist;
    $scope.genre = DetailsAPI.genre_array;
    $scope.playlist = DetailsAPI.playlist_array;
    console.log($scope.premeiere);
    console.log($scope.addition);
    console.log($scope.noteworthy);
    console.log($scope.awplalist);
    return $scope.videoId = DetailsAPI.array.videoId;
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
