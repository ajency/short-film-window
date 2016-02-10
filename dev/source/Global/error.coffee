shortFilmWindow
.directive 'ajError', [->

    restrict: 'E'
    replace: true
    templateUrl:    'views/Global/error.html'

    scope:
        tapToRetry: '&'
        errorType: '='


    link: (scope, el, attr)->

        switch scope.errorType
            when 'offline'
                errorMsg = 'No internet availability'
                errorTitle = 'Error'
                button = 'Retry'
            when 'server_error'
                errorMsg = 'Could not connect to server'
            when 'no_Search_result'
                errorMsg = 'No results found'
                errorTitle = 'Result'
                button = 'Close'
            else
                errorMsg = 'Something Went Wrong'
                errorTitle = 'Error'
                button = 'Retry'

        scope.errorMsg = errorMsg
        scope.errorTitle = errorTitle
        scope.button = button




        scope.onTryAgain = ->
            scope.tapToRetry()
]

