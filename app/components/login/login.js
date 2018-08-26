angular.module('PokemonApp.login', ['ngRoute','PokemonApp.signup'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/login', {
	    templateUrl: 'app/components/login/login.html',
	    controller: 'LoginController'
		});
	}])
	.controller("LoginController", ['$scope', '$log','$location','UserService', function($scope, $log,$location,UserService) {
		$log.debug('Login controller initialized');
		$scope.input={
			username:'',
			password:''
		}
		$scope.login=function(){
			if(UserService.loginUser($scope.input.username,$scope.input.password))
			{
				$log.debug('login successful');
				$location.path('/game');
			}
			else
			{
				$log.error('login error');
				alert('LOGIN ERROR');
			}
			//$log.info('username is ' +$scope.input.username);
			//$log.info('password is ' +$scope.input.password);
			//$log.info('path ' +$location.path());
		}
		
		
		
	}]);
