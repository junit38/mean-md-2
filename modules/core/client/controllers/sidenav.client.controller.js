(function () {
  'use strict';

  angular
    .module('core')
    .controller('SidenavController', SidenavController);

  SidenavController.$inject = ['$scope', '$state', '$mdSidenav', 'Authentication', 'menuService'];

  function SidenavController($scope, $state, $mdSidenav, Authentication, menuService) {
    var vm = this;

    vm.authentication = Authentication;
    vm.menu = menuService.getMenu('topbar');
    vm.dropdownOpen = [];
    vm.toggleMenu = toggleMenu;

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $mdSidenav('left').close();
    });

    function toggleMenu(elem) {
      if (vm.dropdownOpen[elem]) {
        vm.dropdownOpen[elem] = !vm.dropdownOpen[elem];
      } else {
        vm.dropdownOpen[elem] = true;
      }
    };
  }
}());
