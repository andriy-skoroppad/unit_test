//my library events and object compare
(function() {
    'use strict';
    function Listener(){
        this.elements = {};
        this.set = this._set;
        this.go = this._go;
    }

    function AndrLibrary(){
        this.author = "Skoropad Andriy";
       /* this.listener = {
            elements : {}
        };
        this.listener.set = this._set.bind(this);
        this.listener.go = this._go.bind(this);*/
        this.listener = new Listener();
    }
    Listener.prototype._set = function(name, fun){
        if( !this.elements[name] ){//createElement if does not exist element
            this.elements[name] = document.createElement( name );
        };

        this.elements[name].addEventListener('click', fun);
        return true;
    }
    Listener.prototype._go = function(name){
        if( !this.elements[name] ){
            console.warn('This name ( ' + name + ' ) does not exist.');
            return false;
        }
        this.elements[name].click();
        return true;
    }
    AndrLibrary.prototype.compareObject = function (objectOne, objectTwo){
        var tipe1 = this.tipe(objectOne);
        var tipe2 = this.tipe(objectTwo);
        if(tipe1 && tipe2 && tipe1 === tipe2 ){
            switch ( tipe1 ) {
                case 'string':
                case 'number':
                    return this.chakTwoData(objectOne, objectTwo);
                    break;
                case 'array':
                    return this.twoArray( objectOne, objectTwo);
                    break;
                case 'object':
                    return this.twoObject( objectOne, objectTwo);
                    break;
            };
        } else {
            return false;
        };
    };

    AndrLibrary.prototype.tipe = function( object ){
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
    AndrLibrary.prototype.chakTwoData = function(data1, data2){
        var tipe1 = this.tipe(data1);
        var tipe2 = this.tipe(data2);
        if( tipe1 === tipe2 ){
            if( data1 === data2){
                return true;
            }
        };
        return false;
    }

    AndrLibrary.prototype.twoObject = function( object1, object2){
        var key1 = Object.keys(object1);
        var key2 = Object.keys(object2);
        if( this.twoArray(key1, key2) ){
            for(var key in object1){
                switch ( this.tipe( object1[key] ) ) {
                    case 'string':
                    case 'number':
                        if( !this.chakTwoData(object1[key], object2[key]) ){
                            return false;
                        };
                        break;
                    case 'array':
                        if( !this.twoArray(object1[key], object2[key]) ){
                            return false;
                        };
                        break;
                    case 'object':
                        if( !this.twoObject(object1[key], object2[key]) ){
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
    AndrLibrary.prototype.twoArray = function( arry1, arry2){
        if(arry1.length == arry2.length){
            for (var i = 0; i < arry1.length; i++) {
                switch ( this.tipe( arry1[i] ) ) {
                    case 'string':
                    case 'number':
                        if( !this.chakTwoData(arry1[i], arry2[i]) ){
                            return false;
                        };
                        break;
                    case 'array':
                        if( !this.twoArray(arry1[i], arry2[i]) ){
                            return false;
                        };
                        break;
                    case 'object':
                        if( !this.twoObject(arry1[i], arry2[i]) ){
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
    window.andrLibrary = new AndrLibrary();
    console.log('window', window);
})();


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

var ar1 = [[54, 45], 'aaa', 'dfdf', [10, 25]];
var ar2 = [[54, 45], 'aaa', 'dfdf', [10, 25]];
var obj1 = {a:10, hy: {a:{a:[10, 5], hy: 'ddd'}, hy: 'ddd'}};
var obj2 = {a:10, hy: {a:{a:[10, 5], hy: 'ddd'}, hy: 'ddd'}};
console.log( 'twoArray>>>>>>>', andrLibrary.compareObject( ar1, ar2) );
console.log( 'twoObject>>>>>>>', andrLibrary.compareObject( obj1, obj2) );


andrLibrary.listener.set('data-my', function(){
    console.log('data-my');
});
andrLibrary.listener.set('data-my', function(){
    console.log('data-my2');
});
andrLibrary.listener.go('data-my');