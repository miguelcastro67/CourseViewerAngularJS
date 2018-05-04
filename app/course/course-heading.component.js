(function () {
    'use strict';

    angular.module('courseViewer').component('courseHeading', {
        bindings: {
            course: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

        },
        templateUrl: 'app/course/course-heading.component.html'
    });
})();
