app.controller('listaController', function($scope) {
	$scope.developers = [
	    {"name":"John", "family":"Doe"}, 
	    {"name":"Anna", "family":"Smith"},
	    {"name":"Peter", "family":"Jones"},
	    {"name":"Alex", "family":"Volkov"}, 
	    {"name":"Yaniv", "family":"Smith"},
	]
});

app.controller('DesignCtrl', function($scope) {
	$scope.designers = [
	    {"name":"Inna", "family":"Doe"}, 
	    {"name":"Anna", "family":"Smith"},
	    {"name":"Yafit", "family":"Jones"}
	]
});