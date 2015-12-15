angular.module 'SFWApp.navigate', []

.controller 'navigateCtrl',[()->

]

.config ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)->

	$stateProvider
		
		.state 'home',
			url: '/sidebar'
			abstract: true	
			controller: 'sidebarCtrl'					
			templateUrl: 'views/home/home.html'

		.state 'popular',
			url: '/popular'
			parent: 'home'
			views: 
				"popularContent":
					templateUrl: 'views/tabs/popular.html'
					controller: 'sidebarCtrl'


		.state 'genre',
			url: '/genre'
			parent: 'home'
			views: 
				"genreContent":
					templateUrl: 'views/tabs/genre.html'
					controller: 'sidebarCtrl'
					

		.state 'playlist',
			url: '/playlist'
			parent: 'home'
			views: 
				"playlistContent":
					templateUrl: 'views/tabs/playlist.html'
					controller: 'sidebarCtrl'						

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