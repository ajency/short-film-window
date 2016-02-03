angular.module('SFWApp.sidebar', []).controller('sidebarCtrl', function($scope, $rootScope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, App, DetailsAPI, $ionicLoading, $window, Storage, ParseNotificationService) {
  $scope.showsearchbar = false;
  $scope.display = 'tabview';
  $scope.errorType = '';
  $scope.SearchResult = [];
  $scope.classname = '';
  $scope.watchListCount = '0';
  $scope.afterSearch = false;
  $rootScope.$on('openNotification', function(event, pn) {
    App.fromNotification = 1;
    DetailsAPI.videoId = 131;
    if ($rootScope.unreadNotificationCount) {
      $rootScope.unreadNotificationCount--;
    }
    App.notificationPayload = pn;
    return App.navigate('init');
  });
  $rootScope.$on('receiveNotification', function(event, pn) {
    return $rootScope.unreadNotificationCount++;
  });
  $scope.device_height = $window.innerHeight;
  $scope.hgt = parseInt($scope.device_height) - parseInt(45);
  $scope.getwatchlistcount = function() {
    console.log("init called");
    return Storage.watchlistDetails('get').then(function(value) {
      console.log(value);
      $scope.watchlistDetails = value;
      if (_.isNull($scope.watchlistDetails)) {
        $scope.watchListCount = '0';
        return $scope.$apply();
      } else {
        if ($scope.watchlistDetails.length > 0) {
          $scope.watchListCount = $scope.watchlistDetails.length;
          return $scope.$apply();
        } else {
          $scope.watchListCount = '0';
          return $scope.$apply();
        }
      }
    });
  };
  $rootScope.getnotificationcount = function() {
    return ParseNotificationService.getUnreadNotificationsCount().then(function(value) {
      console.log(value);
      return $rootScope.unreadNotificationCount = value;
    });
  };
  $scope.singleplay = function(videoid) {
    console.log(videoid);
    DetailsAPI.videoId = videoid;
    console.log(DetailsAPI.videoId);
    console.log("enterd single play .");
    return App.navigate('init');
  };
  $scope.searchMovie = function() {
    var txt, txtvalue;
    $scope.afterSearch = false;
    console.log("key-up event called");
    txt = document.getElementById("autocomplete");
    txtvalue = txt.value;
    console.log(txtvalue);
    $scope.display = 'loader';
    return DetailsAPI.searchResult(txtvalue).then((function(_this) {
      return function(data) {
        var device_height, device_width;
        $scope.afterSearch = true;
        console.log(data);
        $scope.SearchResult = data;
        device_width = $window.innerWidth;
        device_height = $window.innerHeight;
        console.log(device_width);
        console.log(device_height);
        $scope.used_height = 44;
        $scope.hgt = device_height - $scope.used_height;
        if ($scope.SearchResult.length === 0) {
          $scope.errorType = 'no_Search_result';
          return $scope.display = 'error';
        } else {
          $scope.classname = 'searchResult';
          return $scope.display = 'searchresult';
        }
      };
    })(this), (function(_this) {
      return function(error) {
        console.log('Error Loading data');
        $scope.errorType = 'offline';
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
    $scope.getwatchlistcount();
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
