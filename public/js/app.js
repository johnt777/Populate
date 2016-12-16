var app = angular.module('meanMapApp', ['addCtrl', 'queryCtrl', 'headerCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Join Team Control Panel
        $routeProvider.when('/join', {
            controller: 'addCtrl',
            templateUrl: 'views/addForm.html',

        // Find Teammates Control Panel
        }).when('/find', {
            controller: 'queryCtrl',
            templateUrl: 'views/queryForm.html',

        // All else forward to the Join Team Control Panel
        }).otherwise({redirectTo:'/join'})
    });