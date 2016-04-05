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

    AndrLibrary.prototype.tipe = function( object ){
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
        var tipe1 = this.tipe(data1);
        var tipe2 = this.tipe(data2);
        if( tipe1 === tipe2 ){
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
                switch ( this.tipe( object1[key] ) ) {
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
                switch ( this.tipe( arry1[i] ) ) {
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
    window.andrLibrary = new AndrLibrary();
})();
