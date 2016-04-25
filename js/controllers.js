angular.module("App")
  .controller("loaderController",['$scope','PostService','$routeParams',function(scope,Post,Params) {
      scope.post = Post.get({id: Params.id});
  }])
  .controller("mainController",['$scope','PostService','UserService',function(scope,Post,User){
    scope.posts = Post.query();
    scope.users = User.query();

    scope.remove = function(post){
          Post.delete({id: post.id},function(data){
            console.log(data);
          });
          scope.posts = scope.posts.filter(function(element){
            return post.id !== element.id;
          })
    }
  }])
  .controller("postController",['$scope','PostService','$routeParams','$location',function(scope,Post,Params,route) {
      scope.post = Post.get({id: Params.id});
      scope.tittle = "Editar Post";
      scope.savePost = function(){
        Post.update({id: scope.post.id},{data: scope.post},function(data){
          route.path("post/"+scope.post.id);
        });
      }
  }])
  .controller("postNewController",['$scope','PostService','$location',function(scope,Post,route) {
      scope.post = {};
      scope.tittle = "Nuevo Post";
      scope.savePost = function(){
        Post.save({data: scope.post},function(data){
            route.path("post/"+scope.post.id);
        });
      }
  }]);
