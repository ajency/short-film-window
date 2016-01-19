angular.module('SFWApp.tabs').controller('singleGenre', [
  '$scope', '$ionicLoading', 'App', 'GenreAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', function($scope, $ionicLoading, App, GenreAPI, DetailsAPI, $ionicHistory, share, $window) {
    var swiper;
    $scope.lang = null;
    $scope.sort_key = null;
    $scope.errorType = '';
    $scope.filterimg = 'img/icons/filter_grey.png';
    $scope.sortimg = 'img/icons/sort_notapplied.png';
    $scope.display = 'loader';
    $scope.Popuparray = [];
    $scope.PopuparrayClicked = ['img/icons/fresh_red.png', 'img/icons/popularity_red.png', 'img/icons/length-Red.png'];
    $scope.PopuparrayImages = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
    $scope.share = function() {
      return share.shareNative();
    };
    $scope.init = function() {
      var device_height, device_width;
      if (DetailsAPI.GlobalChild_array.length > 0) {
        console.log("Genre cached");
        $scope.genreData = DetailsAPI.GlobalChild_array;
        $scope.genre = DetailsAPI.Global_array;
        $scope.sortData = DetailsAPI.Sort;
        $scope.language = DetailsAPI.Filter;
        $scope.display = 'result';
        device_width = $window.innerWidth;
        device_height = $window.innerHeight;
        console.log(device_width);
        console.log(device_height);
        $scope.used_height = 88 + 73;
        $scope.hgt = device_height - $scope.used_height;
        return console.log($scope.hgt);
      } else {
        return GenreAPI.GetSingleGenre(DetailsAPI.videoId).then((function(_this) {
          return function(data) {
            DetailsAPI.GlobalChild_array = data.movies;
            DetailsAPI.Global_array = data.genre;
            DetailsAPI.Filter = data.filters.languages;
            DetailsAPI.Sort = data.sort_keys;
            $scope.genreData = data.movies;
            $scope.genre = data.genre;
            $scope.sortData = data.sort_keys;
            $scope.language = data.filters.languages;
            $scope.display = 'result';
            device_width = $window.innerWidth;
            device_height = $window.innerHeight;
            console.log(device_width);
            console.log(device_height);
            $scope.used_height = 88 + 73;
            $scope.hgt = device_height - $scope.used_height;
            return console.log($scope.hgt);
          };
        })(this), (function(_this) {
          return function(error) {
            console.log('Error Loading data');
            return $scope.display = 'error';
          };
        })(this));
      }
    };
    $scope.sortGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/filterPopup/sortPopupgener.html',
        hideOnStateChange: true
      });
    };
    $scope.langSelected = function(language_id) {
      console.log(language_id);
      return $scope.lang = language_id;
    };
    $scope.filterGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/filterPopup/filterpopup.html',
        hideOnStateChange: true
      });
    };
    $scope.getId = function(sort_id) {
      console.log(sort_id);
      $scope.sort_key = sort_id;
      $scope.Popuparray = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
      $scope.Popuparray[sort_id] = $scope.PopuparrayClicked[sort_id];
      $scope.txtcolor = ['', '', ''];
      return $scope.txtcolor[sort_id] = 'color:#AF152F';
    };
    $scope.popup = function() {
      console.log("popup init called ");
      if (_.isNull($scope.sort_key)) {
        $scope.Popuparray = $scope.PopuparrayImages;
        return console.log($scope.Popuparray[1]);
      } else {
        $scope.Popuparray = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
        $scope.Popuparray[$scope.sort_key] = $scope.PopuparrayClicked[$scope.sort_key];
        $scope.txtcolor = ['', '', ''];
        return $scope.txtcolor[$scope.sort_key] = 'color:#AF152F';
      }
    };
    $scope.FiltersortApply = function() {
      var arr;
      console.log($scope.lang);
      console.log($scope.sort_key);
      if (_.isNull($scope.lang)) {
        $scope.filterimg = 'img/icons/filter_grey.png';
      } else {
        $scope.filterimg = 'img/icons/filter_red.png';
      }
      if (_.isNull($scope.sort_key)) {
        $scope.sortimg = 'img/icons/sort_notapplied.png';
      } else {
        $scope.sortimg = $scope.PopuparrayClicked[$scope.sort_key];
      }
      arr = [DetailsAPI.Global_array.genre_id, $scope.sort_key, $scope.lang];
      $ionicLoading.hide();
      ({
        hideOnStateChange: false
      });
      $scope.display = 'loader';
      return GenreAPI.ApplyFilter(arr).then((function(_this) {
        return function(data) {
          DetailsAPI.GlobalChild_array = data.movies;
          DetailsAPI.Global_array = data.genre;
          DetailsAPI.Filter = data.filters.languages;
          DetailsAPI.Sort = data.sort_keys;
          if (DetailsAPI.GlobalChild_array.length > 0) {
            $scope.display = 'result';
          } else {
            $scope.errorType = 'no_Search_result';
            $scope.display = 'error';
          }
          $scope.genreData = data.movies;
          $scope.genre = data.genre;
          $scope.sortData = data.sort_keys;
          $scope.language = data.filters.languages;
          return $ionicLoading.hide();
        };
      })(this), (function(_this) {
        return function(error) {
          console.log('Error Loading data');
          $scope.errorType = '';
          $scope.display = 'error';
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.hide = function() {
      $ionicLoading.hide();
      return {
        hideOnStateChange: false
      };
    };
    $scope.reset = function() {
      var arr;
      $scope.sortimg = 'img/icons/sort_notapplied.png';
      $scope.filterimg = 'img/icons/filter_grey.png';
      $scope.sort_key = null;
      $scope.lang = '';
      console.log($scope.lang);
      console.log($scope.sort_key);
      arr = [DetailsAPI.Global_array.genre_id, $scope.sort_key, $scope.lang];
      $ionicLoading.hide();
      ({
        hideOnStateChange: false
      });
      $scope.display = 'loader';
      return GenreAPI.ApplyFilter(arr).then((function(_this) {
        return function(data) {
          DetailsAPI.GlobalChild_array = data.movies;
          DetailsAPI.Global_array = data.genre;
          DetailsAPI.Filter = data.filters.languages;
          DetailsAPI.Sort = data.sort_keys;
          $scope.genreData = data.movies;
          $scope.genre = data.genre;
          $scope.sortData = data.sort_keys;
          $scope.language = data.filters.languages;
          $ionicLoading.hide();
          return $scope.display = 'result';
        };
      })(this), (function(_this) {
        return function(error) {
          console.log('Error Loading data');
          $scope.errorType = '';
          $scope.display = 'error';
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.hideNoReset = function() {
      $scope.sortimg = 'img/icons/sort_notapplied.png';
      $scope.filterimg = 'img/icons/filter_grey.png';
      $scope.sort_key = null;
      $scope.lang = '';
      $ionicLoading.hide();
      return {
        hideOnStateChange: false
      };
    };
    $scope.singleplay = function(videoid) {
      console.log(videoid);
      DetailsAPI.videoId = videoid;
      console.log(DetailsAPI.videoId);
      console.log("enterd single play .");
      return App.navigate('init');
    };
    $scope.back = function() {
      var count;
      DetailsAPI.GlobalChild_array = [];
      DetailsAPI.Global_array = [];
      DetailsAPI.Filter = [];
      DetailsAPI.Sort = [];
      count = -1;
      return App.goBack(count);
    };
    $scope.view = swiper = new Swiper('.genreswiper', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
    });
    return {
      onTapToRetry: function() {
        console.log($scope.errorType);
        $scope.reset();
        return $scope.display = 'loader';
      }
    };
  }
]);
