 var myApp = angular.module('myApp', ['ui.router'])
     .config(function ($stateprovider) {
         $stateprovider
             .state('signup', {
                 url: "/signup",
                 templateUrl: "app/signup/signup.html",
                 controller: "SignUpController"
             })
     });
