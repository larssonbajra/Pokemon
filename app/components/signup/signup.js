angular.module('PokemonApp.signup', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/signup', {
	    templateUrl: 'app/components/signup/signup.html',
		controller: 'SignupController',
		controller:'TestController'
	
	
		});
	}])
	.controller("SignupController", ['$scope', '$log','$window','UserService','$location', function($scope, $log, $window,UserService,$location ) {
		$log.debug('Signup controller initialized');
		$scope.input={
			username:'',
			password:'',
			confirmPassword:''
		}
		$scope.signup=function(){
			if ($scope.input.password===$scope.input.confirmPassword)
			{
				UserService.signupUser($scope.input.username,$scope.input.password);
				$log.debug('user created');
				$location.path('/game')
			}
			else
			{
				$log.error('USer creation failed');
				alert('Password mismatch. Try again');
			}
			
			
			//$log.info('username is ' +$scope.input.username);
			//$log.info('password is ' +$scope.input.password);
			

		}
		$scope.gotoLogin=function(){
			$window.location.href='#/login'
		}		
	}])

	.controller("TestController", ['$scope', '$log','$window','UserService','$location', function($scope, $log, $window,UserService,$location ) {
		$log.debug('TEst controller initialized');
	$scope.enter=function(){
		alert("JAJAJA");
	}
	}])


	.service("UserService",[function(){
		var user=[];
		var signupUser=function(username,password){
			user.push({username:username,password:password});
		}
		var loginUser=function(username,password){
			for (var i=0;i<user.length;i++)
			{
				if (username===user[i].username && password===user[i].password) 
				{
				
						return true;
					
				
				}

			}
			return false;
		}
		return {
			signupUser:signupUser,
			loginUser:loginUser
		}
	}]);

	//start copying



