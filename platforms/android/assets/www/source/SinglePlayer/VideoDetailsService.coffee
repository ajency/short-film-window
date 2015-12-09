angular.module 'SFWApp.singlePlayer'

.service 'Set_Get', ['$scope'
	,($scope)->
	global={
		VideoSection :''
		SectionImageURL: ''
		SectionText: ''
		imageUrl : ''
		imageid : ''
		no_likes : ''
		no_views : ''
		videotitle : ''
		videotype :''
		videoURL : ''
		videotagline : ''
		videoduration : ''
		director : ''
		country : ''

	}	

	Set_Get =

		setData:(opts={})->
			VideoSection = if _.has(opts, 'VideoSection') then opts.VideoSection else ''
			SectionImageURL = if _.has(opts, 'SectionImageUrl') then opts.SectionImageURL else ''
			SectionText = if _.has(opts, 'SectionText') then opts.SectionText else ''
			imageUrl = if _.has(opts, 'imageUrl') then opts.imageUrl else ''
			imageid = if _.has(opts, 'imageUrl') then opts.imageid else ''
			no_likes = if _.has(opts, 'no_likes') then opts.no_likes else ''
			no_views = if _.has(opts, 'no_likes') then opts.no_views else ''
			videotitle = if _.has(opts, 'no_likes') then opts.videotitle else ''
			videotype = if _.has(opts, 'no_likes') then opts.videotype else ''
			videoURL = if _.has(opts, 'no_likes') then opts.videoURL else ''
			videotagline = if _.has(opts, 'no_likes') then opts.videotagline else ''
			videoduration = if _.has(opts, 'no_likes') then opts.videoduration else ''
			director = if _.has(opts, 'no_likes') then opts.director else ''
			country = if _.has(opts, 'no_likes') then opts.country else ''
	





			






	
]
