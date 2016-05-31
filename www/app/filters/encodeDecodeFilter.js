shortFilmWindow.filter('encodeDecodeFilter', function() {
  return function(text) {
    return htmlEnDeCode.htmlDecode(text);
  };
});
