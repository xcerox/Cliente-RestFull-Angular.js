angular.module("App")
  .controller("loaderController",['$scope','PostService','$routeParams',function(scope,Post,Params) {
      scope.post = Post.get({id: Params.id});
  }])
  .controller("mainController",['$scope','PostService','UserService',function(scope,Post,User){
    scope.posts = Post.query();
    scope.users = User.query();

    scope.remove = function(post){
          Post.delete({id: post.id});
          //se elimina del arreglo de objetos porque jsonplaceholder no lo borra de su base de datos.
          scope.posts = scope.posts.filter(function(element){
            return post.id !== element.id;
          })
    }
  }])
  .controller("postController",['$scope','PostService','$routeParams','$location',function(scope,Post,Params,location) {
      scope.post = Post.get({id: Params.id});
      scope.tittle = "Editar Post";

      scope.savePost = function(){
        Post.update({id: scope.post.id},{data: scope.post},function(data){
          location.path('post/'+ scope.post.id);
        });
      }

      scope.back = function() {
          window.history.back();
      }
  }])
  .controller("postNewController",['$scope','PostService','$location',function(scope,Post,location) {
      scope.post = {};
      scope.tittle = "Nuevo Post";

      scope.savePost = function(){
        Post.save({data: scope.post},function(data){
            location.path('post/'+ scope.post.id);
        });
      }
  }]);
