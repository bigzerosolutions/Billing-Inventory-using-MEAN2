(function () {
    'use strict';

    angular
        .module('app')
        .controller('settings', settings);

    settings.$inject = ['$location', '$scope','$http'];
    function settings($location, $scope, $http) 
    {
		$scope.addUser = function(userData)
        {
        	console.log($scope.adminPass);

            $http.post('/addNewUser/' + $scope.adminPass,userData).success(function(response)
            {
          		if (response == true) 
          		{
          			alert("User added successfully")
          		}
          		else
          		{
          			alert("Sorry admin Password is incorrect!")	
          		}
            
            });
        };        

        

    }

})();
