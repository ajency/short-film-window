angular.module('SFWApp.sidebar', [])


.controller 'sidebarCtrl', ($scope, $ionicModal, $ionicPopup, $ionicSideMenuDelegate,App) ->
  
  $scope.singleplay = ->
    console.log "enterd single play ."
    App.navigate 'init', {}, {animate: false, back: false}


  $scope.slideContent = ->
    console.log "slide"
    $ionicSideMenuDelegate.toggleLeft()
    return

  # $ionicModal.fromTemplateUrl 'my-modal.html', ((modal) ->
  #   $scope.taskModal = modal
  #   return
  # ), scope: $scope

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
  $scope.view = 
    test : ()->
      console.log 1



