
describe('app.js testing', function (){
   console.log('jasmine-version:' + jasmine.version, 'Andriy Skoropad');
    var $rootScope = null;
    var $scope = null;
    var myTestContrl = null;

    beforeEach(function (){
        init();
    });

    describe('testWithText add to text "-A"', function (){
        it('set string', function(){
            var result = $scope.testWithText('my text');
            expect(result).toBe('my text -A');
        });
        it('set number', function(){
            var result = $scope.testWithText(10);
            expect(result).toBe('10 -A');
        });
        xit('set object', function(){
            var result = $scope.testWithText({d:12});
            expect(result).toBe('{d:12} -A');
        });

    });

    describe('testWithMass add to mass "upgrade"', function (){
        it('set mass', function(){
            var result = $scope.testWithMass( [10, 20, 5] );
            expect(result).toEqual([10, 20, 5, 'upgrade']);
        });
        it('set object', function(){
            var result = $scope.testWithMass( {dd: 10, ff: 12} );
            expect(result).toBe( false);
        });
        it('set string', function(){
            var result = $scope.testWithMass( 'string' );
            expect(result).toBe(false);
        });

    });
    function init(){
        angular.mock.module('app');
        angular.mock.inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            myTestContrl = $injector.get('$controller')('myTestContrl', {$scope : $scope});

        })
    }
});

