angular.module 'SFWApp.navigate',[]
.controller 'navigateCtrl',[

]

.config ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)->

	$stateProvider
		
		.state 'init',
			url: '/init'
			cache: false
			controller: 'InitCtrl'					
			templateUrl: 'views/init/init.html'
]