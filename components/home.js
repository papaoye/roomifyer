/**
 * 
 */

angular.module('RoomifyerApp', ['ngSanitize']).controller('HomeController', function($http, $q, $log, $scope) {
	
	$log.info("Starting home module...");
	
	var homeModel = this;
    homeModel.userName = "TestUser";
	homeModel.servicesSection = "";
	homeModel.portfolioSecion = "";
	
	$http.get('/fragments/services.html')
    .success(function (data) {
    	homeModel.servicesSection = data;
    }).error(function (msg, code) {
        $log.error(msg, code);
    });
	
//	$http.get('/fragments/portfolio.html')
//    .success(function (data) {
//    	homeModel.portfolioSecion = data;
//    }).error(function (msg, code) {
//        $log.error(msg, code);
//    });
	
	
});