
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.landing','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar', 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI']

.run ['$rootScope', 'App', '$timeout','DetailsAPI','Set_Get','$cordovaSplashscreen', ($rootScope, App, $timeout,DetailsAPI,Set_Get,$cordovaSplashscreen)->
	
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

	
	
	# DetailsAPI.GetVideoDetails()
	# .then (data)=>
	# 	console.log data.defaults.content.popular.weekly_premiere.image
	# 	DetailsAPI.setData({premiere :data.defaults.content.popular.weekly_premiere,new_addition :data.defaults.content.popular.new_additions,noteworthy :data.defaults.content.popular.noteworthy,awesome_playlist:data.defaults.content.popular.awesome_playlist})
	# 	App.navigate 'home', {}, {}

	# , (error)=>
	# 	console.log 'Error Loading data'						


	


	$rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams)->
		App.previousState = from.name
		App.currentState  = to.name

]

	