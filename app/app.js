'use strict';

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
        };
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
    };
};

var ar1 = [[54, 45], 'aaa', 'dfdf', [10, 25], null, undefined, true, false, true, NaN];
var ar2 = [[54, 45], 'aaa', 'dfdf', [10, 25], null, NaN, true, false, undefined , true];
var obj1 = {a:10, hy: {a:{a:[10, 5], hy: 'ddd'}, hy: 'ddd'}};
var obj2 = {a:10, hy: {a:{a:[10, 5], hy: 'ddd'}, hy: 'ddd'}};
console.log( 'twoArray>>>>>>>', aLi.compareObject( ar1, ar2) );
console.log( 'twoObject>>>>>>>', andrLibrary.compareObject( obj1, obj2) );
console.log( 'indexOF - 3 >>>>>>>', aLi.in( ar1 ).indexOf([54, 45]) );
console.log( 'indexOF - 1 >>>>>>>', andrLibrary.in(ar1).indexOf('aaa') );


andrLibrary.listener.set('data-my', function(){
    console.log('data-my');
});
andrLibrary.listener.set('data-my', function(){
    console.log('data-my2');
});
andrLibrary.listener.go('data-my');

function con(){
    console.log("wwwwww");
};
function con2(){
    console.log("wwwwww");
};
// console.log("function>", typeof ( con ));
// console.log("NaN>", typeof ( NaN ));
// console.log("null>", typeof ( null ));
// console.log("undefined>", typeof ( undefined ));
// console.log("true / false>", typeof ( true ));