﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('settings', settings);

    settings.$inject = ['$location', '$scope','$http'];
    function settings($location, $scope, $http) 
    {
    	refresh();
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
        $scope.deleteUser = function(del)
    	{
    		console.log($scope.del);
            $http.post('/verifyAdmin',$scope.del).success(function(response)
            {   
                //console.log(response);
                if(response == "true") 
                {
                   refresh();
                }
                
            });
        };
        function refresh()
        {
        	$http.get('/allUsers').success(function(response)
            {
                $scope.options = [{username:""}];
                var values = response;
                var i;
                for(i=0;i<values.length;i++)
                {
                    $scope.options.push({username:values[i].username});
                }    
            });
        }      
    }

})();
