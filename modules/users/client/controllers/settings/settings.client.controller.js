(function () {
  'use strict';

  angular
    .module('users')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['$scope', '$rootScope', '$location', 'Authentication'];

  function SettingsController($scope, $rootScope, $location, Authentication) {
    var vm = this;

    vm.user = Authentication.user;
    vm.currentNavItem = getCurrentLocation();

    $rootScope.$on('$locationChangeStart', function () {
      vm.currentNavItem = getCurrentLocation();
    });

    function getCurrentLocation() {
      if ($location.path() == '/settings/picture')
        return ('change_profile_picture');
      else if ($location.path() == '/settings/password')
        return ('change_password');
      else if ($location.path() == '/settings/accounts')
        return ('manage_social_accounts');
      else
        return ('edit_profile');
    }
  }
}());
