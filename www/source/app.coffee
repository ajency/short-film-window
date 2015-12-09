
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar', 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI']

.run ['$rootScope', 'App', '$timeout','DetailsAPI','Set_Get', ($rootScope, App, $timeout,DetailsAPI,Set_Get)->
	
	tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore tag, firstScriptTag	
	$rootScope.App = App
	
	DetailsAPI.GetVideoDetails()
	.then (data)=>
		console.log data.defaults.content.popular.weekly_premiere.image
		DetailsAPI.setData(data.defaults.content.popular.weekly_premiere)
		App.navigate 'home', {}, {}

	, (error)=>
		console.log 'Error Loading data'						


	


	$rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams)->
		App.previousState = from.name
		App.currentState  = to.name

]

	