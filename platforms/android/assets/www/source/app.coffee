
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar', 'ngSanitize','SFWApp.singlePlayer']

.run ['$rootScope', 'App', '$timeout', ($rootScope, App, $timeout,ngCordova)->
	tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore tag, firstScriptTag	
	$rootScope.App = App
	# AuthAPI.validateUser(@refrencecode,@password )
	# 					.then (data)=>
	# 						if data.code == 'successful_login'
	# 							Storage.login 'set'
	# 							Storage.setHospitalData 'set', data.hospitalData 
	# 							CSpinner.hide()
	# 							App.navigate "dashboard", {}, {animate: false, back: false}
	# 						else
	# 							CToast.show 'Please check credentials'
	# 							CSpinner.hide()
	# 					, (error)=>
	# 						CToast.show 'Please try again'
	# 						CSpinner.hide()

	
	App.navigate 'home', {}, {}


	$rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams)->
		App.previousState = from.name
		App.currentState  = to.name

]

