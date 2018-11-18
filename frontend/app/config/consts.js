angular.module('iCoffeeApp').constant('consts', {
    appName: 'iCoffee - Orders System',
    version: '1.0',
    owner: 'iCoffee',
    year: '2018',
    site: 'http://icoffee.com.br',
    apiUrl: 'http://localhost:3000/api',
    oapiUrl: 'http://localhost:3000/oapi',
    userKey: '_icoffee_app_user'
  }).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
  }])