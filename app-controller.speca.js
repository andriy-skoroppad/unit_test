

describe('app-controller', function(){

    console.log('jasmine-version:' + jasmine.version);
    //spyOn($rootScope, '$broadcast').and.callThrough();

    var $scope = null;
    var $rootScope = null;
    var user = null;
    var AppController = null;

    var mocks = {
        user: {
            isAnon : true,
            showLoginForm: true,
            showForgotForm: true,
            //getData: jasmine.createSpy('')
            getData: function(field){
                return this[field];
            }
        }
    };

    beforeEach(function(){
        init();
    });

    describe('sum function test', function () {

        it('sum of two negatives', function () {
            var result = $scope.sum(-4, -4);
            expect(result).toBe(-9);
        });

        it('absence of some parameter', function () {
            var result = $scope.sum(-4);
            expect(result).toBe(false);
        });

        it('sum of two strings', function () {
            var result = $scope.sum('-4', '-4');
            expect(result).toBe(false);
        })
    })

    describe('function sorting test', function() {
        it('isTrue.length', function() {
           var b = getData();
           var result = $scope.sorting(b);
           expect($scope.isTrue.length).toBe(2);
        });
        it('isFalse.length', function() {
            var b = getData();
            var result = $scope.sorting(b);
            expect(result.isFalse.length).toBe(3);
        });
        it('isTrue has true', function() {
            var b = getData();
            var exResult = $scope.sorting(b);

            var toBeResult = [
                {is: true, id:1},
                {is: true, id:3}
            ];

            expect(exResult.isTrue).toEqual(toBeResult);
        });
        it('isFalse has not "is"', function() {
            var b = getData();
            $scope.sorting(b);
            for (var i = 0; i<$scope.isFalse.length; i++) {
                expect($scope.isFalse[i].hasOwnProperty('is')).toBe(true);
            }
        });
    });

    describe('isVisible', function(){
        it('result must be : true', function(){

            //expect(mocks.loadSrv.show).toHaveBeenCalled();
            //jasmine.log(':consoleLog:');

            user.isAnon = true;
            user.showLoginForm = true;

            expect($scope.isVisible()).toBe(true);
        });
        it('is:False', function(){

            user.isAnon = false;

            expect($scope.isVisible('isAnon')).toBe(false);

        });
    });

    describe('isAnon', function(){
        it('is:True', function(){
            user.isAnon = true;
            expect($scope.isAnon()).toBe(true);
        });
        it('is:False', function(){
            user.isAnon = false;
            expect($scope.isAnon()).toBe(false);
        })
    });

   describe('isVisibleForgotForm', function(){
       it('is:True', function(){
           user.isAnon = true;
           expect($scope.isVisibleForgotForm()).toBe(true);
       });
       it('is:False', function(){
           user.isAnon = false;
           expect($scope.isVisibleForgotForm()).toBe(false);
       });
   });

    describe('isStatic', function(){true;
        it('is:static', function(){
            user.isAnon = true;
            expect($scope.isStatic()).toBe('static');
        });
        it('is:empty', function(){
            user.isAnon = false;
            expect($scope.isStatic()).toBe('');
        });
    });


    describe('isFooterClosed', function(){
        it('is:True', function(){
            $rootScope.footerClosed = true;
            expect($scope.isFooterClosed()).toBe(true);
        });
        it('is:False', function(){
            $rootScope.footerClosed = false;
            expect($scope.isFooterClosed()).toBe(false);
        });
    });

    function getData() {
        var x = [
            {is: true, id:1},
            {is: false, id:2},
            {is: true, id:3},
            {is: false, id:4},
            {is: false, id:5},
            {id: 6}
        ];
        return x;
    }

    function init(){
        angular.mock.module('app.core', function($provide){
            $provide.value('user', mocks.user);
        });

        angular.mock.inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            AppController = $injector.get('$controller')('AppController', {$scope: $scope});
            user = $injector.get('user');
        });
    }
});