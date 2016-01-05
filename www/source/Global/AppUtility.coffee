angular.module 'SFWApp.Global', []


.factory 'App', [ '$state', '$ionicHistory', '$window','$cordovaNetwork'
	,( $state, $ionicHistory, $window, $cordovaNetwork)->

		App =
			start: true
			menuEnabled : left: false, right: false
			previousState: ''
			currentState: ''

			navigate : (state, params={}, opts={})->
				if !_.isEmpty(opts)
					animate = if _.has(opts, 'animate') then opts.animate else false
					back    = if _.has(opts, 'back')    then opts.back    else false
					$ionicHistory.nextViewOptions
						disableAnimate: !animate
						disableBack   : !back

				$state.go state, params
			getbackView :()->
				console.log $ionicHistory.backView()

			goBack : (count)->
				$ionicHistory.goBack count


			isAndroid : ->
				ionic.Platform.isAndroid()

			isIOS : ->
				ionic.Platform.isIOS()

			isWebView : ->
				ionic.Platform.isWebView()

			isOnline : ->
				if @isWebView() then $cordovaNetwork.isOnline()
				else navigator.onLine

			deviceUUID : ->
				if @isWebView() then device.uuid else 'DUMMYUUID'

			hideKeyboardAccessoryBar : ->
				if $window.cordova && $window.cordova.plugins.Keyboard
					$cordovaKeyboard.hideAccessoryBar true


]

