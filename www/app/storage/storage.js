angular.module('SFWApp.storage', []).factory('Storage', [
  function() {
    var Storage;
    Storage = {};
    Storage.watchlistDetails = function(action, params) {
      switch (action) {
        case 'set':
          return localforage.setItem('watchlist_details', params);
        case 'get':
          return localforage.getItem('watchlist_details');
        case 'remove':
          return localforage.removeItem('watchlist_details');
      }
    };
    return Storage;
  }
]);
