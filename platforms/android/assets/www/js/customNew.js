var nameApp = angular.module('starter' , ['ionic']);

nameApp.factory('Movies' , function($http){
	var cachedData;

	function getDate(moviename , callback) {
		var url = 'http://api.themoviedb.org/3/' ,
		mode = 'search/movie?query=' ,
		name = '&query=' + encodeURI(moviename) ;
		key = '&api_key=470fd2ec8853e25d2f8d86f685d2270e' ;

		$http.get(url + mode + key + name).success(function(data){
			cachedData = data.results;
			callback(data.results);
		});
	}

	return {
		list: getData,
		find: function(name, callback) {
			console.log(name);
			var movie = cachedData.filter(function(entry) {
				return entry.id == name;
			}) [0];
			callback(movie);
		}
	}
});

nameApp.config(function($stateProvider , $urlRouterProvider) {
	$stateProvider
	.state('list' , {
		url:'/' , 
		templateUrl: 'list.html',
		controller: 'ListCtrl'
	})
	.state('view' , {
		url: '/movie/:movieid' , 
		templateUrl: 'view.html' , 
		controller: 'ViewCtrl'
	})
	$urlRouterProvider.otherwise("/");
});

nameApp.controller('ListCtrl' , function($scope , $http , $stateParams , Movies) {
	$scope.movie = {
		name: ''
	}
	$scope.searchMovieDm = function() {
		Movies.list($scope.movie.name, function(movies) {
			$scope.movies = movies;
		});
	};
});

nameApp.controller('ViewCtrl' , function($scope , $http , $stateParams , Movies) {
	Movies.find($stateParams.movieid , function(movie) {
		$scope.movie = movie;
	})
});