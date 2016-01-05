
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.landing','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar'
					   , 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI','SFWApp.tabs','SFWApp.submit'
					   ,'ion-sticky','ionicLazyLoad','ionic.ion.imageCacheFactory','vimeoEmbed']

.run ['$rootScope', 'App', '$timeout','Set_Get','$cordovaSplashscreen','$window','$cordovaNetwork','$cordovaToast', ($rootScope, App, $timeout,Set_Get,$cordovaSplashscreen,$window, $cordovaNetwork,$cordovaToast)->

	console.log "run method called"
	$rootScope.App = App

#....YouTube Api loading
	tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore tag, firstScriptTag
	#..... device screen size
	device_width = $window.innerWidth;
	device_height = $window.innerHeight;
	console.log device_width
	console.log device_height

	#....swiper initialization
	swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination'
					paginationClickable: true
					direction: 'vertical'
						});


	$timeout ->
		App.navigate 'landingvideo'
		return
	, 5000

	$rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams)->
		App.previousState = from.name
		App.currentState  = to.name

]

