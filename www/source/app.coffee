
angular.module 'SFWApp', ['ionic','ngCordova','SFWApp.landing','SFWApp.init','SFWApp.navigate','SFWApp.Global','SFWApp.sidebar', 'ngSanitize','SFWApp.singlePlayer','SFWApp.VideoDetailsAPI','SFWApp.tabs','SFWApp.faq','SFWApp.submit','ionicLazyLoad','ion-affix']

.run ['$rootScope', 'App', '$timeout','Set_Get','$cordovaSplashscreen', ($rootScope, App, $timeout,Set_Get,$cordovaSplashscreen)->

	tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore tag, firstScriptTag
	$rootScope.App = App

	swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination'
					paginationClickable: true
					direction: 'vertical'
						});
	# $cordovaSplashscreen.hide();

	$timeout ->
	  App.navigate 'landingvideo', {}, {}
	  return
	, 1000


	$rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams)->
		App.previousState = from.name
		App.currentState  = to.name

]

