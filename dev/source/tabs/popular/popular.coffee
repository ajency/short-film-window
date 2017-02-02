shortFilmWindow
.controller 'popularCtrl', ['$scope','$rootScope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$window','InitialiseService','Storage','$timeout','GenreAPI'
  ,($scope,$rootScope, App, PulltorefreshAPI, DetailsAPI,$ionicLoading,$window,InitialiseService,Storage,$timeout,GenreAPI)->

    $scope.getwatchlistDetails = []
    $scope.currentCard = {}
    $scope.refreshSwiper = true
    $rootScope.$on 'watchListUpdate', (event, data)->
      $scope.getwatchlistDetails = data
      $scope.checkIfaddedlist()
    $rootScope.$on 'refreshContent',(event,data)->
      $scope.doRefresh()
    $rootScope.$on 'receiveNotification', (event, pn)->
      $scope.doRefresh()

    $scope.detectSlideChange =(swiperInstance)->
      $scope.currentCard = $scope.allContentArray[swiperInstance.activeIndex]

    $scope.singlePlaylistGenre = (playlistId, type)->
      DetailsAPI.videoId = playlistId
      if type=="playlist" then App.navigate "singlePlaylist" 
      if type=="category" then App.navigate "singleGenre" 

    $scope.checkIfaddedlist = () ->
      _.each $scope.allContentArray, (val,key)->
        $scope.allContentArray[key].addedToWatchList = 0

      if $scope.getwatchlistDetails.length > 0
        _.each $scope.getwatchlistDetails, (watchlistData)->
          match = _.findIndex $scope.allContentArray, {"movieId": watchlistData.movie_id}
          if match != -1
            $scope.allContentArray[match].addedToWatchList = 1

    findIndexInallContentArray = (movieId) ->
      match = _.findIndex $scope.allContentArray, {"movieId": movieId}

    findIndexInWatchlist = (movieId) ->
      match = _.findIndex $scope.getwatchlistDetails, {"movie_id": movieId}

    $scope.updateFlagInallContentArray = (movieId,flag) ->
      matchIndex = findIndexInallContentArray(movieId)
      $scope.allContentArray[matchIndex].addedToWatchList = flag

     $scope.addwatchlist = (movieData) ->
      obj =
        "movie_id" : movieData.movieId
        "singleVideoarray" : movieData.content

      matchInWatchList = findIndexInWatchlist(movieData.movieId)
      if matchInWatchList  == -1
        $scope.updateFlagInallContentArray(movieData.movieId,1)
        $scope.getwatchlistDetails.push(obj)
        Storage.watchlistDetails 'set', $scope.getwatchlistDetails
      else
        $scope.updateFlagInallContentArray(movieData.movieId,0)
        $scope.getwatchlistDetails.splice matchInWatchList,1
        Storage.watchlistDetails 'set', $scope.getwatchlistDetails


    $scope.doRefresh = ()->
      console.log "Refreshing"
      if !App.isOnline()
        $scope.checkNetwork = false
        console.log "not calling pull api"
      else
        PulltorefreshAPI.pullrequest()
        .then (data)=>
          console.log "data from pull request"
          console.log data
          $scope.checkNetwork = true
          PulltorefreshAPI.saveData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,mstPopular :data.defaults.content.popular.most_popular,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist,genre:data.defaults.content.genre ,playlist:data.defaults.content.playlists})
          $scope.premeiere= DetailsAPI.array
          $scope.addition= DetailsAPI.array_addition
          $scope.noteworthy= DetailsAPI.array_noteworthy
          $scope.awplalist= DetailsAPI.array_awplalist
          $scope.videoId = DetailsAPI.array.videoId
          $scope.$broadcast('scroll.refreshComplete')
          $ionicLoading.hide()
          $scope.initApp()
        , (error)->
            $scope.$broadcast('scroll.refreshComplete')

          $ionicLoading.hide()


    $scope.singlePlayService = (videoData)->
      DetailsAPI.singleVideoarray.movie_id = videoData.movie_id
      DetailsAPI.singleVideoarray.singleVideoarray = videoData
      App.navigate 'init'


    $scope.initApp = ->
      console.log "Inside init app"
      $scope.used_height = 86 + 105
      $scope.hgt = $rootScope.device_height + 3 - $scope.used_height
      if !App.isOnline()
        $scope.checkNetwork = false
        $scope.display = 'nonetwork'
      else
        initDetailsApi()

    initDetailsApi = ()->

      premierArr = []
      additionArr = []
      noteworthyArr = []
      # mostPopularArr=[]
      awPlalistArr = []
      genArr = []
      $scope.allContentArray = []
      
      premierArr.push
        "order": 1
        "cardtitle" : "This Week's Release"
        "p" : "New Cinema of New India"
        "iconimg" : "weekly_premiere"
        "content" : DetailsAPI.array
        "addedToWatchList" : 0
        "movieId": DetailsAPI.array.movie_id

      noteworthyArr = _.map DetailsAPI.array_noteworthy, (value, key, list)->
        "order": 2
        "cardtitle" : "Noteworthy"
        "p" : value.genreCategory
        "iconimg" : "noteworthy"
        "content" : value
        "addedToWatchList" : 0
        "movieId": value.movie_id

      additionArr = _.map DetailsAPI.array_addition, (value, key, list)->
        "order": 3
        "cardtitle" : "New Additions"
        "p" : "Just starting out on their big journey!"
        "iconimg" : "new_additions"
        "content" : value
        "addedToWatchList" : 0
        "movieId": value.movie_id

      # mostPopularArr = _.map DetailsAPI.array_mostpopular, (value, key, list)->
      #  "order": 4
      #  "cardtitle" : "Most Popular"
      #  "p" : "Super Hit List!"
      #  "iconimg" : "new_additions"
      #  "content" : value
      #  "addedToWatchList" : 0
      #  "movieId": value.movie_id

      genArr.push
        "order":5
        "cardtitle": "Genre List"
        "p": "Choose Your Genre"
        "iconimg": "genre"
        "content": DetailsAPI.genre_array
        "addedToWatchList": 0
        "movieId":""

      awPlalistArr.push
        "order": 6
        "cardtitle" : "Awesome Playlist"
        "p" : "Sit back and relax with some popcorn!"
        "iconimg" : "awesome_playlists"
        "content" : DetailsAPI.array_awplalist
        "addedToWatchList" : 0
        "movieId": ""

      $scope.allContentArray = _.union premierArr, noteworthyArr, additionArr, genArr, awPlalistArr
      console.log "Data in final array"
      console.log $scope.allContentArray
      $scope.currentCard = $scope.allContentArray[0]
      $scope.refreshSwiper = false
      $timeout (->
        $scope.refreshSwiper = true
        initWatchlist()
        ),1000
      $scope.display = 'result'
      
    initWatchlist = ()->
      Storage.watchlistDetails 'get'
        .then (value)->
          if _.isNull value
            value = []
          $scope.getwatchlistDetails = value
          $scope.checkIfaddedlist()
    # $scope.$on '$ionicView.afterEnter', ()->
    #   App.hideSplashScreen()


]
