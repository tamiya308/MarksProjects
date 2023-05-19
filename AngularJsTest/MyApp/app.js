var app = angular.module("HangmanApp", ["ngRoute"]);
app.config(function ($provide, $routeProvider) {
  $provide.decorator("$exceptionHandler", function ($delegate) {
    return function (exception, cause) {
      console.warn("Error occurred! Please contact admin.");
      $delegate(exception, cause);
    };
  });

  $routeProvider
    .when("/", {
      templateUrl: "./Components/ComponentTesting.html",
    })
    .when("/misctesting", {
      templateUrl: "./Components/MiscTesting.html",
    })
    .when("/timertesting", {
      templateUrl: "./Components/TimerTesting.html",
    })
    .when("/httptesting", {
      templateUrl: "./Components/HttpTesting.html",
    })
    .when("/componenttesting", {
      templateUrl: "./Components/ComponentTesting.html",
    })
    .when("/controllertesting", {
      templateUrl: "./Controllers/ControllerTesting.html",
    });
});