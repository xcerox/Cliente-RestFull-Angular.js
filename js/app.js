angular.module("App",["lumx","ngRoute","ngResource"])
  .config(['$routeProvider','$locationProvider',function(routeProvider,locationProvider){

      var baseUrl = 'Cliente-RestFull-Angular.js';


    routeProvider
      .when(baseUrl + "/",{
          controller: "mainController",
          templateUrl: "/templates/home.html"
      })
      .when(baseUrl + "post/new/",{
        controller: "postNewController",
        templateUrl: "/templates/post_form.html"
      })
      .when(baseUrl + "post/edit/:id",{
        controller: "postController",
        templateUrl: "/templates/post_form.html"
      })
      .when(baseUrl + "post/:id",{
        controller: "postController",
        templateUrl: "templates/post.html"
      });

      locationProvider.html5Mode(true);
  }]);
