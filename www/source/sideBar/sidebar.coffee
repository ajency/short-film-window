angular.module('SFWApp.sidebar', [])


.controller 'sidebarCtrl', ($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate,App,DetailsAPI) ->


  
  $scope.singleplay = (videoid)->
    DetailsAPI.videoId = videoid
    console.log DetailsAPI.videoId
    console.log "enterd single play ."
    App.navigate 'init', {}, {animate: false, back: false}


  $scope.slideContent = ->
    console.log "slide"
    console.log DetailsAPI.imageUrl
    $ionicSideMenuDelegate.toggleLeft()
    return

  $scope.openModal = ->
    $scope.taskModal.show()
    return

  $scope.closeModal = ->
    $scope.taskModal.hide()
    return

  $scope.test = ->
    $scope.premeiere= DetailsAPI.array
    $scope.addition= DetailsAPI.array_addition
    $scope.noteworthy= DetailsAPI.array_noteworthy
    $scope.awplalist= DetailsAPI.array_awplalist
    console.log $scope.premeiere
    console.log $scope.addition
    console.log $scope.noteworthy
    console.log $scope.awplalist
    # $scope.videoId = DetailsAPI.array.videoId
    $scope.videoId = '71'
    


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



