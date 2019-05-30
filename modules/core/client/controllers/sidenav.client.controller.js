(function () {
  'use strict';

  angular
    .module('core')
    .controller('SidenavController', SidenavController);

  SidenavController.$inject = ['$scope', '$state', 'Authentication', 'menuService'];

  function SidenavController($scope, $state, Authentication, menuService) {
    var vm = this;

    vm.authentication = Authentication;
    vm.menu = menuService.getMenu('topbar');
    vm.dropdownOpen = [];
    vm.toggleMenu = toggleMenu;

    function toggleMenu(elem) {
      if (vm.dropdownOpen[elem]) {
        vm.dropdownOpen[elem] = !vm.dropdownOpen[elem];
      } else {
        vm.dropdownOpen[elem] = true;
      }
    };
  }
}());
