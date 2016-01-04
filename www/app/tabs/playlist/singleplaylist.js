angular.module('SFWApp.tabs').controller('singlePlaylist', [
  '$scope', '$ionicLoading', 'App', 'PlaylistAPI', 'DetailsAPI', '$ionicHistory', 'share', function($scope, $ionicLoading, App, PlaylistAPI, DetailsAPI, $ionicHistory, share) {
    $scope.display = 'loader';
    $scope.share = function() {
      return share.shareNative();
    };
    $scope.init = function() {
      var swiper;
      swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
      });
      if (DetailsAPI.GlobalChild_array.length > 0) {
        console.log("Playlist cached");
        $scope.playlistData = DetailsAPI.GlobalChild_array;
        $scope.playlist = DetailsAPI.Global_array;
        return $scope.display = 'result';
      } else {
        console.log("Playlist emplty");
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 600,
          showDelay: 0
        });
        return PlaylistAPI.GetSingleplaylist(DetailsAPI.videoId).then((function(_this) {
          return function(data) {
            DetailsAPI.Global_array = data.playlist;
            DetailsAPI.GlobalChild_array = data.movies;
            $scope.playlistData = data.movies;
            $scope.playlist = data.playlist;
            $scope.display = 'result';
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
    $scope.singleplay = function(videoid) {
      console.log(videoid);
      DetailsAPI.videoId = videoid;
      console.log(DetailsAPI.videoId);
      console.log("enterd single play .");
      return App.navigate('init');
    };
    return $scope.back = function() {
      var count;
      DetailsAPI.Global_array = [];
      DetailsAPI.GlobalChild_array = [];
      count = -1;
      return App.goBack(count);
    };
  }
]);
