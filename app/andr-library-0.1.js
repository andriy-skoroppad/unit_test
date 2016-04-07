//my library events and object compare
(function() {
    'use strict';
    function Listener(){
        this.elements = {};
        this.set = this._set;
        this.go = this._go;
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
            console.error('This name ( ' + name + ' ) does not exist.');
            return false;
        }
        this.elements[name].click();
        return true;
    }

var main;
    function AndrLibrary(){
        this.author = "Skoropad Andriy";
        this.listener = new Listener();
/*
        var arraySet;
        this.arraySet = function (array){
            if(array && this.type(array) == 'array'){
                arraySet = array;
            } else {
                return arraySet;
            };
        };
*/
        main = this;
    }

    var indexOF = function (object){
        
        console.log(object);
        console.log(this);
        console.log(array);

        var type = this.type(array);
        if( type == 'array'){
            var length = array.length;
            for(var i = 0; i < length; i++){
                if( this.compareObject(array[i], object) ){
                    return i;
                };
            };
            return -1;

        } else {
            console.error('This is not Array. This is "' + type + '"!');
            return -1;
        }
    };

    AndrLibrary.prototype.in = function(mainObject){
        
        return  new ForIn(mainObject);
    }

    function ForIn (mainObject){
        this.mainObject = mainObject;
    }

    ForIn.prototype.indexOf = function (object){

        var type = main.type(this.mainObject);
        if( type == 'array'){
            var length = this.mainObject.length;
            for(var i = 0; i < length; i++){
                if( main.compareObject(this.mainObject[i], object) ){
                    return i;
                };
            };
            return -1;

        } else {
            console.error('This is not Array. This is "' + type + '"!');
            return -1;
        }
    };
    ForIn.prototype.merge = function (object){

        
    };
    ForIn.prototype.mergeElement = function (mainObject, object){
        var type1 = main.type(mainObject);
        var type2 = main.type(object);
        if( type1 == type2 ){
            switch ( type1 ) {
            case 'function':
            case 'boolean':
            case 'NaN':
            case 'null':
            case 'undefined':
            case 'string':
            case 'number':
                return mainObject;
                break;
            };
        };
        
        return mainObject;
    };

    ForIn.prototype.mergeArray = function (mainObject, array){
        
        var type1 = main.type(mainObject);
        var type2 = main.type(array);

        if( type1 == 'array' && type2 == 'array'){
            var objectNew = [];
            var length1 = mainObject.length;
            var length2 = array.length;

            for (var i = 0; i < length1 || i < length2; i++) {
                if(i < length1){
                     switch ( main.type(mainObject[i]) ) {
                        case 'function':
                        case 'boolean':
                        case 'NaN':
                        case 'null':
                        case 'undefined':
                        case 'string':
                        case 'number':
                            objectNew.push( mainObject[i] );
                            break;
                        case 'array':
                            if(i < length2){
                                objectNew.push( this.mergeArray(mainObject[i], array[i]) );
                            } else {
                                objectNew.push( mainObject[i] );
                            };
                            break;
                        case 'object':
                            this.twoObject( objectOne, objectTwo);
                            break;
                    };
                } else if ( i >= length1 && i < length2){
                    objectNew.push( array[i] );
                }
               
            }
             
        
        return objectNew;
        } else {
            return mainObject;
        }
    };
    ForIn.prototype.mergeObject = function (mainObject, object){
        var type1 = main.type(mainObject);
        var type2 = main.type(object);
        var keys1 = Object.keys(mainObject);
        var keys2 = Object.keys(object);

        if(type1 == 'object' && type2 == 'object'){
            for( var key in mainObject ){
                switch ( main.type(mainObject[key]) ) {
                        case 'function':
                        case 'boolean':
                        case 'NaN':
                        case 'null':
                        case 'undefined':
                        case 'string':
                        case 'number':
                            break;
                        case 'array':
                            this.mergeArray(mainObject[key], object[key])
                            break;
                        case 'object':
                            this.twoObject( objectOne, objectTwo);
                            break;
                    };
            }
        }
        


    }

    /*
    AndrLibrary.prototype.indexOF = function (array, object){
        var type = this.type(array);
        if( type == 'array'){
            var length = array.length;
            for(var i = 0; i < length; i++){
                if( this.compareObject(array[i], object) ){
                    return i;
                };
            };
            return -1;

        } else {
            console.alert('This is not Array.');
        }

        Release-2016-04-07-gcMarketplace-317-Stars_on_Marketplace
        @( One more image) :: Stars on Marketplace
    }
    */
    AndrLibrary.prototype.compareObject = function (objectOne, objectTwo){
        var type1 = this.type(objectOne);
        var type2 = this.type(objectTwo);
        if(type1 && type2 && type1 === type2 ){
            switch ( type1 ) {
                case 'function':
                case 'boolean':
                case 'NaN':
                case 'null':
                case 'undefined':
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

    AndrLibrary.prototype.type = function( object ){
        if(!object && object != 0 && object != '' && object != false){
            switch ( typeof (object) ){
                case 'number':
                    return 'NaN';
                    break;
                case 'object':
                    return 'null';
                    break;
                case 'undefined':
                    return 'undefined';
                    break;
            };
            return false;
        };

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
        var type1 = this.type(data1);
        var type2 = this.type(data2);
        if( type1 === type2 ){
            if( data1 == data2 || (data1 != data1 && data2 != data2)){
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
                switch ( this.type( object1[key] ) ) {
                    case 'function':
                    case 'boolean':
                    case 'NaN':
                    case 'null':
                    case 'undefined':
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
                        return false;
                        break;
                };
            }
        } else {
            return false;
        }

        return true;
    }
    AndrLibrary.prototype.twoArray = function( arry1, arry2){
        var length1 = arry1.length;
        var length2 = arry2.length;
        if(length1 == length2){
            for (var i = 0; i < length1; i++) {
                switch ( this.type( arry1[i] ) ) {
                    case 'function':
                    case 'boolean':
                    case 'NaN':
                    case 'null':
                    case 'undefined':
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
                        return false;
                        break;
                };
            };
        } else {
            return false;
        };
        return true;
    };
    window.andrLibrary = window.aLi = new AndrLibrary();
})();
