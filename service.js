(function() {

angular.module('userProfiles')
	   .service('mainService', function($http, $q) {
			this.getUsers = function() {
				var deferred = $q.defer();
		    $http({
		        method: 'GET',
		        url: 'http://reqres.in/api/users?page=1'
		    }).then(function(res) {
		    	var parsedResponse = res.data.data;
		    	for(var i = 0; i < parsedResponse.length; i++) {
		    		parsedResponse[i].first_name = "Ralf";
		    	}
		    	deferred.resolve(parsedResponse);
		    })
		    return deferred.promise;
		  }

		});

})();
