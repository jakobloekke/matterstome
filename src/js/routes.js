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
