angular.module 'SFWApp.tabs',[]
.controller 'popularCtrl', ['$scope','$rootScope','App','PulltorefreshAPI','DetailsAPI','$ionicLoading','$window','InitialiseService'
  ,($scope,$rootScope, App, PulltorefreshAPI, DetailsAPI,$ionicLoading,$window,InitialiseService)->

    console.log 'popular'


    # swiper = new Swiper(angular.element(document.querySelector('#popularswipeId')),
    #   direction: 'vertical'
    #   effect: 'coverflow',
    #   grabCursor: true,
    #   centeredSlides: true,
    #   loop: false
    #   slidesPerView: 'auto',
    #   coverflow:
    #     rotate: 50,
    #     stretch: 0,
    #     depth: 100,
    #     modifier: 1,
    #     slideShadows : false
    # )

    # swiper = new Swiper(angular.element(document.querySelector('#popularswipeId')),
    #   direction: 'vertical'
    # )


    $scope.singleplaylist = (playlistId)->
      DetailsAPI.videoId = playlistId
      App.navigate "singlePlaylist"

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

      premierArr.push
        "order": 1
        "cardtitle" : "Weekly Premiere"
        "p" : "Carefully handpicked, just for you."
        "iconimg" : "weekly_premiere"
        "content" : DetailsAPI.array

      additionArr = _.map DetailsAPI.array_addition, (value, key, list)->
        "order": 2
        "cardtitle" : "New Additions"
        "p" : "Just starting out on their big journey!"
        "iconimg" : "new_additions"
        "content" : value

      noteworthyArr = _.map DetailsAPI.array_noteworthy, (value, key, list)->
        "order": 3
        "cardtitle" : "Noteworthy"
        "p" : "Completely out of the ordinary"
        "iconimg" : "noteworthy"
        "content" : value  

      awPlalistArr.push
        "order": 4
        "cardtitle" : "Awesome Playlist"
        "p" : "Sit back and relax with some popcorn!"
        "iconimg" : "awesome_playlists"
        "content" : DetailsAPI.array_awplalist


      $scope.allContentArray = _.union premierArr, additionArr, noteworthyArr, awPlalistArr

      # $scope.premeiere= DetailsAPI.array
      # $scope.addition= DetailsAPI.array_addition
      # $scope.noteworthy= DetailsAPI.array_noteworthy

      # $scope.awplalist= DetailsAPI.array_awplalist
      # $scope.videoId = DetailsAPI.array.videoId 
      # console.log DetailsAPI      

          
      


]
