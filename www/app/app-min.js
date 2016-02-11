var URL,device_height,device_width;URL="http://shortfilm.staging.wpengine.com",device_width="",device_height="";var shortFilmWindow;shortFilmWindow=angular.module("SFWApp",["ionic","ngCordova","ngAnimate","ngSanitize","ion-sticky","ionicLazyLoad","vimeoEmbed","ionic.ion.imageCacheFactory","templates"]),shortFilmWindow.value("ParseConfiguration",{applicationId:"DMhdPZNQAUzklzpPb9Lhp8qHZFjcVU9klP0jxLsO",javascriptKey:"TTrki92xoLK7s4POTGeFk4i2Ynm8tPbPl7QrKl7K",clientKey:"gsGvDg9ZkEqzwqYZiFsTZZsMQxdCQ9EcNbrTWAY5",masterKey:"LALmaz73J44ndeC2n7vuuySMVLGHUSTEQADmJPKN",installationId:""}),shortFilmWindow.run(["$ionicPlatform","$state","$rootScope","App","$timeout","$window","$cordovaNetwork","$cordovaToast","DetailsAPI","ParseConfiguration",function(e,t,i,n,r,o,a,l,s,c){return e.ready(function(){var e,t;return i.App=n,t=o.innerWidth,e=o.innerHeight,n.navigate("appInitialize")}),FastClick.attach(document.body),i.$on("$stateChangeSuccess",function(e,t,r,o,a){return"notifications"===t.name?i.pageHeader="Notifications":i.pageHeader="Shortfilm Window",""===o.name&&"init"===t.name?n.fromNotification=1:n.previousState=o.name,n.currentState=t.name}),i.$on("$stateChangeStart",function(e,t,i,n,r){return""!==n.name&&"appInitialize"===t.name?(console.log("prevent"),e.preventDefault()):void 0})}]),shortFilmWindow.config(["$compileProvider",function(e){return e.debugInfoEnabled(!1)}]),shortFilmWindow.factory("App",["$state","$ionicHistory","$window","$cordovaNetwork",function(e,t,i,n){var r;return r=void 0,r={start:!0,unreadNotifications:0,menuEnabled:{left:!1,right:!1},previousState:"",currentState:"",fromNotification:0,notificationPayload:[],navigate:function(i,n,r){var o,a;return o=void 0,a=void 0,null===n&&(n={}),null===r&&(r={}),_.isEmpty(r)||(o=_.has(r,"animate")?r.animate:!1,a=_.has(r,"back")?r.back:!1,t.nextViewOptions({disableAnimate:!o,disableBack:!a})),e.go(i,n)},getbackView:function(){return console.log(t.backView())},goBack:function(i){return this.fromNotification?(this.fromNotification=0,e.go("popular")):t.goBack(i)},isAndroid:function(){return ionic.Platform.isAndroid()},isIOS:function(){return ionic.Platform.isIOS()},isWebView:function(){return ionic.Platform.isWebView()},isOnline:function(){return this.isWebView()?(console.log(n.getNetwork()),n.isOnline()):navigator.onLine},deviceUUID:function(){return this.isWebView()?device.uuid:"DUMMYUUID"},hideKeyboardAccessoryBar:function(){return i.cordova&&i.cordova.plugins.Keyboard?$cordovaKeyboard.hideAccessoryBar(!0):void 0}}}]),shortFilmWindow.directive("ajError",[function(){return{restrict:"E",replace:!0,templateUrl:"views/Global/error.html",scope:{tapToRetry:"&",errorType:"="},link:function(e,t,i){var n,r,o;switch(e.errorType){case"offline":r="No internet availability",o="Error",n="Retry";break;case"server_error":r="Could not connect to server";break;case"no_Search_result":r="No results found",o="Result",n="Close";break;default:r="Something Went Wrong",o="Error",n="Retry"}return e.errorMsg=r,e.errorTitle=o,e.button=n,e.onTryAgain=function(){return e.tapToRetry()}}}}]),shortFilmWindow.factory("share",["$q","App","$http",function(e,t,i){var n;return n={},n.shareNative=function(e,t){var i;if(null==t&&(t=""),console.log("Sharing video"),window.plugins&&window.plugins.socialsharing){switch(t){case"":i=URL+"/"+e;break;default:i=URL+"/"+t+"/"+e}return window.plugins.socialsharing.share(null,"shortFilm Window",null,i,function(){return console.log("Success")},function(e){return console.log("Share fail "+e)})}return console.log("Share plugin not available")},n}]),shortFilmWindow.controller("playerCtrl",["$scope","$sce","DetailsAPI","$ionicHistory","App","$timeout",function(e,t,i,n,r,o){var a,l,s;return e.videoDetails=i.singleVideoarray,e.videourl=e.videoDetails.singleVideoarray.videourl,console.log(e.videourl),e.switchHeaderBar=!0,o(function(){return e.switchHeaderBar=!e.switchHeaderBar},5e3),e.toggleHeader=function(){return e.switchHeaderBar=!e.switchHeaderBar,o(function(){return e.switchHeaderBar=!e.switchHeaderBar,e.$apply()},5e3)},e.view={back:function(){var e;return e=-1,r.goBack(e)},vType:e.videoDetails.singleVideoarray.type,vimomeo:!0,init:function(){var i,n;return"vimeo"===this.vType?(i=e.videoDetails.singleVideoarray.embedurl,this.vimomeo=!0,e.player1=t.trustAsResourceUrl(i)):(this.vimomeo=!1,n=new YT.Player("player2",{height:"100%",width:"100%",videoId:e.videourl,playerVars:{autoplay:1,rel:0,wmode:"transparent",modestbranding:1},events:{onReady:a,onStateChange:l}}))}},a=function(e){return e.target.playVideo()},l=function(e){var t;return e.data!==YT.PlayerState.PLAYING||t?void 0:(setTimeout(s,6e3),t=!0)},s=function(){return player.stopVideo()}}]),shortFilmWindow.controller("watchlistCtrl",["$scope","Storage","DetailsAPI","App","$window","$ionicScrollDelegate","$timeout",function(e,t,i,n,r,o,a){return e.watchlistDetails=[],e.display="loader",e.watchFlag="0",e.refreshSwiper=!0,e.addvideoDetails=[],e.init=function(){return e.getData()},e.getData=function(){return t.watchlistDetails("get").then(function(t){var i,n;return e.watchlistDetails=t,_.isNull(e.watchlistDetails)?(e.display="no_result",e.$apply()):e.watchlistDetails.length>0?(n=r.innerWidth,i=r.innerHeight,console.log(n),console.log(i),e.used_height=115,e.hgt=i-e.used_height,e.display="result",e.$apply()):(e.display="no_result",e.$apply())})},e.updatewatchlist=function(t){return console.log(t),e.CheckWatchlist(t),o.resize()},e.singleplay=function(e){return console.log(e),i.videoId=e,console.log(i.videoId),console.log("enterd single play ."),n.navigate("init")},e.singlePlayService=function(e){return console.log(e),i.singleVideoarray.movie_id=e.movie_id,i.singleVideoarray.singleVideoarray=e,n.navigate("init")},e.CheckWatchlist=function(i){var n;return n=_.findLastIndex(e.watchlistDetails,{movie_id:i}),console.log("remove from watchlist",n),e.watchlistDetails.splice(n,1),t.watchlistDetails("set",e.watchlistDetails),_.isNull(e.watchlistDetails)||0===e.watchlistDetails.length?e.display="no_result":(e.refreshSwiper=!1,a(function(){var t,i;return e.refreshSwiper=!0,i=r.innerWidth,t=r.innerHeight,console.log(i),console.log(t),e.used_height=115,e.hgt=t-e.used_height},100))}}]),shortFilmWindow.factory("DetailsAPI",["$q","App","$http","$ImageCacheFactory",function(e,t,i,n){var r;return r={},r.videoId="",r.array_addition=[],r.array_noteworthy=[],r.array_awplaylist=[],r.genre_array=[],r.playlist_array=[],r.Global_array=[],r.GlobalChild_array=[],r.Filter=[],r.Sort=[],r.array=[],r.singleVideoarray=[],r.imagArray=[],r.initialize=0,r.GetVideoDetails=function(){var t;return t=e.defer(),i.get(URL+"/wp-json/get_defaults").then(function(e){return console.log(e),t.resolve(e.data)},function(e){return t.reject(e)}),t.promise},r.GetSingleVideo=function(t){var n;return n=e.defer(),i.get(URL+("/wp-json/get_video?id="+t)).then(function(e){return n.resolve(e.data)},function(e){return n.reject(e)}),n.promise},r.searchResult=function(t){var n;return n=e.defer(),i.get(URL+("/wp-json/search?str="+t)).then(function(e){return n.resolve(e.data)},function(e){return n.reject(e)}),n.promise},r.setData=function(e){return null==e&&(e={}),r.array=e.premiere,r.array_addition=e.new_addition,r.array_noteworthy=e.noteworthy,r.array_awplalist=e.awesome_playlist,r.genre_array=e.genre,r.playlist_array=e.playlist,r.initialize=1},r}]),shortFilmWindow.factory("PulltorefreshAPI",["$q","App","$http","DetailsAPI",function(e,t,i,n){var r;return r={},r.pullrequest=function(){var t;return t=e.defer(),i.get(URL+"/wp-json/get_defaults").then(function(e){return console.log("succ"),console.log(e),t.resolve(e.data)},function(e){return console.log("eroor"),t.reject(e)}),t.promise},r.saveData=function(e){return null==e&&(e={}),console.log(e),n.array=e.premiere,n.array_addition=e.new_addition,n.array_noteworthy=e.noteworthy,n.array_awplalist=e.awesome_playlist,n.genre_array=e.genre,n.playlist_array=e.playlist},r}]),shortFilmWindow.directive("isLoaded",function(){return{scope:!1,restrict:"A",link:function(e,t,i){return e.$last?(e.$emit("content-changed"),console.log("page Is Ready!")):void 0}}}),shortFilmWindow.directive("scrollWatch",function(e){return function(t,i,n){var r,o;return r=0,o=150,i.bind("scroll",function(t){return t.detail.scrollTop-r>o?e.slideHeader=!0:e.slideHeader=!1,e.slideHeaderPrevious>=t.detail.scrollTop-r&&(e.slideHeader=!1),e.slideHeaderPrevious=t.detail.scrollTop-r,e.$apply()})}}),shortFilmWindow.directive("swiper",function(){return{link:function(e,t,i){return e.$on("content-changed",function(){return new Swiper(t,{direction:"vertical",pagination:".swiper-pagination",paginationClickable:!0,speed:150,loop:!1})})}}}),shortFilmWindow.controller("InitCtrl",["$scope","$sce","App","DetailsAPI","$ionicLoading","$ionicHistory","share","Storage","InitialiseService","ParseNotificationService","$rootScope",function(e,t,i,n,r,o,a,l,s,c,u){var d,h,g;return e.Videodetails=[],e.addvideoDetails=[],e.getwatchlistDetails=[],e.watchFlag="0",e.intFlag="0",e.watchlistimg="",e.showLoaderOrSynopsis=!0,e.showVideo=!1,e.share=function(e){return console.log("social sharing "),a.shareNative(e)},e.addwatchlist=function(){return e.CheckWatchlist()},e.checkIfaddedlist=function(){return l.watchlistDetails("get").then(function(t){var i;if(console.log(t),e.getwatchlistDetails=t,_.isNull(e.getwatchlistDetails)||0===e.getwatchlistDetails.length)return console.log("new video  entry"),e.watchlistimg="icon-favorite",e.$apply();for(i=0;i<e.getwatchlistDetails.length;)e.getwatchlistDetails[i].movie_id===e.Videodetails.movie_id?(console.log("Movie already added "),e.intFlag="1"):console.log("New movie entry "),i++;return"1"===e.intFlag?(e.watchlistimg="icon-unfavorite",e.$apply()):(e.watchlistimg="icon-favorite",e.$apply())})},e.CheckWatchlist=function(){return l.watchlistDetails("get").then(function(t){var i,r;return e.getwatchlistDetails=t,_.isNull(e.getwatchlistDetails)||0===e.getwatchlistDetails.length?(console.log("first entry"),e.addvideoDetails.push(n.singleVideoarray),l.watchlistDetails("set",e.addvideoDetails),e.watchlistimg="icon-unfavorite",e.$apply()):(console.log("some data present"),i=_.findLastIndex(e.getwatchlistDetails,{movie_id:n.singleVideoarray.movie_id}),-1!==i?(console.log("remove from watchlist"),e.getwatchlistDetails.splice(i,1),r=e.getwatchlistDetails,e.addvideoDetails=r,l.watchlistDetails("set",e.addvideoDetails),e.watchlistimg="icon-favorite",e.$apply()):(console.log("add"),e.getwatchlistDetails.push(n.singleVideoarray),r=e.getwatchlistDetails,e.addvideoDetails=r,l.watchlistDetails("set",e.addvideoDetails),e.watchlistimg="icon-unfavorite",e.$apply()))})},e.init=function(t){return null==t&&(t=""),console.log(t),angular.isUndefined(n.singleVideoarray.movie_id)?n.GetSingleVideo(t).then(function(t){return function(t){var i;return e.display="result",i={movie_id:t.movie_id,singleVideoarray:t},n.singleVideoarray=i,e.Videodetails=t,e.Videodetails,e.showLoaderOrSynopsis=!1,document.getElementById("synopsis").outerHTML=e.Videodetails.content,e.initPlayer()}}(this),function(t){return function(t){return e.display="error"}}(this)):(e.display="result",e.Videodetails=n.singleVideoarray.singleVideoarray,console.log(e.Videodetails),n.GetSingleVideo(n.singleVideoarray.movie_id).then(function(t){return e.showLoaderOrSynopsis=!1,document.getElementById("synopsis").outerHTML=t.content}),e.checkIfaddedlist(),e.initPlayer())},e.initPlayer=function(){var i,r;return e.vType=n.singleVideoarray.singleVideoarray.type,e.videourl=n.singleVideoarray.singleVideoarray.videourl,"vimeo"===e.vType?(i=n.singleVideoarray.singleVideoarray.embedurl,console.log(i),e.player1=t.trustAsResourceUrl(i),console.log(e.player1)):(console.log(e.videourl),r=new YT.Player("player2",{height:"100%",width:"100%",videoId:e.videourl,playerVars:{autoplay:0,rel:0,wmode:"transparent",modestbranding:1},events:{onReady:d,onStateChange:h}}))},d=function(e){return e.target.playVideo()},h=function(e){var t;return e.data!==YT.PlayerState.PLAYING||t?void 0:(setTimeout(g,6e3),t=!0)},g=function(){return player.stopVideo()},e.initializeApp=function(){return console.log(i.notificationPayload.payload.notificationId),e.display="loader",c.updateNotificationStatus(i.notificationPayload.payload.notificationId).then(function(t){return console.log(t),e.init(n.videoId)})["catch"](function(t){return console.log(t),e.init(n.videoId)})},e.$on("$ionicView.afterEnter",function(){return console.log("after enter")}),e.view={back:function(){var e;return n.singleVideoarray=[],e=-1,i.goBack(e)},playVideo:function(){return e.showVideo=!0}},i.fromNotification?e.initializeApp():e.init(),e.showSynopsisDiv=!1}]),shortFilmWindow.controller("appInitializeCtrl",["$scope","App","DetailsAPI","InitialiseService","ParseConfiguration","$rootScope",function(e,t,i,n,r,o){return e.initApp=function(){var i,a;return Parse.initialize(r.applicationId,r.javascriptKey,r.masterKey),t.isWebView()&&(ParsePushPlugin.getInstallationObjectId(function(e){return r.installationId=e},function(e){return r.installationId=0}),window.ParsePushPlugin.on("openPN",function(e){return o.$broadcast("openNotification",{payload:e})}),window.ParsePushPlugin.on("receivePN",function(e){return o.$broadcast("receiveNotification",{payload:e})})),a=document.createElement("script"),a.src="https://www.youtube.com/iframe_api",i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(a,i),e.display="loader",e.errorType="offline",n.initialize().then(function(i){return t.isOnline()?t.navigate("popular"):e.display="error"},function(t){return e.display="error"})}}]),shortFilmWindow.controller("navigateCtrl",[function(){}]).config(["$stateProvider","$urlRouterProvider",function(e,t){return e.state("appInitialize",{url:"/appInitialize","abstract":!1,controller:"appInitializeCtrl",templateUrl:"landingVideo/appInitialize.html"}).state("home",{url:"/sidebar","abstract":!0,controller:"sidebarCtrl",templateUrl:"home/home.html"}).state("tabhome",{url:"/homeTab",parent:"home","abstract":!0,views:{homeview:{templateUrl:"home/homeTab.html"}}}).state("popular",{url:"/popular",parent:"tabhome",views:{popularContent:{templateUrl:"tabs/popular/popular.html",controller:"popularCtrl"}}}).state("genre",{cache:!0,url:"/genre",parent:"tabhome",views:{genreContent:{templateUrl:"tabs/genre/genre.html",controller:"genreCtrl",params:{data:null}}}}).state("playlist",{url:"/playlist",parent:"tabhome",views:{playlistContent:{templateUrl:"tabs/playlist/playlist.html",controller:"playlistCtrl"}}}).state("watchList",{url:"/watchList",cache:!1,parent:"home",views:{homeview:{templateUrl:"watchlist/myWatchlist.html",controller:"watchlistCtrl"}}}).state("notifications",{url:"/notifications",cache:!1,parent:"home",views:{homeview:{templateUrl:"notification/notifications.html",controller:"notificationsCtrl"}}}).state("init",{url:"/init",cache:!1,controller:"InitCtrl",templateUrl:"singlevideo/movieScreen.html"}).state("singlePlayer",{url:"/singlePlayer",cache:!1,controller:"playerCtrl",templateUrl:"singlevideo/singlePlayer.html"}).state("landingvideo",{url:"/landing",cache:!1,controller:"landingCtrl",templateUrl:"landingVideo/splash.html"}).state("navbar",{url:"/navbar","abstract":!1,templateUrl:"home/navBar.html"}).state("singleGenre",{url:"/singleGenre",cache:!1,controller:"singleGenre",templateUrl:"tabs/genre/singleGenre.html"}).state("singlePlaylist",{url:"/singlePlaylist",cache:!1,controller:"singlePlaylist",templateUrl:"tabs/playlist/singlePlaylist.html"})}]),shortFilmWindow.controller("notificationsCtrl",["$rootScope","$scope","App","PulltorefreshAPI","DetailsAPI","$ionicLoading","$stateParams","ParseNotificationService","Storage","$timeout","$window",function(e,t,i,n,r,o,a,l,s,c,u){return t.notificationArray=[],e.$on("receiveNotification",function(e,i){return t.getNotifications()}),t.getNotifications=function(){return t.hgt=u.innerHeight-88,i.isOnline()?(t.result="loader",s.watchlistDetails("get").then(function(e){return _.isNull(e)&&(e=[]),t.getwatchlistDetails=e,l.getNotificationsWithStatus().then(function(e){return 0===e.length?(t.result="no-new-notifications",t.initWatchlist):(t.refreshSwiper=!1,t.notificationArray=e,c(function(){return t.refreshSwiper=!0,t.result="display"},50))})["catch"](function(e){return t.result="error"})})):t.result="error"},t.clearNotifications=function(){return i.isOnline()?(t.notificationArray=[],t.result="no-new-notifications",e.unreadNotificationCount=0,l.deleteNotifications().then(function(e){return console.log(e)})["catch"](function(e){return t.result="error"})):t.result="error"},t.markNotificationAsRead=function(n){var r;return i.isOnline()?(r=_.findLastIndex(t.notificationArray,{notificationId:""+n}),console.log(r),t.notificationArray[r].status="read",e.unreadNotificationCount&&e.unreadNotificationCount--,l.updateNotificationStatus(n).then(function(e){return console.log(e)})["catch"](function(e){return t.result="error"})):t.result="error"},t.checkIfaddedToWatchList=function(e){var i;return t.getwatchlistDetails.length>0?(i=_.findIndex(t.getwatchlistDetails,{movie_id:e}),-1!==i?"selected":"notselected"):"notselected"},t.findIndexInWatchlist=function(e){var i;return i=_.findIndex(t.getwatchlistDetails,{movie_id:e})},t.addwatchlist=function(e,i){var n,r;return t.markNotificationAsRead(i),r={movie_id:e.movie_id,singleVideoarray:e},n=t.findIndexInWatchlist(e.movie_id),-1===n?(t.getwatchlistDetails.push(r),s.watchlistDetails("set",t.getwatchlistDetails)):(t.getwatchlistDetails.splice(n,1),s.watchlistDetails("set",t.getwatchlistDetails))},t.singlePlayService=function(e,n){return t.markNotificationAsRead(n),r.singleVideoarray.movie_id=e.movie_id,r.singleVideoarray.singleVideoarray=e,i.navigate("init")}}]),shortFilmWindow.service("InitialiseService",["$q","DetailsAPI","App","$rootScope","$ImageCacheFactory",function(e,t,i,n,r){return{initialize:function(){var o;return o=void 0,o=void 0,o=e.defer(),i.isOnline()?t.GetVideoDetails().then(function(e){return n.vData=e}).then(function(e){return r.Cache([e.defaults.content.popular.weekly_premiere.image]).then(function(e){return console.log(e)})["finally"](function(){return t.setData({premiere:n.vData.defaults.content.popular.weekly_premiere,new_addition:n.vData.defaults.content.popular.new_additions,noteworthy:n.vData.defaults.content.popular.noteworthy,awesome_playlist:n.vData.defaults.content.popular.awesome_playlist,genre:n.vData.defaults.content.genre,playlist:n.vData.defaults.content.playlists})}).then(function(e){return console.log(e),o.resolve(n.vData)})}):o.reject(),o.promise}}}]),shortFilmWindow.service("ParseNotificationService",["$q","$window","ParseConfiguration","$rootScope",function(e,t,i,n){return{getNotificationsWithStatus:function(){var t,n;return t=e.defer(),n=i.installationId,Parse.Cloud.run("listAllNotificationsForUser",{installation_id:n},{success:function(e){var i;i=[],_.each(e,function(e){var t,n;return t={},e.attributes.notificationId.attributes.movieDetails&&(t=angular.fromJson(decodeURIComponent(e.attributes.notificationId.attributes.movieDetails))),n={fromnow:moment(e.attributes.createdAt).fromNow(),createdAt:e.attributes.createdAt,notificationId:e.attributes.notificationId.id,installationId:e.attributes.installationId.id,alert:e.attributes.notificationId.attributes.alert,movieDetails:t,status:e.attributes.status},i.push(n)}),t.resolve(i)},error:function(e){t.reject(e)}}),t.promise},getUnreadNotificationsCount:function(){var t,n;return t=e.defer(),n=i.installationId,Parse.Cloud.run("countUnreadNotifications",{installation_id:n},{success:function(e){t.resolve(e)},error:function(e){console.log(e),t.reject("0")}}),t.promise},updateNotificationStatus:function(t){var n,r;return n=e.defer(),r=i.installationId,Parse.Cloud.run("updateNotificationStatusAsRead",{installation_id:r,notification_id:t},{success:function(e){n.resolve(e)},error:function(e){n.reject(e)}}),n.promise},deleteNotifications:function(){var t,n;return t=e.defer(),n=i.installationId,Parse.Cloud.run("deleteAllNotification",{installation_id:n},{success:function(e){t.resolve(e)},error:function(e){t.reject(e)}}),t.promise}}}]),shortFilmWindow.controller("sidebarCtrl",function(e,t,i,n,r,o,a,l,s,c,u){e.showsearchbar=!1,e.display="tabview",e.errorType="",e.SearchResult=[],e.classname="",e.watchListCount="0",e.afterSearch=!1,t.unreadNotificationCount=0,e.getwatchlistDetails=[],e.checkIfaddedToWatchList=function(t){var i;return e.getwatchlistDetails.length>0?(i=_.findIndex(e.getwatchlistDetails,{movie_id:t}),-1!==i?"selected":"notselected"):"notselected"},e.findIndexInWatchlist=function(t){var i;return i=_.findIndex(e.getwatchlistDetails,{movie_id:t})},e.addwatchlist=function(t){var i,n;return console.log(t),n={movie_id:t.movie_id,singleVideoarray:t},i=e.findIndexInWatchlist(t.movie_id),-1===i?(e.getwatchlistDetails.push(n),c.watchlistDetails("set",e.getwatchlistDetails)):(e.getwatchlistDetails.splice(i,1),c.watchlistDetails("set",e.getwatchlistDetails))},t.$on("openNotification",function(e,i){return o.fromNotification=1,a.videoId=131,t.unreadNotificationCount&&t.unreadNotificationCount--,o.notificationPayload=i,o.navigate("init")}),t.$on("receiveNotification",function(e,i){return t.unreadNotificationCount++}),e.device_height=s.innerHeight,e.hgt=parseInt(e.device_height)-parseInt(45),e.getwatchlistcount=function(){return c.watchlistDetails("get").then(function(t){return _.isNull(t)&&(t=[]),e.watchlistDetails=t,0===e.watchlistDetails.length?(e.watchListCount="0",e.$apply()):e.watchlistDetails.length>0?(e.watchListCount=e.watchlistDetails.length,e.$apply()):(e.watchListCount="0",e.$apply())})},t.getnotificationcount=function(){return u.getUnreadNotificationsCount().then(function(e){return t.unreadNotificationCount=e})},e.singlePlayService=function(e){return a.singleVideoarray.movie_id=e.movie_id,a.singleVideoarray.singleVideoarray=e,o.navigate("init")},e.searchMovie=function(){return c.watchlistDetails("get").then(function(t){var i,n;return _.isNull(t)&&(t=[]),e.watchlistDetails=t,console.log(e.watchlistDetails),e.afterSearch=!1,i=document.getElementById("autocomplete"),n=i.value,e.display="loader",a.searchResult(n).then(function(t){return function(t){var i,n;return e.afterSearch=!0,e.SearchResult=t,n=s.innerWidth,i=s.innerHeight,e.used_height=32,e.hgt=i-e.used_height,0===e.SearchResult.length?(e.errorType="no_Search_result",e.display="error"):(e.classname="searchResult",e.display="searchresult")}}(this),function(t){return function(t){return e.errorType="offline",e.display="error"}}(this))})},e.onTapToRetry=function(){return console.log(e.errorType),""===e.errorType?e.searchMovie():e.hideSearch()},e.hideSearch=function(){return console.log("hide Search Bar"),e.display="tabview"},e.SeacrchClicked=function(){return console.log("search"),e.showsearchbar=!0},e.hide=function(){return l.hide(),{hideOnStateChange:!1}},e.displayWeb=function(e){return r.toggleLeft(),window.open(e,"_system"),!0},e.submit=function(){return o.navigate("onlineSubmit")},e.slideContent=function(){e.getwatchlistcount(),r.toggleLeft()},e.openModal=function(){e.taskModal.show()},e.closeModal=function(){e.taskModal.hide()},e.showPopup=function(){var t;e.data={},t=n.show({template:'<input class="padding" type="password" ng-modal="data-wifi">',title:"Enter Wi-Fi Password",subTitle:"Please use normal things",scope:e,buttons:[{text:"Cancel"},{text:"Save",cssClass:"test",type:"button-positive"}]})}}),shortFilmWindow.factory("Storage",["$rootScope",function(e){var t;return t={},t.watchlistDetails=function(t,i){switch(t){case"set":return localforage.setItem("watchlist_details",i,function(t,n){return console.log("update",n),e.$broadcast("watchListUpdate",i)});case"get":return localforage.getItem("watchlist_details");case"remove":return localforage.removeItem("watchlist_details")}},t}]),shortFilmWindow.controller("playlistCtrl",["$scope","App","PulltorefreshAPI","DetailsAPI","$ionicLoading",function(e,t,i,n,r){return e.doRefresh=function(){return i.pullrequest().then(function(t){return function(t){return console.log(t.defaults.content.popular.weekly_premiere.image),i.saveData({premiere:t.defaults.content.popular.weekly_premiere,new_addition:t.defaults.content.popular.new_additions,noteworthy:t.defaults.content.popular.noteworthy,awesome_playlist:t.defaults.content.popular.awesome_playlist,genre:t.defaults.content.genre,playlist:t.defaults.content.playlists}),e.playlist=n.playlist_array,e.$broadcast("scroll.refreshComplete"),r.hide()}}(this),function(t){return function(t){return e.$broadcast("scroll.refreshComplete"),console.log("Error Loading data"),r.hide()}}(this))},e.test=function(){return e.playlist=n.playlist_array},e.singleplaylist=function(e){return console.log(e),n.videoId=e,console.log(n.videoId),t.navigate("singlePlaylist")}}]),shortFilmWindow.factory("PlaylistAPI",["$q","App","$http",function(e,t,i){var n;return n={},n.GetSingleplaylist=function(t){var n;return n=e.defer(),i.get(URL+("/wp-json/get_playlist_videos/?playlist_id="+t)).then(function(e){var t;return t=angular.fromJson(e.data),n.resolve(t)},function(e){return console.log("eroor"),n.reject(e)}),n.promise},n}]),shortFilmWindow.controller("singlePlaylist",["$scope","$rootScope","$ionicScrollDelegate","$ionicLoading","App","PlaylistAPI","DetailsAPI","$ionicHistory","share","$window","$timeout","Storage",function(e,t,i,n,r,o,a,l,s,c,u,d){return e.display="loader",e.getwatchlistDetails=[],t.slideHeader=!1,t.slideHeaderPrevious=0,e.checkIfaddedToWatchList=function(t){var i;return e.getwatchlistDetails.length>0?(i=_.findIndex(e.getwatchlistDetails,{movie_id:t}),-1!==i?"selected":"notselected"):"notselected"},e.findIndexInWatchlist=function(t){var i;return i=_.findIndex(e.getwatchlistDetails,{movie_id:t})},e.addwatchlist=function(t){var i,n;return console.log(t),n={movie_id:t.movie_id,singleVideoarray:t},i=e.findIndexInWatchlist(t.movie_id),-1===i?(e.getwatchlistDetails.push(n),d.watchlistDetails("set",e.getwatchlistDetails)):(e.getwatchlistDetails.splice(i,1),d.watchlistDetails("set",e.getwatchlistDetails))},e.share=function(e){return s.shareNative(e,"playlist")},e.init=function(){return d.watchlistDetails("get").then(function(t){var i,r;return _.isNull(t)&&(t=[]),e.getwatchlistDetails=t,a.GlobalChild_array.length>0?(e.playlistData=a.GlobalChild_array,e.playlist=a.Global_array,e.display="result",r=c.innerWidth,i=c.innerHeight,e.used_height=164,e.hgt=i-e.used_height,e.headerwidth=r-100-27,console.log(e.playlist)):(e.display="loader",o.GetSingleplaylist(a.videoId).then(function(t){return function(t){return a.Global_array=t.playlist,a.GlobalChild_array=t.movies,e.playlistData=t.movies,e.playlist=t.playlist,e.display="result",r=c.innerWidth,i=c.innerHeight,e.used_height=164,e.hgt=i-e.used_height,e.headerwidth=r-100-27,n.hide(),console.log(e.playlist)}}(this),function(t){return function(t){return e.display="error",n.hide()}}(this)))})},e.singlePlayService=function(e){return a.singleVideoarray.movie_id=e.movie_id,a.singleVideoarray.singleVideoarray=e,r.navigate("init")},e.back=function(){var e;return a.Global_array=[],a.GlobalChild_array=[],e=-1,r.goBack(e)}}]),shortFilmWindow.controller("genreCtrl",["$rootScope","$scope","App","PulltorefreshAPI","DetailsAPI","$ionicLoading","$stateParams",function(e,t,i,n,r,o,a){return t.notificationPayload=a.data,t.doRefresh=function(){return n.pullrequest().then(function(e){return function(e){return console.log(e.defaults.content.popular.weekly_premiere.image),n.saveData({premiere:e.defaults.content.popular.weekly_premiere,new_addition:e.defaults.content.popular.new_additions,noteworthy:e.defaults.content.popular.noteworthy,awesome_playlist:e.defaults.content.popular.awesome_playlist,genre:e.defaults.content.genre,playlist:e.defaults.content.playlists}),t.genreobj=r.genre_array,t.$broadcast("scroll.refreshComplete"),o.hide()}}(this),function(e){return function(e){return t.$broadcast("scroll.refreshComplete"),console.log("Error Loading data"),o.hide()}}(this))},t.init=function(){return t.genre=r.genre_array,console.log(t.genre)},t.singleGenre=function(e){return r.videoId=e,i.navigate("singleGenre")}}]),shortFilmWindow.factory("GenreAPI",["$q","App","$http",function(e,t,i){var n;return n={},n.GetSingleGenre=function(t){var n;return console.log(t),n=e.defer(),i.get(URL+("/wp-json/get_genre_videos?genre_id="+t)).then(function(e){return console.log("single genre data succ"),console.log(e),n.resolve(e.data)},function(e){return console.log("eroor"),n.reject(e)}),n.promise},n.ApplyFilter=function(t){var n;return console.log(t),n=e.defer(),i.get(URL+("/wp-json/get_genre_videos?genre_id="+t[0]+"&sort_key="+t[1]+"&language_id="+t[2])).then(function(e){return console.log("single video data succ"),console.log(e),n.resolve(e.data)},function(e){return console.log("eroor"),n.reject(e)}),n.promise},n}]),shortFilmWindow.controller("singleGenre",["$scope","$ionicLoading","App","GenreAPI","DetailsAPI","$ionicHistory","share","$window","Storage","$timeout",function(e,t,i,n,r,o,a,l,s,c){return e.lang=null,e.sort_key=null,e.errorType="",e.filterimg="img/icons/filter_grey.png",e.sortimg="img/icons/sort_notapplied.png",e.display="loader",e.Popuparray=[],e.PopuparrayClicked=["img/icons/fresh_red.png","img/icons/popularity_red.png","img/icons/length-Red.png"],e.PopuparrayImages=["img/icons/fresh_grey.png","img/icons/popularity_grey.png","img/icons/length_grey.png"],e.refreshSwiper=!0,e.share=function(e){return a.shareNative(e,"category")},e.checkIfaddedToWatchList=function(t){var i;return e.getwatchlistDetails.length>0?(i=_.findIndex(e.getwatchlistDetails,{movie_id:t}),-1!==i?"selected":"notselected"):"notselected"},e.findIndexInWatchlist=function(t){var i;return i=_.findIndex(e.getwatchlistDetails,{movie_id:t})},e.addwatchlist=function(t){var i,n;return n={movie_id:t.movie_id,singleVideoarray:t},i=e.findIndexInWatchlist(t.movie_id),-1===i?(e.getwatchlistDetails.push(n),s.watchlistDetails("set",e.getwatchlistDetails)):(e.getwatchlistDetails.splice(i,1),s.watchlistDetails("set",e.getwatchlistDetails))},e.init=function(){return s.watchlistDetails("get").then(function(t){var i,o;return _.isNull(t)&&(t=[]),e.getwatchlistDetails=t,r.GlobalChild_array.length>0?(e.genreData=r.GlobalChild_array,e.genre=r.Global_array,e.sortData=r.Sort,e.language=r.Filter,o=l.innerWidth,i=l.innerHeight,e.used_height=161,e.hgt=i-e.used_height,e.display="result",void 0):n.GetSingleGenre(r.videoId).then(function(t){return function(t){return r.GlobalChild_array=t.movies,r.Global_array=t.genre,r.Filter=t.filters.languages,r.Sort=t.sort_keys,e.genreData=t.movies,e.genre=t.genre,e.sortData=t.sort_keys,e.language=t.filters.languages,e.display="result",o=l.innerWidth,i=l.innerHeight,e.used_height=161,e.hgt=i+3-e.used_height}}(this),function(t){return function(t){return e.display="error"}}(this))})},e.sortGenre=function(){return t.show({scope:e,templateUrl:"filterPopup/sortPopupgener.html",hideOnStateChange:!0})},e.langSelected=function(t){return e.lang=t},e.filterGenre=function(){return t.show({scope:e,templateUrl:"filterPopup/filterpopup.html",hideOnStateChange:!0})},e.getId=function(t){return e.sort_key=t,e.Popuparray=["img/icons/fresh_grey.png","img/icons/popularity_grey.png","img/icons/length_grey.png"],e.Popuparray[t]=e.PopuparrayClicked[t],e.txtcolor=["","",""],e.txtcolor[t]="color:#AF152F"},e.popup=function(){return _.isNull(e.sort_key)?e.Popuparray=e.PopuparrayImages:(e.Popuparray=["img/icons/fresh_grey.png","img/icons/popularity_grey.png","img/icons/length_grey.png"],e.Popuparray[e.sort_key]=e.PopuparrayClicked[e.sort_key],e.txtcolor=["","",""],e.txtcolor[e.sort_key]="color:#AF152F")},e.FiltersortApply=function(){var i;return _.isNull(e.lang)?e.filterimg="img/icons/filter_grey.png":e.filterimg="img/icons/filter_red.png",_.isNull(e.sort_key)?e.sortimg="img/icons/sort_notapplied.png":e.sortimg=e.PopuparrayClicked[e.sort_key],i=[r.Global_array.genre_id,e.sort_key,e.lang],t.hide(),e.display="loader",n.ApplyFilter(i).then(function(i){return function(i){return r.GlobalChild_array=i.movies,r.Global_array=i.genre,r.Filter=i.filters.languages,r.Sort=i.sort_keys,r.GlobalChild_array.length>0?(e.display="result",
e.genreData=i.movies,e.genre=i.genre,e.sortData=i.sort_keys,e.language=i.filters.languages,t.hide(),e.refreshSwiper=!1,c(function(){return e.refreshSwiper=!0,e.display="result"},100)):(e.errorType="no_Search_result",e.display="error")}}(this),function(t){return function(t){return e.errorType="",e.display="error"}}(this)),t.hide()},e.hide=function(){return t.hide(),{hideOnStateChange:!1}},e.reset=function(){var i;return e.sortimg="img/icons/sort_notapplied.png",e.filterimg="img/icons/filter_grey.png",e.sort_key=null,e.lang="",i=[r.Global_array.genre_id,e.sort_key,e.lang],t.hide(),e.display="loader",n.ApplyFilter(i).then(function(i){return function(i){return r.GlobalChild_array=i.movies,r.Global_array=i.genre,r.Filter=i.filters.languages,r.Sort=i.sort_keys,e.genreData=i.movies,e.genre=i.genre,e.sortData=i.sort_keys,e.language=i.filters.languages,t.hide(),e.display="result"}}(this),function(i){return function(i){return e.errorType="",e.display="error",t.hide()}}(this))},e.hideNoReset=function(){return e.sortimg="img/icons/sort_notapplied.png",e.filterimg="img/icons/filter_grey.png",e.sort_key=null,e.lang="",t.hide(),{hideOnStateChange:!1}},e.singlePlayService=function(e){return r.singleVideoarray.movie_id=e.movie_id,r.singleVideoarray.singleVideoarray=e,i.navigate("init")},e.back=function(){var e;return r.GlobalChild_array=[],r.Global_array=[],r.Filter=[],r.Sort=[],e=-1,i.goBack(e)},e.view={onTapToRetry:function(){return e.reset(),e.display="loader"}}}]),shortFilmWindow.controller("popularCtrl",["$scope","$rootScope","App","PulltorefreshAPI","DetailsAPI","$ionicLoading","$window","InitialiseService","Storage",function(e,t,i,n,r,o,a,l,s){return e.getwatchlistDetails=[],t.$on("watchListUpdate",function(t,i){return e.getwatchlistDetails=i,e.checkIfaddedlist()}),e.singleplaylist=function(e){return r.videoId=e,i.navigate("singlePlaylist")},e.checkIfaddedlist=function(){return _.each(e.allContentArray,function(t,i){return e.allContentArray[i].addedToWatchList=0}),e.getwatchlistDetails.length>0?_.each(e.getwatchlistDetails,function(t){var i;return i=_.findIndex(e.allContentArray,{movieId:t.movie_id}),-1!==i?e.allContentArray[i].addedToWatchList=1:void 0}):void 0},e.findIndexInallContentArray=function(t){var i;return i=_.findIndex(e.allContentArray,{movieId:t})},e.findIndexInWatchlist=function(t){var i;return i=_.findIndex(e.getwatchlistDetails,{movie_id:t})},e.updateFlagInallContentArray=function(t,i){var n;return n=e.findIndexInallContentArray(t),e.allContentArray[n].addedToWatchList=i},e.addwatchlist=function(t){var i,n;return n={movie_id:t.movieId,singleVideoarray:t.content},i=e.findIndexInWatchlist(t.movieId),-1===i?(e.updateFlagInallContentArray(t.movieId,1),e.getwatchlistDetails.push(n),s.watchlistDetails("set",e.getwatchlistDetails)):(e.updateFlagInallContentArray(t.movieId,0),e.getwatchlistDetails.splice(i,1),s.watchlistDetails("set",e.getwatchlistDetails))},e.doRefresh=function(){return i.isOnline()?n.pullrequest().then(function(t){return function(t){return e.checkNetwork=!0,n.saveData({premiere:t.defaults.content.popular.weekly_premiere,new_addition:t.defaults.content.popular.new_additions,noteworthy:t.defaults.content.popular.noteworthy,awesome_playlist:t.defaults.content.popular.awesome_playlist,genre:t.defaults.content.genre,playlist:t.defaults.content.playlists}),e.premeiere=r.array,e.addition=r.array_addition,e.noteworthy=r.array_noteworthy,e.awplalist=r.array_awplalist,e.videoId=r.array.videoId,e.$broadcast("scroll.refreshComplete"),o.hide()}}(this),function(t){return function(t){return e.$broadcast("scroll.refreshComplete"),i.isOnline?(e.errorType="offline",e.display="error"):(e.classname="no_Search_result",e.display="error"),o.hide()}}(this)):e.checkNetwork=!1},e.singleplay=function(e){return r.videoId=e,i.navigate("init")},e.singlePlayService=function(e){return r.singleVideoarray.movie_id=e.movie_id,r.singleVideoarray.singleVideoarray=e,i.navigate("init")},e.initApp=function(){var t,n;return n=a.innerWidth,t=a.innerHeight,e.used_height=159,e.hgt=t+3-e.used_height,i.isOnline()?(e.initDetailsApi(),e.display="result"):(e.checkNetwork=!1,e.display="nonetwork")},e.initDetailsApi=function(){var t,i,n,o;return o=[],t=[],n=[],i=[],e.allContentArray=[],console.log(r),o.push({order:1,cardtitle:"Weekly Premiere",p:"Carefully handpicked, just for you.",iconimg:"weekly_premiere",content:r.array,addedToWatchList:0,movieId:r.array.movie_id}),t=_.map(r.array_addition,function(e,t,i){return{order:2,cardtitle:"New Additions",p:"Just starting out on their big journey!",iconimg:"new_additions",content:e,addedToWatchList:0,movieId:e.movie_id}}),n=_.map(r.array_noteworthy,function(e,t,i){return{order:3,cardtitle:"Noteworthy",p:"Completely out of the ordinary",iconimg:"noteworthy",content:e,addedToWatchList:0,movieId:e.movie_id}}),i.push({order:4,cardtitle:"Awesome Playlist",p:"Sit back and relax with some popcorn!",iconimg:"awesome_playlists",content:r.array_awplalist,addedToWatchList:0,movieId:""}),e.allContentArray=_.union(o,t,n,i),console.log(e.allContentArray),e.initWatchlist()},e.initWatchlist=function(){return s.watchlistDetails("get").then(function(t){return _.isNull(t)&&(t=[]),e.getwatchlistDetails=t,e.checkIfaddedlist()})}}]);