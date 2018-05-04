(function () {
    'use strict';

    angular.module('courseViewer').component('authorList', {
        bindings: {
        },
        controllerAs: 'vm',
        controller: function (authorService) {
            var vm = this;

            vm.authors = null;
            
            vm.$onInit = function () {
                authorService.getAllAuthors().then(function (authors) {
                    vm.authors = authors;
                });
            }
        },
        templateUrl: 'app/author/author-list.component.html'
    });
})();
