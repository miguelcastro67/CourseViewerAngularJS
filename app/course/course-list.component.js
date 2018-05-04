(function () {
    'use strict';

    angular.module('courseViewer').component('courseList', {
        controllerAs: 'vm',
        controller: function (courseService) {
            var vm = this;

            vm.courses = null;

            vm.$onInit = function () {
                courseService.getAllCourses().then(function (courses) {
                    vm.courses = courses;
                });
            }
        },
        templateUrl: 'app/course/course-list.component.html'
    });
})();
