(function () {
    'use strict';
    
    angular.module('courseViewer').component('courseDiscussionList', {
        bindings: {
            courseDiscussion: '<',
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

        },
        templateUrl: 'app/course/course-discussion-list.component.html'
    });    
})();