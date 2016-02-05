angular.module 'SFWApp.landing',[]
.controller 'appInitializeCtrl', ['$scope','App','DetailsAPI','InitialiseService'
  ,($scope,App,DetailsAPI,InitialiseService)->
    $scope.initApp = ()->
      $scope.display = 'loader'
      $scope.errorType = 'offline'
      InitialiseService.initialize()
        .then (data) ->
          if !App.isOnline()
            $scope.display = 'error'
          else  
            InitialiseService.initialize()
              .then (response) ->
                App.navigate 'popular'
      , (error) ->
            $scope.display = 'error'

       
]                    
