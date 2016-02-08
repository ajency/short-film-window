angular.module('SFWApp.sidebar', []).controller('sidebarCtrl', function($scope, $rootScope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, App, DetailsAPI, $ionicLoading, $window, Storage, ParseNotificationService) {
  $scope.showsearchbar = false;
  $scope.display = 'tabview';
  $scope.errorType = '';
  $scope.SearchResult = [];
  $scope.classname = '';
  $scope.watchListCount = '0';
  $scope.afterSearch = false;
  $rootScope.unreadNotificationCount = 0;
  $scope.getwatchlistDetails = [];
  $scope.checkIfaddedToWatchList = function(movie_id) {
    var match;
    if ($scope.getwatchlistDetails.length > 0) {
      match = _.findIndex($scope.getwatchlistDetails, {
        "movie_id": movie_id
      });
      if (match !== -1) {
        return 'selected';
      } else {
        return 'notselected';
      }
    } else {
      return 'notselected';
    }
  };
  $scope.findIndexInWatchlist = function(movieId) {
    var match;
    return match = _.findIndex($scope.getwatchlistDetails, {
      "movie_id": movieId
    });
  };
  $scope.addwatchlist = function(movieData) {
    var matchInWatchList, obj;
    console.log(movieData);
    obj = {
      "movie_id": movieData.movie_id,
      "singleVideoarray": movieData
    };
    matchInWatchList = $scope.findIndexInWatchlist(movieData.movie_id);
    if (matchInWatchList === -1) {
      $scope.getwatchlistDetails.push(obj);
      return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
    } else {
      $scope.getwatchlistDetails.splice(matchInWatchList, 1);
      return Storage.watchlistDetails('set', $scope.getwatchlistDetails);
    }
  };
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
    return Storage.watchlistDetails('get').then(function(value) {
      if (_.isNull(value)) {
        value = [];
      }
      $scope.watchlistDetails = value;
      if ($scope.watchlistDetails.length === 0) {
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
      return $rootScope.unreadNotificationCount = value;
    });
  };
  $scope.singlePlayService = function(videoData) {
    DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
    DetailsAPI.singleVideoarray.singleVideoarray = videoData;
    return App.navigate('init');
  };
  $scope.searchMovie = function() {
    return Storage.watchlistDetails('get').then(function(value) {
      var txt, txtvalue;
      if (_.isNull(value)) {
        value = [];
      }
      $scope.watchlistDetails = value;
      console.log($scope.watchlistDetails);
      $scope.afterSearch = false;
      txt = document.getElementById("autocomplete");
      txtvalue = txt.value;
      $scope.display = 'loader';
      return DetailsAPI.searchResult(txtvalue).then((function(_this) {
        return function(data) {
          var device_height, device_width;
          $scope.afterSearch = true;
          $scope.SearchResult = data;
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          $scope.used_height = 32;
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
          $scope.errorType = 'offline';
          return $scope.display = 'error';
        };
      })(this));
    });
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
    $ionicSideMenuDelegate.toggleLeft();
    window.open(Url, '_system');
    return true;
  };
  $scope.submit = function() {
    return App.navigate("onlineSubmit");
  };
  $scope.slideContent = function() {
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
