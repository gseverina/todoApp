angular.module('todoApp.controllers',[])
  .controller('TodoListController',['$scope','ToDoService',function($scope,ToDoService){

    ToDoService.getAll().success(function(data){
    $scope.items=data.results;
  });

  $scope.onItemDelete=function(item){
    Todo.delete(item.objectId);
    $scope.items.splice($scope.items.indexOf(item),1);
  }

}]).controller('TodoCreationController',['$scope','ToDoService','$state',function($scope,ToDoService,$state){

  $scope.todo={};

  $scope.create=function(){
    ToDoService.create({content:$scope.todo.content}).success(function(data){
      $state.go('todos');
    });
  }


}]).controller('TodoEditController',['$scope','ToDoService','$state','$stateParams',function($scope,ToDoService,$state,$stateParams){

  $scope.todo={id:$stateParams.id,content:$stateParams.content};

  $scope.edit=function(){
    ToDoService.edit($scope.todo.id,{content:$scope.todo.content}).success(function(data){
      $state.go('todos');
    });
  }

}]);
