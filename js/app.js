angular.module("App",["lumx","ngRoute","ngResource"])
  .config(['$routeProvider','$locationProvider',function(routeProvider,locationProvider){
    routeProvider
      .when("/",{
          controller: "mainController",
          templateUrl: "/templates/home.html"
      })
      .when("post/new/",{
        controller: "postNewController",
        templateUrl: "/templates/post_form.html"
      })
      .when("post/edit/:id",{
        controller: "postController",
        templateUrl: "/templates/post_form.html"
      })
      .when("post/:id",{
        controller: "postController",
        templateUrl: "templates/post.html"
      });

      locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
  }]);
