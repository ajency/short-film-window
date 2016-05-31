shortFilmWindow.controller('singleGenre', [
  '$scope', '$ionicLoading', 'App', 'GenreAPI', 'DetailsAPI', '$ionicHistory', 'share', '$window', 'Storage', '$timeout', function($scope, $ionicLoading, App, GenreAPI, DetailsAPI, $ionicHistory, share, $window, Storage, $timeout) {
    $scope.lang = null;
    $scope.sort_key = null;
    $scope.errorType = '';
    $scope.filterimg = 'img/icons/filter_grey.png';
    $scope.sortimg = 'img/icons/sort_notapplied.png';
    $scope.display = 'loader';
    $scope.Popuparray = [];
    $scope.PopuparrayClicked = ['img/icons/fresh_red.png', 'img/icons/popularity_red.png', 'img/icons/length-Red.png'];
    $scope.PopuparrayImages = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
    $scope.refreshSwiper = true;
    $scope.share = function(slug) {
      return share.shareNative(slug, 'category');
    };
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
    $scope.init = function() {
      return Storage.watchlistDetails('get').then(function(value) {
        var device_height, device_width;
        if (_.isNull(value)) {
          value = [];
        }
        $scope.getwatchlistDetails = value;
        if (DetailsAPI.GlobalChild_array.length > 0) {
          $scope.genreData = DetailsAPI.GlobalChild_array;
          $scope.genre = DetailsAPI.Global_array;
          $scope.sortData = DetailsAPI.Sort;
          $scope.language = DetailsAPI.Filter;
          device_width = $window.innerWidth;
          device_height = $window.innerHeight;
          $scope.used_height = 88 + 73;
          $scope.hgt = device_height - $scope.used_height;
          $scope.display = 'result';
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
              $scope.used_height = 88 + 73;
              return $scope.hgt = device_height + 3 - $scope.used_height;
            };
          })(this), (function(_this) {
            return function(error) {
              return $scope.display = 'error';
            };
          })(this));
        }
      });
    };
    $scope.sortGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'filterPopup/sortPopupgener.html',
        hideOnStateChange: true
      });
    };
    $scope.langSelected = function(language_id) {
      return $scope.lang = language_id;
    };
    $scope.filterGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'filterPopup/filterpopup.html',
        hideOnStateChange: true
      });
    };
    $scope.getId = function(sort_id) {
      $scope.sort_key = sort_id;
      $scope.Popuparray = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
      $scope.Popuparray[sort_id] = $scope.PopuparrayClicked[sort_id];
      $scope.txtcolor = ['', '', ''];
      return $scope.txtcolor[sort_id] = 'color:#AF152F';
    };
    $scope.popup = function() {
      if (_.isNull($scope.sort_key)) {
        return $scope.Popuparray = $scope.PopuparrayImages;
      } else {
        $scope.Popuparray = ['img/icons/fresh_grey.png', 'img/icons/popularity_grey.png', 'img/icons/length_grey.png'];
        $scope.Popuparray[$scope.sort_key] = $scope.PopuparrayClicked[$scope.sort_key];
        $scope.txtcolor = ['', '', ''];
        return $scope.txtcolor[$scope.sort_key] = 'color:#AF152F';
      }
    };
    $scope.FiltersortApply = function() {
      var arr;
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
      GenreAPI.ApplyFilter(arr).then((function(_this) {
        return function(data) {
          DetailsAPI.GlobalChild_array = data.movies;
          DetailsAPI.Global_array = data.genre;
          DetailsAPI.Filter = data.filters.languages;
          DetailsAPI.Sort = data.sort_keys;
          if (DetailsAPI.GlobalChild_array.length > 0) {
            $scope.display = 'result';
            $scope.genreData = data.movies;
            $scope.genre = data.genre;
            $scope.sortData = data.sort_keys;
            $scope.language = data.filters.languages;
            $ionicLoading.hide();
            $scope.refreshSwiper = false;
            return $timeout((function() {
              $scope.refreshSwiper = true;
              return $scope.display = 'result';
            }), 100);
          } else {
            $scope.errorType = 'no_Search_result';
            return $scope.display = 'error';
          }
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.errorType = '';
          return $scope.display = 'error';
        };
      })(this));
      return $ionicLoading.hide();
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
    $scope.singlePlayService = function(videoData) {
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id;
      DetailsAPI.singleVideoarray.singleVideoarray = videoData;
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
        $scope.init();
        return $scope.display = 'loader';
      }
    };
  }
]);
