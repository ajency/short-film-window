angular.module 'SFWApp.Global'


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
            when 'server_error'
                errorMsg = 'Could not connect to server'
            when 'no_result'
                errorMsg = 'No results found'
            else
                errorMsg = 'Unknown error'
                errorTitle = 'Result'
                button = 'clear Filter/Sort'

        scope.errorMsg = errorMsg
        scope.errorTitle = errorTitle
        scope.button = button




        scope.onTryAgain = ->
            scope.tapToRetry()
]

