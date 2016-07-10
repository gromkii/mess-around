(function(){
  //Start doing app shit.
  var app = angular.module('miniReddit', [])
    .directive('indexPartial', function(){
      return {
        restrict:'E',
        templateUrl:'index/index-view.html',
        controller:function(){
          this.message = "Hello.";

          this.runGretting = function(){
            console.log("Hello.");
          }
        },
        controllerAs:'index'
      };
    });
})();
