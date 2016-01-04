angular.module('SFWApp.tabs').controller('singleGenre', [
  '$scope', '$ionicLoading', 'App', 'GenreAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', function($scope, $ionicLoading, App, GenreAPI, DetailsAPI, $ionicHistory, share, $window) {
    $scope.lang = '';
    $scope.sort_key = '';
    $scope.display = 'loader';
    $scope.share = function() {
      return share.shareNative();
    };
    $scope.init = function() {
      var device_height, device_width, swiper;
      swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
      });
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
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 600,
          showDelay: 0
        });
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
            console.log($scope.hgt);
            return $ionicLoading.hide();
          };
        })(this), (function(_this) {
          return function(error) {
            console.log('Error Loading data');
            $scope.display = 'error';
            return $ionicLoading.hide();
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
      return $scope.sort_key = sort_id;
    };
    $scope.FiltersortApply = function() {
      var arr;
      console.log($scope.lang);
      console.log($scope.sort_key);
      arr = [DetailsAPI.Global_array.genre_id, $scope.sort_key, $scope.lang];
      ({
        hideOnStateChange: false
      });
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 600,
        showDelay: 0
      });
      return GenreAPI.ApplyFilter(arr).then((function(_this) {
        return function(data) {
          DetailsAPI.GlobalChild_array = data.movies;
          DetailsAPI.Global_array = data.genre;
          DetailsAPI.Filter = data.filters.languages;
          DetailsAPI.Sort = data.sort_keys;
          if (DetailsAPI.GlobalChild_array.length > 0) {
            $scope.display = 'result';
          } else {
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
      $scope.sort_key = '';
      $scope.lang = '';
      console.log($scope.lang);
      console.log($scope.sort_key);
      arr = [DetailsAPI.Global_array.genre_id, $scope.sort_key, $scope.lang];
      ({
        hideOnStateChange: false
      });
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 600,
        showDelay: 0
      });
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
          return $ionicLoading.hide();
        };
      })(this), (function(_this) {
        return function(error) {
          console.log('Error Loading data');
          return $ionicLoading.hide();
        };
      })(this));
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
    return $scope.view = {
      onTapToRetry: function() {
        $scope.display = 'result';
        return $scope.reset();
      }
    };
  }
]);
