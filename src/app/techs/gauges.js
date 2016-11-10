angular
  .module('app')
  .component('gauges', {
    templateUrl: 'app/techs/gauges.html',
    controller: GaugesController
  });

/** @ngInject */
function GaugesController($http, $log) {
  var vm = this;

  $http
    .get('app/techs/gauges.json')
    .then(function (response) {
      $log.info(response);
      vm.gauges = response.data;
    });
}
