var ImCtrl = function ($scope, $http,$state,$stateParams) {
    $http({
      method  : 'GET',
      url     : __API_ROOT__+'/classroom/learn/'+$stateParams.chapter_id+'/'
            })
    .success(function (res){
        console.log(res);
        $scope.PPT = res.PPT;
    })
    .error(function (res){
      console.log(res);
    });

    $scope.toWork = function() {
      windows.location.href="#/work/"+$stateParams.chapter_id;
    }
}

module.exports = ImCtrl;
