
'use strict';

 function AppCtrl($scope,$http,$location) {
    $scope.form = {};
 	$scope.submitPost=function(){
  	$http.post('/CRUDOper/addInfo',$scope.form).
	  	success(function(post){
	  	$location.path('/');
	  	alert('Thank you...!');
	  	
	  	})
    };
}

AppCtrl.$inject = ['$scope','$http','$location'];

