angular.module("HangmanApp").component("timerTesting", {
    template: "<h2>Welcome to Timer Testing!</h2><br/>\
      ",
    controller: function ($scope, $timeout, $interval) {
    var intervalHandle;

    this.$onInit = function () {
      this.vehicle = this.data;
      $timeout(callAtTimeout, 3000);
      intervalHandle = $interval(callAtInterval, 5000);
    };

    function callAtTimeout() {
        console.log("Timeout occurred");
    }

    function callAtInterval(){
        console.log("Interval occurred");
    }

    this.$onDestroy = function(){
      $interval.cancel(intervalHandle);
      console.log('TimerTesting.onDestory');
    }

    },
  });