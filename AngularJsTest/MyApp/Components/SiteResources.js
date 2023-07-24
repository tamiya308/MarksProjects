angular.module("HangmanApp").component("siteResources", {
  template: "<h2>Welcom to Resource Management!</h2><br/>\
  <div ng-repeat='vehicle in $ctrl.vehicles'>\
  <vehicle pagename='$ctrl.pagename' data='vehicle' out='$ctrl.callback'></vehicle>\
  </div>\
  <button ng-click='$ctrl.updatePageName()'>Update Page Name</button>\
  <button ng-click='$ctrl.updateSharedService()'>Update Shared Service</button>\
    ",
  controller: function (mySharedService, $scope, $rootScope) {
    this.pagename = "Resources";
    this.vehicles = [
      { name: "Truck A", rego: "1abc" },
      { name: "Truck B", rego: "2abc" },
      { name: "Truck C", rego: "3abc" },
    ];

    this.$onInit = function () {
      // console.log('mySharedServicve.multiply.result : ' + mySharedService.multiply(5,2));
    };
    this.callback = function(vehicle){
      console.log("Site resources received call back : " + vehicle.name + ", " + vehicle.rego );
    }

    this.updateSharedService = function(){
      // $scope.$broadcast('handleBroadcast');
      // $rootScope.$broadcast('handleBroadcast');
      mySharedService.prepForBroadcast('sample message A');
    }

    this.updatePageName = function(){
      this.pagename = this.pagename + "!";
    }
  },
});