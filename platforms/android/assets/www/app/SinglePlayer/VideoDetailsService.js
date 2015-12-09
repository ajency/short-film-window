var Set_Get, global;

angular.module('SFWApp.singlePlayer').service('Set_Get', [
  '$scope', function($scope) {}, global = {
    VideoSection: '',
    SectionImageURL: '',
    SectionText: '',
    imageUrl: '',
    imageid: '',
    no_likes: '',
    no_views: '',
    videotitle: '',
    videotype: '',
    videoURL: '',
    videotagline: '',
    videoduration: '',
    director: '',
    country: ''
  }, Set_Get = {
    setData: function(opts) {
      var SectionImageURL, SectionText, VideoSection, country, director, imageUrl, imageid, no_likes, no_views, videoURL, videoduration, videotagline, videotitle, videotype;
      if (opts == null) {
        opts = {};
      }
      VideoSection = _.has(opts, 'VideoSection') ? opts.VideoSection : '';
      SectionImageURL = _.has(opts, 'SectionImageUrl') ? opts.SectionImageURL : '';
      SectionText = _.has(opts, 'SectionText') ? opts.SectionText : '';
      imageUrl = _.has(opts, 'imageUrl') ? opts.imageUrl : '';
      imageid = _.has(opts, 'imageUrl') ? opts.imageid : '';
      no_likes = _.has(opts, 'no_likes') ? opts.no_likes : '';
      no_views = _.has(opts, 'no_likes') ? opts.no_views : '';
      videotitle = _.has(opts, 'no_likes') ? opts.videotitle : '';
      videotype = _.has(opts, 'no_likes') ? opts.videotype : '';
      videoURL = _.has(opts, 'no_likes') ? opts.videoURL : '';
      videotagline = _.has(opts, 'no_likes') ? opts.videotagline : '';
      videoduration = _.has(opts, 'no_likes') ? opts.videoduration : '';
      director = _.has(opts, 'no_likes') ? opts.director : '';
      return country = _.has(opts, 'no_likes') ? opts.country : '';
    }
  }
]);
