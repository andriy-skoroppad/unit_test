
describe('app-controller', function(){
    var $rootScope = null;
    var $scope = null;
    var AppController = null;
    beforeEach(function (){
        init();
    });

    describe('get mass of elements', function (){
        it('get numbers three', function(){
            var result = $scope.testingFunc(10, 20, 5);
            expect(result).toEqual([10, 20, 5]);
        });
        it('get numbers two', function(){
            var result = $scope.testingFunc(10, 20);
            expect(result).toEqual([10, 20]);
        });

    })
    function init(){
        angular.mock.module('app.core');
        angular.mock.inject(function($injector){
           $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            AppController = $injector.get('$controller')('AppController', {$scope : $scope});

        })
    }

});

