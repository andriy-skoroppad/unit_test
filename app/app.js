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
function chakTwoData(data1, data2){
    var tipe1 = tipe(data1);
    var tipe2 = tipe(data2);
    if( tipe1 === tipe2 ){
        if( data1 === data2){
            return true;
        }
    };
    return false;
}

function twoObject( object1, object2){
    var key1 = Object.keys(object1);
    var key2 = Object.keys(object2);
    if( twoArray(key1, key2) ){
        for(var key in object1){
            switch ( tipe( object1[key] ) ) {
                case 'string':
                case 'number':
                    if( !chakTwoData(object1[key], object2[key]) ){
                        return false;
                    };
                    break;
                case 'array':
                    if( !twoArray(object1[key], object2[key]) ){
                        return false;
                    };
                    break;
                case 'object':
                    if( !twoObject(object1[key], object2[key]) ){
                        return false;
                    };
                    break;
                default:
                    return false
                    break;
            };
        }
    } else {
        return false;
    }
    
  return true;  
}
function twoArray( arry1, arry2){
    if(arry1.length == arry2.length){
        for (var i = 0; i < arry1.length; i++) {
            switch ( tipe( arry1[i] ) ) {
                case 'string':
                case 'number':
                    if( !chakTwoData(arry1[i], arry2[i]) ){
                        return false;
                    };
                    break;
                case 'array':
                    if( !twoArray(arry1[i], arry2[i]) ){
                        return false;
                    };
                    break;
                case 'object':
                    if( !twoObject(arry1[i], arry2[i]) ){
                        return false;
                    };
                    break;
                default:
                    return false
                    break;
            };
        };
    } else {
        return false;
    };
    return true;
};

function compareObject(objectOne, objectTwo){
    var tipe1 = tipe(objectOne);
    var tipe2 = tipe(objectTwo);
    if(tipe1 && tipe2 && tipe1 === tipe2 ){
        switch ( tipe1 ) {
                case 'string':
                case 'number':
                    return chakTwoData(objectOne, objectTwo);
                    break;
                case 'array':
                    return twoArray( objectOne, objectTwo);
                    break;
                case 'object':
                    return twoObject( objectOne, objectTwo);
                    break;
            };
    } else {
        return false;
    };
};
var ar1 = [[54, 45], 'aaa', 'dfdf', [10, 25]];
var ar2 = [[54, 45], 'aaa', 'dfdf', [10, 25]];
var obj1 = {a:10, hy: {a:{a:[10, 5], hy: 'ddd'}, hy: 'ddd'}};
var obj2 = {a:10, hy: {a:{a:[10, 5], hy: 'ddd'}, hy: 'ddd'}};
console.log( 'twoArray>>>>>>>', compareObject( ar1, ar2) );
console.log( 'twoObject>>>>>>>', compareObject( obj1, obj2) );