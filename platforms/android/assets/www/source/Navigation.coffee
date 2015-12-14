angular.module 'SFWApp.navigate', []

.controller 'navigateCtrl',[()->

]

.config ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)->

	$stateProvider
		
		.state 'home',
			url: '/sidebar'
			cache: false	
			controller: 'sidebarCtrl'					
			templateUrl: 'views/home/home.html'

		.state 'init',
			url: '/init'
			cache: false
			controller: 'InitCtrl'					
			templateUrl: 'views/singlevideo/movieScreen.html'

		.state 'singlePlayer',
			url: '/singlePlayer'
			cache: false
			controller: 'playerCtrl'					
			templateUrl: 'views/singlevideo/singlePlayer.html'	

		.state 'landingvideo',
			url: '/landing'
			cache: false
			controller: 'landingCtrl'					
			templateUrl: 'views/landingVideo/splash.html'	



]