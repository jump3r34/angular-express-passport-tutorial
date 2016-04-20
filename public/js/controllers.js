app.controller("NavCtrl", function($rootScope, $scope, $http, $location) {
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/home");
      });
  }
});

app.controller("SignUpCtrl", function($scope, $http, $rootScope, $location) {
  $scope.signup = function(user) {

    // TODO: verify passwords are the same and notify user
    if (user.password == user.password2) {
      $http.post('/signup', user)
      .success(function(user) {
        $rootScope.currentUser = user;
        $location.url("/profile");
      });
    }
  }
});

app.controller("LoginCtrl", function($location, $scope, $http, $rootScope) {
  $scope.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        $rootScope.currentUser = response;
        $location.url("/profile");
      });
  }
});

app.controller("CreateProjCtrl", function($location, $scope, $http, $rootScope) {
    $scope.projSubmit = function(project) {
        project.createdBy = $rootScope.currentUser._id;
        var d = Date.now();
        project.createdDate = d;
        $http.post('api/projects', project)
            .success(function(response) {
                $rootScope.currentUser = response;
                $location.url("/profile");
            });
    }
});

app.controller("ProjListCtrl", function($location, $scope, $http, $rootScope) {

    $http.get('api/projects').success(function (data, status){
        $scope.projectList = data;
    }).error(function(){
        alert("something went wrong");
    });
    
});