angular.module 'SFWApp.init',[]

.controller 'InitCtrl', ['$scope'
	 ,($scope)->

	console.log 'In Init'
	YoutubeVideoPlayer.openVideo('XGSy3_Czz8k');



]




