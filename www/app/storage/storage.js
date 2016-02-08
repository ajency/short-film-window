angular.module('SFWApp.storage', []).factory('Storage', [
  '$rootScope', function($rootScope) {
    var Storage;
    Storage = {};
    Storage.watchlistDetails = function(action, params) {
      switch (action) {
        case 'set':
          return localforage.setItem('watchlist_details', params, function(err, value) {
            console.log('update', value);
            return $rootScope.$broadcast('watchListUpdate', params);
          });
        case 'get':
          return localforage.getItem('watchlist_details');
        case 'remove':
          return localforage.removeItem('watchlist_details');
      }
    };
    return Storage;
  }
]);
