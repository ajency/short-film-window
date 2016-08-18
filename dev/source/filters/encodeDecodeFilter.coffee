shortFilmWindow
.filter 'encodeDecodeFilter',->
	(text)->
		htmlEnDeCode.htmlDecode(text)
