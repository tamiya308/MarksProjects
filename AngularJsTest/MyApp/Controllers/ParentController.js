// var app = angular.module("HangmanApp",[]);
app.controller("ParentController", [ '$scope', function($scope){
    $scope.title = "I'm the Parent.";

    $scope.$on('someEvent', function(event, data) { 
        console.log(data); 
    });

    $scope.broadcastToChildren = function() {
        $scope.$broadcast('broadcastMessage', [10, 9, 8]);
    }
 }]);

