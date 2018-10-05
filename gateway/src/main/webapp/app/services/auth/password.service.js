(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .factory('Password', Password);

    Password.$inject = ['$resource'];

    function Password($resource) {
        var service = $resource('uaa/api/account/change-password', {}, {});

        return service;
    }
})();
