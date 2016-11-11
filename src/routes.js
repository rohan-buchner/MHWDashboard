angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('app', {url: '/halsema', component: 'app'})
    .state('app.info', {url: '/info', component: 'gauges'})
    .state('app.camp', {url: '/camp', component: 'camp'})
    .state('app.driving', {url: '/driving', component: 'driving'})
    .state('app.driving.rear', {url: '/driving/rear', component: 'driving'})
    .state('app.driving.roof', {url: '/driving/roof', component: 'driving'})
    .state('app.driving.bottom', {url: '/driving/bottom', component: 'driving'})
    .state('app.media', {url: '/media', component: 'media'})
    .state('app.topview', {url: '/topview', component: 'topview'});

  $urlRouterProvider.otherwise('/halsema/info');
}
