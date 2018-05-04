(function () {
    'use strict';

    angular.module('courseViewer').component('courseModules', {
        bindings: {
            course: '<'
        },
        controllerAs: 'vm',
        controller: function (courseService) {
            var vm = this;

            vm.timeFormat = function (module) {
                var hours = 0;
                var minutes = Number(module.Minutes);
                var seconds = Number(module.Seconds);

                var moduleLength = courseService.timeFormat(hours, minutes, seconds);

                return moduleLength;
            }
        },
        templateUrl: 'app/course/course-modules.component.html'
    });
})();
