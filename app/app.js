var app = angular.module('app', []);
app.controller('myTestContrl', ['$scope', myTestContrl ]);

function myTestContrl($scope){
	//console.log('ddd');
	$scope.data = 'my angular myTestContrl';
    $scope.testWithText = function (text){
        return text + ' -A';
    };
    $scope.testWithMass = function (mass){
        if(mass.length >= 0 && typeof(mass) == 'object'){
            mass.push('upgrade')
            return mass;
        }
        return false
    };

}


