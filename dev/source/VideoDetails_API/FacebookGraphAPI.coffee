shortFilmWindow
.factory 'FacebookGraphAPI',['$q','$http',($q,$http)->

	FacebookAPI={}

	FacebookAPI.comments=[]
	FacebookAPI.graphURL= 'https://graph.facebook.com/comments?id='+ GLOBAL_URL
	FacebookAPI.slug=''
	FacebookAPI.accessToken=''

	FacebookAPI.getAllComments=(slug)->
		defer= $q.defer()
		FacebookAPI.slug= slug
		$http.get FacebookAPI.graphURL+'/'+slug+'/&filter=stream&fields=from,message,user_likes,link,name,caption,description,created_time,updated_time,likes,like_count,comments{from,message,link,name,caption,description,created_time,updated_time,like_count}'
		.then (data)->
			console.log data
			FacebookAPI.comments=data.data
			defer.resolve FacebookAPI.comments
		,(error)->
			defer.reject data

		defer.promise

	FacebookAPI.checkLoginStatus=()->
		defer= $q.defer()
		facebookConnectPlugin.getLoginStatus ((status) ->
		  console.log 'User logged in'
		  console.log status
		  defer.resolve status
		), (error) ->
		  	defer.reject error
	  return defer.promise


	FacebookAPI.loginToFacebook=()->
		defer= $q.defer()
		fbLoginSuccess = (userData) ->
	      console.log 'Login Success'
	      console.log 'UserInfo: ', userData
	      FacebookAPI.accessToken= userData.authResponse.accessToken
	      defer.resolve userData

	    facebookConnectPlugin.login [ 'manage_pages','publish_pages'], fbLoginSuccess, (error) ->
	      console.log 'Login Error'
	      console.error error
	      defer.reject error
	    return defer.promise
				   
		      
		
	FacebookAPI

]