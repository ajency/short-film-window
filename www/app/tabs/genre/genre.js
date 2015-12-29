angular.module('SFWApp.tabs').controller('genreCtrl', [
  '$rootScope', '$scope', 'App', 'PulltorefreshAPI', 'DetailsAPI', '$ionicLoading', function($rootScope, $scope, App, PulltorefreshAPI, DetailsAPI, $ionicLoading) {
    var swiper;
    $scope.doRefresh = function() {
      return PulltorefreshAPI.pullrequest().then((function(_this) {
        return function(data) {
          console.log(data.defaults.content.popular.weekly_premiere.image);
          PulltorefreshAPI.saveData({
            premiere: data.defaults.content.popular.weekly_premiere,
            new_addition: data.defaults.content.popular.new_additions,
            noteworthy: data.defaults.content.popular.noteworthy,
            awesome_playlist: data.defaults.content.popular.awesome_playlist,
            genre: data.defaults.content.genre,
            playlist: data.defaults.content.playlists
          });
          $scope.genre = DetailsAPI.genre_array;
          $scope.$broadcast('scroll.refreshComplete');
          return $ionicLoading.hide();
        };
      })(this), (function(_this) {
        return function(error) {
          $scope.$broadcast('scroll.refreshComplete');
          console.log('Error Loading data');
          return $ionicLoading.hide();
        };
      })(this));
    };
    $scope.init = function() {
      $scope.genre = DetailsAPI.genre_array;
      console.log($scope.genre);
      console.log(App.previousState);
      return console.log(App.currentState);
    };
    $scope.singleGenre = function(genreId) {
      console.log(genreId);
      DetailsAPI.videoId = genreId;
      console.log(DetailsAPI.videoId);
      return App.navigate("singleGenre");
    };
    return $scope.view = swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
    });
  }
]);
