app.controller('MainCtrl', function ($scope, angularFire) {

    var url = 'https://matterstome.firebaseio.com/items',
        promise = angularFire(url, $scope, 'items');

    promise.then(function () {

        $scope.new_item = '';

        $scope.addItem = function () {
            $scope.items.push($scope.new_item);
            $scope.new_item = '';
        }

    });

});
