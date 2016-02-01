angular.module('futbol')

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('app/shared/templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('playersCtrl', function($scope, Players) {
  var vm = this;
  vm.players = Players.all();
})

.controller('playerDetailCtrl', function(Players, $stateParams){
  var vm = this;
  vm.player = Players.get($stateParams.playerId);
})

.controller('gamesCtrl', function($scope, Games) {
  var vm = this;
  vm.games = Games.all();
})

.controller('gameDetailCtrl', function(Games, $stateParams) {
  var vm = this;
  vm.game = Games.get($stateParams.gameId)
});
