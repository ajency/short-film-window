angular.module('SFWApp.sidebar', [])


.controller 'sidebarCtrl', ($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate,App,DetailsAPI) ->
  $scope.showsearchbar =  false

  $scope.SeacrchClicked = ()->
    console.log "search"
    $scope.showsearchbar = true


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




