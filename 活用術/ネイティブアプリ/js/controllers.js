angular.module('app.controllers', [])

.controller('contactsCtrl', function ($scope, $stateParams, ContactsService) {
	$scope.Contact = { name: '' };
	$scope.Contacts = [];

	$scope.searchContacts = function() {
			ContactsService.searchContacts($scope.Contact.name,function(contacts) {
			$scope.Contacts = contacts;
	      });
		};

	ContactsService.getContacts().then(function(contacts) {
		$scope.Contacts = contacts;
	});
})

.controller('contactCtrl', function ($scope, $stateParams, ContactsService) {
	$scope.Contact = {};

	ContactsService.getContact($stateParams.id).then(function(contact) {
		$scope.Contact = contact;
	});

})
