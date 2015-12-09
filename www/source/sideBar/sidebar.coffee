angular.module('SFWApp.sidebar', [])


.controller 'sidebarCtrl', ($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate,App,DetailsAPI) ->


  
  $scope.singleplay = ->
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
    console.log 1 
    console.log DetailsAPI.array.image
    $scope.imagepath = DetailsAPI.array.image
    console.log  $scope.imagepath


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



