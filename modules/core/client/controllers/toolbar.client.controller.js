(function () {
  'use strict';

  angular
    .module('core')
    .controller('ToolbarController', ToolbarController);

  ToolbarController.$inject = ['$scope', '$state', '$mdSidenav', 'Authentication'];

  function ToolbarController($scope, $state, $mdSidenav, Authentication) {
    var vm = this;

    vm.authentication = Authentication;
    vm.toggleSidenav = toggleSidenav;

    function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    }
  }
}());
