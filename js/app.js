// app
var imdbApp = angular.module('imdbApp', ['ngRoute', 'imdbControllers']);

// routing
imdbApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider

		// route for the list page
        .when('/imdb250', {
            templateUrl : './partials/list.html',
            controller  : 'listController',
            controllerAs: 'lc'
        })

		// route for the gallery page
        .when('/gallery', {
            templateUrl : './partials/gallery.html',
            controller  : 'galleryController',
            controllerAs: 'gc'
        })

        // route for the details page
        .when('/details/:rank', {
            templateUrl : './partials/details.html',
            controller  : 'detailsController',
            controllerAs: 'dc'
        })

        .otherwise({
        	redirectTo: '/imdb250'
        });

}]);