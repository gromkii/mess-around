(function(){
  //Start doing app shit.
  var app = angular.module('miniReddit', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider.when('/users/:id',{
      templateUrl:'/user/show.html',
      controller:'ShowUserController',
      controllerAs:'showUser'
    })
  });

  app.directive('indexPartial', function(){
    return {
      restrict:'E',
      templateUrl:'/index/index-view.html',
      controller:function(){
        this.message = "Hello.";

        this.runGretting = function(){
          console.log("Hello.");
        }
      },
      controllerAs:'index'
    };
  });

  app.directive('users',['$http', function($http){
    return {
      restrict:'E',
      templateUrl:'/users/user-index.html',
      controller:function(){
        var store = this;
        $http({
          method:'GET',
          url:'/api/users'
        }).then(function(results){
          console.log(results.data);
          store.users = results.data;
          store.shared = results.data;
        });
      },
      controllerAs:'users'
    }
  }]);

  // app.directive('showUser',['$http', '$routeParams', function($http, $routeParams){
  //   return {
  //     restrict:'E',
  //     templateUrl:'/users/show.html',
  //     controller:function(){
  //       var store = this;
  //       console.log($routeParams);
  //       $http({
  //         method:'GET',
  //         url:'/users/'
  //       }).then(function(results){
  //         console.log();
  //       });
  //     },
  //     controllerAs:'showUser'
  //   };
  // }]);

  app.controller('ShowUserController', ['$http','$scope', '$routeParams', function($http, $scope, $routeParams){
    console.log($routeParams);
  }]);
})();
