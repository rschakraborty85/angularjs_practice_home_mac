// (function() {
var fap = angular.module('FirstAngApp', []);

fap.filter("firstAngAppFilter", function(){
  return function(param){
    return param+" filtered";
  }
});

fap.directive("alterHiddenValueDir",function(){
  return{
    restrict: "AE",
    template: '<button' +' ng-click="cntrl.alterHiddenValue()">'
    +'{{cntrl.isHidden ? "Show color" : "Hide color"}}' 
    +'</button>'
  };
});

fap.controller('FirstAngAppCntrl', function($scope){
  this.bind_var = "";
  this.placeholder = "placeholder";
  this.isHidden = true;

  this.someFunc = function(){
    console.log("print in console "+this.bind_var);
  };
  
  this.alterHiddenValue = function(){
    // console.info("hidden value in console "+this.isHidden);
    this.isHidden = !this.isHidden;
    // console.info("after change - hidden value in console "+this.isHidden);
  };

  this.static_array = [
    '1','2','3','4','5'
  ];
});
// })();
