var imdbControllers = angular.module('imdbControllers', ['ngAnimate']);

// controller for search page (list)
imdbControllers.controller('listController', ['$http', function($http) {

	// bind 'this' to vm (view-model)
	var vm = this;

	// controller variables
	vm.movieData = {}; // imdb250 data
	vm.formData = {};
	vm.formData.query = '';
	vm.formData.sortType = 'rank';

	// loads main data
	$http.get('./data/imdb250.json').success(function(data) {
		vm.movieData = data;
	});

}]);

// controller for gallery page
imdbControllers.controller('galleryController', ['$http', function($http) {

	// bind 'this' to vm (view-model)
	var vm = this;

	// controller variables
	vm.movieData = {}; // imdb250 data
	vm.genres = []; // list of all unique genres
	vm.selectedGenres = []; // currently selected genres to filter with
	vm.filteredMovies = []; // list of movies displayed after filtered by genres

	// loads main data
	$http.get('./data/imdb250.json').success(function(data) {
		vm.movieData = data;
	    vm.loadAllGenres();
	});

	// loads a list of all unique genres
	vm.loadAllGenres = function() {
		// var genres = [];
		for(var i = 0; i < vm.movieData.length; i++) {
			var movie = vm.movieData[i];
			var movieGenres = movie.genre;
			// console.log(movieGenres);
			for(var j = 0; j < movieGenres.length; j++){
				// add genre to genres list if its not already in it
				if(!_.contains(vm.genres, movieGenres[j]))
					vm.genres.push(movieGenres[j]);
			}
		}
		console.log(vm.genres);
	}

}]);

// controller for details page
imdbControllers.controller('detailsController', ['$http', '$routeParams', function($http, $routeParams) {

	// bind 'this' to vm (view-model)
	var vm = this;

	// routing to movie based on rank
	vm.rank = $routeParams.rank
	vm.next = (Number(vm.rank) === 250) ? 1 : (Number(vm.rank) + 1);
	vm.prev = (Number(vm.rank) === 1) ? 250 : (Number(vm.rank) - 1);

	// controller variables
	vm.movieData = {}; // imdb250 data

	// loads main data
	$http.get('./data/imdb250.json').success(function(data) {
		vm.movieData = data;
		vm.current = vm.movieData[vm.rank - 1];
	});

}]);
