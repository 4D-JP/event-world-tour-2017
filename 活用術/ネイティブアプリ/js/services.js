angular.module('app.services', [])

.factory('ContactsService', ['$http','$q',function($http,$q){
	return {
		getContacts:function() {
			var deferred = $q.defer();
			$http.get("https://172.20.10.2/4DACTION/contacts/").then(function(res) {
				deferred.resolve(res.data);
				});
			return deferred.promise;
		},
		getContact:function(id) {
			var deferred = $q.defer();
			$http.get("https://172.20.10.2/4DACTION/contacts/"+id).then(function(res) {
				deferred.resolve(res.data);
			});
			return deferred.promise;
		},
		searchContacts:function(name, callback) {
			var deferred = $q.defer();
			$http.get("https://172.20.10.2/4DACTION/contacts/"+name).then(function(res) {
				deferred.resolve(res.data);
				callback(res.data);
			});
			return deferred.promise;
		}
	};
}]);
