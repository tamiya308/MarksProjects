angular.module("HangmanApp").factory("mySharedService", function ($rootScope) {
  var serviceInstance = {};
  serviceInstance.description = "This is a multiplier service";
  serviceInstance.multiply = function (a, b) {
    return a * b;
  };

  serviceInstance.prepForBroadcast = function(msg){
      $rootScope.$broadcast('handleBroadcast',msg);
  };

  serviceInstance.broadcastItem = function(msg){
  };

  return serviceInstance;
});