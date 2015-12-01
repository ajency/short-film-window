
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.init','SFWApp.navigate','SFWApp.Global']

.run ['$rootScope', 'App', '$timeout', ($rootScope, App, $timeout,ngCordova)->


	$rootScope.App = App
	App.navigate 'init', {}, {animate: false, back: false}


	$rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams)->
		App.previousState = from.name
		App.currentState  = to.name

]

