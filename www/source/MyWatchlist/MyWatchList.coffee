angular.module 'SFWApp.watchlist', []

.controller 'watchlistCtrl', ['$scope','Storage'
     ,($scope,Storage)->
        $scope.watchlistDetails = []
        $scope.display = 'loader'
        $scope.init = ()->
            console.log "watch list "
            Storage.watchlistDetails 'get'
            .then (value)->
                console.log value
                $scope.watchlistDetails = value
                if $scope.watchlistDetails.length >0
                    $scope.display = 'result'
                    $scope.$apply()
                else
                    $scope.display = 'no_result'
                    $scope.$apply()








]