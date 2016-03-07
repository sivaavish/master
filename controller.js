var app=angular.module('mylan',[]);
app.controller('people',function($scope,$http)
{
   $http.get('http://127.0.0.1:81/Angular/database.json')
   .success(function($response)
   {
      $scope.persons=$response.records;
   });

});