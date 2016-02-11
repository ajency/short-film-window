shortFilmWindow
.factory 'share',['$q', 'App', '$http' ,($q, App, $http)->
    share = {}
    share.shareNative = (params,slug) ->
        console.log "Sharing video"

        if window.plugins and window.plugins.socialsharing
            window.plugins.socialsharing.share null, 'shortFilm Window', null, URL, (->
              console.log 'Success'
            ), (error) ->
              console.log 'Share fail ' + error

        else
            console.log 'Share plugin not available'





    share



]