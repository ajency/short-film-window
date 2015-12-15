
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.landing','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar', 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI','SFWApp.tabs']

.run ['$rootScope', 'App', '$timeout','Set_Get','$cordovaSplashscreen', ($rootScope, App, $timeout,Set_Get,$cordovaSplashscreen)->
	
	tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore tag, firstScriptTag	
	$rootScope.App = App
	# $cordovaSplashscreen.hide();

	$timeout ->
	  App.navigate 'landingvideo', {}, {}
	  return
	, 3000					


	$rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams)->
		App.previousState = from.name
		App.currentState  = to.name

]

	