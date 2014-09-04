(function() {
  'use strict';

  angular.module( 'appName', [
    'templates-app',
    'templates-common',
    'appName.home',
    'appName.about',
    'ui.router'
  ])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/home' );
  })

  .run( function run () {
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope ) {
    $scope.$on('$stateChangeSuccess', function(event, toState ){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | AppName' ;
      }
    });
  })

  ;
})();
