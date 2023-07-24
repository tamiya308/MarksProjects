angular.module("HangmanApp").component("httpTesting", {
  template:
    "<h2>Welcome to Http Testing!</h2><br/>\
    <button ng-click='$ctrl.getData()'>GetData</button>\
    <button ng-click='$ctrl.postData()'>PostData</button>\
      ",
  controller: function ($http) {
    this.$onInit = function () {};

    this.getData = function () {
      $http({
        method: "GET",
        url: "https://api.npms.io/v2/search?q=react",
      }).then(
        function successCallback(response) {
          console.log(response);
        },
        function errorCallback(response) {
          console.log(response);
        }
      );
    };

    this.postData = function () {
      var url = "posturl",
        data = "parameters";

      $http.post("https://reqres.in/api/posts", data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar',
          'Access-Control-Allow-Origin': '*',
        }})
        .then(function (response) {
          console.log(response);
        }
      );
    };
  },
});
