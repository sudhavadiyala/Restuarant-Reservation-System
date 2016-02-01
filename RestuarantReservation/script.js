/**
 * Created by sudha on 27-Jan-16.
 */

    // Angular Module Creation

var myApp = angular.module('myApp',[]);


myApp.config(function($routeProvider){

    $routeProvider

        // route for the home page
        .when('/',{

            templateUrl : 'package/main.html',
            controller : 'mnCtrl'
        })

        // route for the main menu
        .when('/main',{

            templateUrl : 'package/main.html',
            controller : 'mnCtrl'
        })

        .when('/photos',{

            templateUrl : 'package/photo.html',
            controller : 'mnCtrl'
        })

        // route for the location
        .when ('/location',{

            templateUrl : 'package/location.html',
            controller : 'locCtrl'
        })

        .when ('/contact',{

            templateUrl : 'package/contact.html',
            controller : 'conCtrl'
        })

        .when ('/book',{

            templateUrl : 'package/book.html',
            controller : 'bkCtrl'
        });

});


    // Angular Controller Creation

myApp.controller('mnCtrl',function($scope){

    $scope.text = 'First Page';
    $scope.photos = [
        {
            "id" : "first",
            "image" : 'images/buffet.jpg'
        },
        {
            "id" : "second",
            "image" : "images/desert.jpg"

        },
        {
            "id" : "third",
            "image" : "images/snacks.jpg"

        },
        {
            "id" : "fourth",
            "image" : "images/thali.jpg"

        },
        {
            "id" : "fifth",
            "image" : "images/togo.png"

        }

    ]
});

myApp.controller('locCtrl',function($scope){

    $scope.text = 'Location page';
});

myApp.controller('conCtrl',function($scope){

    $scope.text = 'Contact Us page';
});

myApp.controller('bkCtrl',function($scope){

    $scope.text = 'Book a Table';

    $scope.addTable = function(){

        $scope.tables.push({'TableNum':$scope.TableNum,'Seats':$scope.Seats})
        $scope.TableNum = "";
        $scope.Seats = "";
    };

    $scope.tables = [

        {
            TableNum : "T1",
            Seats : "3"
        },

        {
            TableNum : "T2",
            Seats : "4"
        },


        {
            TableNum : "T3",
            Seats : "6"
        },


        {
            TableNum : "T4",
            Seats : "2"
        },


        {
            TableNum : "T5",
            Seats : "4"
        },

        {
            TableNum : "T6",
            Seats : "2"
        }

    ]
});