angular.module 'SFWApp.Global'

.factory 'share',['$q', 'App', '$http' ,($q, App, $http)->
    share = {}
    share.shareNative = (videodetails = {}) ->
        console.log "Sharing video"
        console.log videodetails
        if window.plugins and window.plugins.socialsharing
            window.plugins.socialsharing.share 'I\'ll be attending the session: ' + $scope.session.title + '.', 'PhoneGap Day 2014', null, 'http://pgday.phonegap.com/us2014', (->
              console.log 'Success'
            ), (error) ->
              console.log 'Share fail ' + error

        else
            console.log 'Share plugin not available'





    share



]