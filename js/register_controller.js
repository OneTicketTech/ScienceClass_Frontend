var LoginCtrl = function ($scope, $http, User, $rootScope) {

  $rootScope.headershow = false;

  User.fetchInfo().then(function (res){
    if (User.info.isLogin) {
      window.location.href = '#/home';
    }
  });
  $scope.user = {};
  $scope.submit = function () {
        alert($scope.user.username);
        User.register($scope.user).then(function(){
          window.location.href = '#/home';
        });
        //window.location.href = '#/home';
  };
}

module.exports = LoginCtrl;
