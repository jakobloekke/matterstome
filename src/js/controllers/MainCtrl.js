app.controller('MainCtrl', function ($scope, SETTINGS, angularFireAuth, angularFireCollection) {

    var ref = new Firebase(SETTINGS.firebase_url + "/items");

    angularFireAuth.initialize(ref, {scope: $scope, name: "user"});

    $scope.login = function() {
        angularFireAuth.login("twitter");
    };
    $scope.logout = function() {
        angularFireAuth.logout();
    };

    $scope.items = angularFireCollection(ref);

    $scope.addItem = function () {

        $scope.new_item.user_id = $scope.user.id;

        $scope.items.add($scope.new_item);
        $scope.new_item = '';
    };

    $scope.showItem = function (item) {
        alert("not implemented yet");
        console.log(this);
    }

});
