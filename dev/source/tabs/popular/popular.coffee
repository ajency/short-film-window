shortFilmWindow
.controller 'popularCtrl', ['$scope','$rootScope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$window','InitialiseService','Storage'
  ,($scope,$rootScope, App, PulltorefreshAPI, DetailsAPI,$ionicLoading,$window,InitialiseService,Storage)->
    
    $scope.getwatchlistDetails = []
    $scope.currentCard = {}

    $rootScope.$on 'watchListUpdate', (event, data)->
      $scope.getwatchlistDetails = data
      $scope.checkIfaddedlist()  

    $scope.detectSlideChange =(swiperInstance)->
      console.log swiperInstance.activeIndex
      $scope.currentCard = $scope.allContentArray[swiperInstance.activeIndex]


    $scope.singleplaylist = (playlistId)->
      DetailsAPI.videoId = playlistId
      App.navigate "singlePlaylist"
   
    $scope.checkIfaddedlist = () ->
      _.each $scope.allContentArray, (val,key)->   
        $scope.allContentArray[key].addedToWatchList = 0

      if $scope.getwatchlistDetails.length > 0
        _.each $scope.getwatchlistDetails, (watchlistData)->
          match = _.findIndex $scope.allContentArray, {"movieId": watchlistData.movie_id}
          if match != -1
            $scope.allContentArray[match].addedToWatchList = 1

    $scope.findIndexInallContentArray = (movieId) ->
      match = _.findIndex $scope.allContentArray, {"movieId": movieId}      

    $scope.findIndexInWatchlist = (movieId) ->
      match = _.findIndex $scope.getwatchlistDetails, {"movie_id": movieId}  

    $scope.updateFlagInallContentArray = (movieId,flag) ->
      matchIndex = $scope.findIndexInallContentArray(movieId)
      $scope.allContentArray[matchIndex].addedToWatchList = flag
          
    $scope.addwatchlist = (movieData) -> 
      obj = 
        "movie_id" : movieData.movieId
        "singleVideoarray" : movieData.content

      matchInWatchList = $scope.findIndexInWatchlist(movieData.movieId)
      if matchInWatchList  == -1
        $scope.updateFlagInallContentArray(movieData.movieId,1)
        $scope.getwatchlistDetails.push(obj)
        Storage.watchlistDetails 'set', $scope.getwatchlistDetails
      else
        $scope.updateFlagInallContentArray(movieData.movieId,0)
        $scope.getwatchlistDetails.splice matchInWatchList,1
        Storage.watchlistDetails 'set', $scope.getwatchlistDetails
       

    $scope.doRefresh = ()->
      if !App.isOnline()
        $scope.checkNetwork = false
      else    
        PulltorefreshAPI.pullrequest()
        .then (data)=>
          $scope.checkNetwork = true
          PulltorefreshAPI.saveData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})
          
          $scope.premeiere= DetailsAPI.array
          $scope.addition= DetailsAPI.array_addition
          $scope.noteworthy= DetailsAPI.array_noteworthy
          $scope.awplalist= DetailsAPI.array_awplalist
          $scope.videoId = DetailsAPI.array.videoId
          $scope.$broadcast('scroll.refreshComplete');
          $ionicLoading.hide();


        , (error)=>
          $scope.$broadcast('scroll.refreshComplete');
          if App.isOnline
            $scope.errorType = 'offline'
            $scope.display = 'error'
          else
            $scope.classname = 'no_Search_result'
            $scope.display = 'error'

          $ionicLoading.hide();

    $scope.singleplay = (videoid)->
      DetailsAPI.videoId = videoid
      App.navigate 'init'

    $scope.singlePlayService = (videoData)->
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id
      DetailsAPI.singleVideoarray.singleVideoarray = videoData
      App.navigate 'init'


    $scope.initApp = ->
      device_width = $window.innerWidth;
      device_height = $window.innerHeight;

      $scope.used_height = 86 + 73
      $scope.hgt = device_height + 3 - $scope.used_height 
      if !App.isOnline()
        $scope.checkNetwork = false
        $scope.display = 'nonetwork'
      else  
        $scope.initDetailsApi()
        $scope.display = 'result'
 
    $scope.initDetailsApi = ()->

      premierArr = []
      additionArr = []
      noteworthyArr = []
      awPlalistArr = []
      $scope.allContentArray = []

      console.log DetailsAPI

      premierArr.push
        "order": 1
        "cardtitle" : "Weekly Premiere"
        "p" : "Carefully handpicked, just for you."
        "iconimg" : "weekly_premiere"
        "content" : DetailsAPI.array
        "addedToWatchList" : 0
        "movieId": DetailsAPI.array.movie_id

      additionArr = _.map DetailsAPI.array_addition, (value, key, list)->
        "order": 2
        "cardtitle" : "New Additions"
        "p" : "Just starting out on their big journey!"
        "iconimg" : "new_additions"
        "content" : value
        "addedToWatchList" : 0
        "movieId": value.movie_id

      noteworthyArr = _.map DetailsAPI.array_noteworthy, (value, key, list)->
        "order": 3
        "cardtitle" : "Noteworthy"
        "p" : "Completely out of the ordinary"
        "iconimg" : "noteworthy"
        "content" : value  
        "addedToWatchList" : 0
        "movieId": value.movie_id

      awPlalistArr.push
        "order": 4
        "cardtitle" : "Awesome Playlist"
        "p" : "Sit back and relax with some popcorn!"
        "iconimg" : "awesome_playlists"
        "content" : DetailsAPI.array_awplalist
        "addedToWatchList" : 0
        "movieId": ""


      $scope.allContentArray = _.union premierArr, additionArr, noteworthyArr, awPlalistArr
      $scope.currentCard = $scope.allContentArray[0]
      $scope.initWatchlist()   

    $scope.initWatchlist = ()->
      Storage.watchlistDetails 'get'
        .then (value)->
          if _.isNull value
            value = []
          $scope.getwatchlistDetails = value  
          $scope.checkIfaddedlist()              
      


]
