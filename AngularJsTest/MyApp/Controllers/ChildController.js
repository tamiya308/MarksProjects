app.controller("ChildController", [ '$scope', function($scope){
    $scope.title = "I'm the Child.";

    $scope.$on('broadcastMessage', function(event, mass) { 
        console.warn(mass); 
    });

    $scope.emitToParent = function() {
        $scope.$emit('someEvent', [1,2,3]);
      };
 }]);
