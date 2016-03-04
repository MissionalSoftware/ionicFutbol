(function(){
  'use strict';
  angular.module('futbol')
    .controller('playersListController', PlayersListController)
    .directive('playerList', PlayersListDirective);

  PlayersListController.$inject = ['$scope', 'Players', '$stateParams'];
  function PlayersListController($scope, Players, $stateParams){
    $scope.clickedPlayer = function(player){
      $scope.callback(player);
    };
  }

  function PlayersListDirective(){
    return {
      restrict: 'E',
      replace: true,
      controller: PlayersListController,
      scope: {
        players: '=',
        callback: '='
      },
      templateUrl: '/app/shared/directives/playerListTemplate.html'
    };
  }
})();
