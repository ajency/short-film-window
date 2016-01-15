angular.module('SFWApp.sidebar', [])


.controller 'sidebarCtrl', ($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate,App,DetailsAPI,$ionicLoading,$window,Storage) ->
  $scope.showsearchbar =  false
  $scope.display = 'tabview'
  $scope.errorType = ''
  $scope.SearchResult = []
  $scope.classname = ''
  $scope.watchListCount = '0'

  # $('#autocomplete').autocomplete
  # serviceUrl: 'http://shortfilm.staging.wpengine.com/wp-json/search?str=Refle'
  # onSelect: (suggestion) ->
  #   alert 'You selected: ' + suggestion.value + ', ' + suggestion.data
  $scope.getwatchlistcount = ()->
    console.log "init called"
    Storage.watchlistDetails 'get'
    .then (value)->
        console.log value
        $scope.watchlistDetails = value
        if  _.isNull($scope.watchlistDetails)
          $scope.watchListCount = '0'
          $scope.$apply()

        else
            if($scope.watchlistDetails.length >0)
              $scope.watchListCount = $scope.watchlistDetails.length
              $scope.$apply()

            else
              $scope.watchListCount = '0'
              $scope.$apply()



  $scope.singleplay = (videoid)->
    console.log videoid
    DetailsAPI.videoId = videoid
    console.log DetailsAPI.videoId
    console.log "enterd single play ."
    App.navigate 'init'

  $scope.searchMovie = () ->
    console.log "key-up event called"
    txt = document.getElementById("autocomplete");
    txtvalue = txt.value;
    console.log txtvalue
    $scope.display = 'loader'
    DetailsAPI.searchResult(txtvalue)
      .then (data)=>
        console.log data
        $scope.SearchResult = data

        device_width = $window.innerWidth;
        device_height = $window.innerHeight;
        console.log device_width
        console.log device_height
        $scope.used_height = 44
        $scope.hgt = device_height - $scope.used_height

        console.log "Search data"
        if $scope.SearchResult.length == 0
          $scope.errorType = 'no_Search_result'
          $scope.display = 'error'
        else
          $scope.classname = 'searchResult'
          $scope.display = 'searchresult'

      , (error)=>
        console.log 'Error Loading data'
        $scope.errorType = ''
        $scope.display = 'error'

  $scope.onTapToRetry = () ->
    console.log $scope.errorType
    if $scope.errorType == ''
      $scope.searchMovie()
    else
      $scope.hideSearch()

  $scope.hideSearch = () ->
    console.log "hide Search Bar"
    $scope.display = 'tabview'

  $scope.SeacrchClicked = ()->
    console.log "search"
    $scope.showsearchbar = true



  $scope.hide = () ->
    $ionicLoading.hide();
    hideOnStateChange: false


  $scope.displayWeb = (Url) ->
    console.log Url
    $ionicSideMenuDelegate.toggleLeft()
    window.open(Url, '_system');
    return true

  $scope.submit = ->
    console.log "submit called"
    App.navigate "onlineSubmit"


  $scope.slideContent = ->

    console.log "slide"
    console.log DetailsAPI.imageUrl
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
    return

  return




