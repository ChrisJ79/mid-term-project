
// VERSION 1

angular.module("MyApp", [])
    .controller("MainCtrl", mainCtrl);


    function mainCtrl() {
    	var timber = this;
    	timber.sizes = [""];
    	timber.qty = [""];
    	timber.addTimber = function() {
			timber.sizes.push(timber.newTimber);
			timber.qty.push(timber.newNum);
			console.log(timber.sizes);
		};	


		// timber.addQty = function()	 {
		// 	timber.qty.push(timber.newNum);
  //    		console.log(timber.qty);
  //    	};	
}




// VERSION 2

// var app = angular.module("MyApp", []);

//     app.controller("MainCtrl", function (timber) {
//     	var timber = this;
//     	timber.sizes = [""];
//     	// timber.qty = "";
//     	timber.addTimber = function () {
// 			timber.sizes.push(timber.newTimber);
// 			// timber.qty.push(timber.newNum)
//         };
// });



//     var app = angular.module("myShoppingList", []);
// app.controller("myCtrl", function($scope) {
//     $scope.products = ["Milk", "Bread", "Cheese"];
//     $scope.addItem = function () {
//         $scope.products.push($scope.addMe);
//     }
// });