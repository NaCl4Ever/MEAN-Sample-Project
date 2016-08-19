angular.module('testSite', ['ui.router'])

.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
    .state('posts', {
 	 url: '/posts/{id}',
 	 templateUrl: '/posts.html',
 	 controller: 'PostsCtrl'
	});

  $urlRouterProvider.otherwise('home');
}])	

.factory('posts', [function(){
  var o = {
    posts: [{name: 'post 1', age: 5},
  {name: 'post 2', age: 2},
  {name: 'post 3', age: 15},
  {name: 'post 4', age: 9},
  {name: 'post 5', age: 4}]
  };
  return o;
}])

.controller('PostsCtrl', ['$scope', '$stateParams', 'posts',
function($scope, $stateParams,posts){
	$scope.post = posts.posts[$stateParams.id];
	


}]);
.controller('MainCtrl', [
'$scope', 'posts',
function($scope, posts){
  $scope.test = 'Hello world!';
 $scope.posts = posts.posts;
 $scope.addPost = function(){
 	if(!$scope.name || $scope.name === ''){alert("Please enter a valid Name and Age. ");return;}
	$scope.posts.push({name: $scope.name, age: $scope.age,comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]});
	$scope.name = null;
	$scope.age = null;
 };


}

]);



