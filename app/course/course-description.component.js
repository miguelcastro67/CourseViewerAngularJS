(function () {
    'use strict';

    angular.module('courseViewer').component('courseDescription', {
        bindings: {
            course: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

        },
        templateUrl: 'app/course/course-description.component.html'
    });
})();
