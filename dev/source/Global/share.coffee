shortFilmWindow
.factory 'share',['$q', 'App', '$http' ,($q, App, $http)->
    share = {}
    share.shareNative = (slug,params='') ->
        console.log "Sharing video",slug,params
        URL = "http://shortfilm.staging.wpengine.com/"
        if window.plugins and window.plugins.socialsharing
            switch params
              when ''
                shareURL = URL + '/'+slug
              else
                shareURL = URL + '/'+params+'/'+slug
    
            window.plugins.socialsharing.share null, 'shortFilm Window', null, shareURL, ()->
              console.log 'Success'
            , (error) ->
              console.log 'Share fail ' + error

        else
            console.log 'Share plugin not available'





    share



]