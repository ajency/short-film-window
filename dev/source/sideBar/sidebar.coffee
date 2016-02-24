shortFilmWindow
.controller 'sidebarCtrl', ($scope,$rootScope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate,App,DetailsAPI,$ionicLoading,$window,Storage,ParseNotificationService,$timeout) ->
  $scope.showsearchbar =  false
  $scope.searchDisplay = 'tabview'
  $scope.errorType = ''
  $scope.SearchResult = []
  $scope.classname = ''
  $scope.watchListCount = '0'
  $rootScope.unreadNotificationCount = 0
  $scope.getwatchlistDetails= []

  $scope.hideSearchBar = ()->
    $scope.showsearchbar = 'hide'

  $scope.checkIfaddedToWatchList = (movie_id)->
    if $scope.getwatchlistDetails.length > 0
        match = _.findIndex $scope.getwatchlistDetails, {"movie_id": movie_id}
        if match != -1
            'selected'
        else
            'notselected'
    else
        'notselected'

  $scope.findIndexInWatchlist = (movieId) ->
    match = _.findIndex $scope.getwatchlistDetails, {"movie_id": movieId}  

      
  $scope.addwatchlist = (movieData) ->
    obj = 
        "movie_id" : movieData.movie_id
        "singleVideoarray" : movieData

    matchInWatchList = $scope.findIndexInWatchlist(movieData.movie_id)
    if matchInWatchList  == -1
        $scope.getwatchlistDetails.push(obj)
        Storage.watchlistDetails 'set', $scope.getwatchlistDetails
    else
        $scope.getwatchlistDetails.splice matchInWatchList,1
        Storage.watchlistDetails 'set', $scope.getwatchlistDetails 


  $rootScope.$on 'openNotification', (event, pn)->
    App.fromNotification = 1
    DetailsAPI.videoId = 131
    # pn.payload.movieId
    if $rootScope.unreadNotificationCount
      $rootScope.unreadNotificationCount--
    App.notificationPayload = pn 
    App.navigate('init')    

  $rootScope.$on 'receiveNotification', (event, pn)->
    $rootScope.unreadNotificationCount++


  # $('#autocomplete').autocomplete
  # serviceUrl: 'http://shortfilm.staging.wpengine.com/wp-json/search?str=Refle'
  # onSelect: (suggestion) ->
  #   alert 'You selected: ' + suggestion.value + ', ' + suggestion.data

  $scope.device_height = $window.innerHeight;
  $scope.hgt = parseInt($scope.device_height) - parseInt(45)



  $scope.getwatchlistcount = ()->
    Storage.watchlistDetails 'get'
    .then (value)->
        if _.isNull value
          value = []
        $scope.watchlistDetails = value
        if  $scope.watchlistDetails.length == 0
          $scope.watchListCount = '0'
          $scope.$apply()

        else
            if($scope.watchlistDetails.length >0)
              $scope.watchListCount = $scope.watchlistDetails.length
              $scope.$apply()

            else
              $scope.watchListCount = '0'
              $scope.$apply()

  $rootScope.getnotificationcount = ()->
    ParseNotificationService.getUnreadNotificationsCount()
    .then (value)->
      $rootScope.unreadNotificationCount = value


  $scope.singlePlayService = (videoData)->
    DetailsAPI.singleVideoarray.movie_id = videoData.movie_id
    DetailsAPI.singleVideoarray.singleVideoarray = videoData
    App.navigate 'init'  

  $scope.searchMovie = () ->
    Storage.watchlistDetails 'get'
    .then (value)->
      if _.isNull value
        value = []
      $scope.watchlistDetails = value
      txt = document.getElementById("autocomplete")
      $scope.searchDisplay = 'loader'
      DetailsAPI.searchResult(txt.value).then (data)->
        $scope.SearchResult = [] if !_.isEmpty $scope.SearchResult
        $scope.SearchResult = data
        device_width = $window.innerWidth
        device_height = $window.innerHeight
        $scope.hgt = device_height - 32
        $timeout ->
          if $scope.SearchResult.length == 0
            $scope.errorType = 'no_Search_result'
            $scope.searchDisplay = 'error'
          else
            $scope.classname = 'searchResult'
            $scope.searchDisplay = 'searchresult'
      , (error)=>
            $scope.errorType = 'offline'
            $scope.searchDisplay = 'error'      





  $scope.onTapToRetry = () ->
    $scope.searchMovie()



  $scope.hide = () ->
    $ionicLoading.hide();
    hideOnStateChange: false


  $scope.displayWeb = (Url) ->
    $ionicSideMenuDelegate.toggleLeft()
    window.open(Url, '_system');
    return true

  $scope.submit = ->
    App.navigate "onlineSubmit"


  $scope.slideContent = ->
    $scope.getwatchlistcount()
    $ionicSideMenuDelegate.toggleLeft()
    return

  $scope.openModal = ->
    $scope.taskModal.show()
    return

  $scope.closeModal = ->
    $scope.taskModal.hide()
    return

  $scope.showPopup = ->
    $scope.data = {}
    myPopup = $ionicPopup.show(
      template: '<input class="padding" type="password" ng-modal="data-wifi">'
      title: 'Enter Wi-Fi Password'
      subTitle: 'Please use normal things'
      scope: $scope
      buttons: [
        { text: 'Cancel' }
        {
          text: 'Save'
          cssClass: 'test'
          type: 'button-positive'
        }
      ])




