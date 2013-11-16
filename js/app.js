var app = angular.module('app', ['firebase']);

app.constant('SETTINGS', {
    'views_url': '/views',
    'firebase_url': 'https://matterstome.firebaseio.com'
});

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

app.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});

app.config(function ($routeProvider, $locationProvider, SETTINGS) {
    // Uncomment to simulate non-html5 browser:
    /*$provide.decorator('$sniffer', function($delegate) {
     $delegate.history = false;
     return $delegate;
     });
     */

    $locationProvider
        .html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: SETTINGS.views_url + "/frontpage.html",
            controller: 'MainCtrl'
        })
        .otherwise({ redirectTo: '/' });
});
