angular.module("HangmanApp").component("miscTesting", {
  template:
    "<h3>{{$ctrl.pageTitle | uppercase}}</h3><br/>\
    <p ng-bind=\"$ctrl.date1 | date:'yyyy/MM/dd'\"></p>\
      <button ng-click='$ctrl.displayWinAlert(\"hello\")'>Display Alert</button>\
        ",
  controller: function ($scope, $window) {
    this.pageTitle = "Welcome to Misc Testing!"
    this.date1 = '20211102T21:27:00';
    this.$onInit = function () {
      this.getData();
      // throw 'custom exception 1';
    };

    this.displayWinAlert = function(msg){
      $window.alert(msg)
    }
    this.getData = function () {
      $http({
        method: "GET",
        url: "https://api.npms.io/v2/search?q=react",
      }).then(
        function successCallback(response) {
        },
        function errorCallback(response) {
        }
      );
    };

  },
});
