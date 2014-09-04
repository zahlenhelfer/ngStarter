describe( 'AboutCtrl', function() {
  'use strict';

  var Ctrl, $location, $scope;

  beforeEach( module( 'appName.about' ) );

  beforeEach( inject( function( $controller, _$location_, $rootScope ) {
    $location = _$location_;
    $scope = $rootScope.$new();
    Ctrl = $controller( 'AboutCtrl', { $location: $location, $scope: $scope });
  }));

  describe( 'dropdownDemoItems', function() {
    it('has 4 items', function() {
      expect($scope.dropdownDemoItems.length).toBe(4);
    });
  });
});
