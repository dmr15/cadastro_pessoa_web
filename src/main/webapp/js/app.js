var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/lista', {templateUrl: 'lista.html', controller: 'listaController'}).
		when('/designers',{templateUrl: 'design.html',controller: 'DesignCtrl'}).
		otherwise({ redirectTo: '/index' });
});