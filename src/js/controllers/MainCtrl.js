app.controller('MainCtrl', function ($scope, SETTINGS, angularFireCollection) {

    $scope.items = angularFireCollection(new Firebase(SETTINGS.firebase_url + "/items"));

    $scope.addItem = function () {
        $scope.items.add($scope.new_item);
        $scope.new_item = '';
    };

    $scope.showItem = function (item) {
        alert("not implemented yet");
        console.log(this);
    }

});
