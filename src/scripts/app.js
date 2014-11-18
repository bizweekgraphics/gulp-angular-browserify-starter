'use strict';

require('angular');
require('angular-ui-router');
require('./partials.min');

var app = angular.module('landing', [
  'ui.router',
  'partials'
]);

console.log(app);

require('./components');
require('./routes');
require('./helpers');
require('./services');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'scripts/routes/main/main.template.html',
      controller: 'MainController'
    });
    
}]);