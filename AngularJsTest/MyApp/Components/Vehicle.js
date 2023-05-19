angular.module("HangmanApp").component("vehicle", {
  bindings: {
    pagename: "<",
    data: "<",
    out: "<",
  },
  template:
    '<div style="background-color: lightgrey;">\
    {{$ctrl.pagename}}\
    This is vehicle: <input type="text" ng-model="$ctrl.vehicle.name" /> Rego: <input type="text" ng-model="$ctrl.vehicle.rego" />\
    <button ng-click="$ctrl.updateParent()">Update Parent</button>\
    </div>',
  controller: function VehiclesController(mySharedService, $scope, $rootScope) {
    this.vehicleRego = "";
    this.vehicle = {};
    this.listener = {};

    this.$onInit = function () {
      this.vehicle = this.data;
      this.listener = $scope.$on("handleBroadcast", function (evt, data) {
        console.log("Vehicle.mySharedService.recievedBroadcast : " + data);
      });
    };

    this.$onDestroy = function(){
      this.listener();
      console.log('vehicle.onDestory');
    }

    this.$onChanges = function (obj) {
      //  console.log("vehicle changed one-way bindings", obj);
    };

    this.updateParent = function () {
      this.out(this.vehicle);
    };
  },
});
