shortFilmWindow
.directive 'dynFbCommentBox', ->
    createHTML=(href, numposts, colorscheme)->
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-colorsheme="' + colorscheme + '">' +
               '</div>'
   
    restrict: 'A',
    scope: {},
    link: postLink=(scope, elem, attrs)->
     attrs.$observe 'pageHref', (newValue)->
      href        = newValue
      numposts    = attrs.dataNumposts    || 2
      colorscheme = attrs.colorscheme || 'light'
      elem.html(createHTML(href, numposts, colorscheme))
      FB.XFBML.parse(elem[0])