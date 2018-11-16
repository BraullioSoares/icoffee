angular.module('iCoffeeApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        }).state('billingCycle', {
            url: "/billingCycle?page",
            templateUrl: "billingCycle/tabs.html"
        }).state('orders',{
            url:"/orders?page",
            templateUrl:"orders/tabs.html"
        })

        $urlRouterProvider.otherwise('/dashboard')
    }
])