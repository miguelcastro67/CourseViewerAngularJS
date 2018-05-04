(function () {
    'use strict';

    angular.module('courseViewer').component('authorBio', {
        bindings: {
            author: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

        },
        templateUrl: 'app/author/author-bio.component.html'
    });
})();
