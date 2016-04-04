var app = angular.module('app', []);
app.controller('myTestContrl', ['$scope', myTestContrl ]);

function myTestContrl($scope){
    $scope.maris = 10;
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
    $scope.getFrom = function( data,  number ){
        if( !number || typeof (number) == 'object'){
            number = 0;
        }
        if(typeof (number) == 'string'){
            number = number * 1 || 0;
        };
        return data + number;
    }


}

function tipe( object ){
    if(!object && object != 0 && object != ''){
        return false;
    }
    if(typeof (object) == 'object'){
        if( object.length >= 0 ){
            return 'array';
        } else {
            return 'object';
        };
    };
    return typeof (object);
}
