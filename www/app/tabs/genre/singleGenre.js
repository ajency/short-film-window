angular.module('SFWApp.tabs').controller('singleGenre', [
  '$scope', '$ionicLoading', 'App', 'GenreAPI', 'DetailsAPI', '$ionicHistory', function($scope, $ionicLoading, App, GenreAPI, DetailsAPI, $ionicHistory) {
    $scope.init = function() {
      var swiper;
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
      } else {
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 600,
          showDelay: 0
        });
        GenreAPI.GetSingleGenre(DetailsAPI.videoId).then((function(_this) {
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
      }
      return $scope.sortGenre = function() {
        return $ionicLoading.show({
          scope: $scope,
          templateUrl: 'views/filterPopup/sortPopupgener.html',
          hideOnStateChange: true
        });
      };
    };
    $scope.filterGenre = function() {
      return $ionicLoading.show({
        scope: $scope,
        templateUrl: 'views/filterPopup/filterpopup.html',
        hideOnStateChange: true
      });
    };
    $scope.hide = function() {
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
    return $scope.back = function() {
      var count;
      DetailsAPI.GlobalChild_array = [];
      DetailsAPI.Global_array = [];
      DetailsAPI.Filter = [];
      DetailsAPI.Sort = [];
      count = -1;
      return App.goBack(count);
    };
  }
]);
