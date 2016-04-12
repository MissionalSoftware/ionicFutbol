(function(){
  'use strict';
  angular.module('futbol')
    .controller('playerListController', PlayerListController)
    .directive('playerList', PlayerListDirective);

  PlayerListController.$inject = ['$scope', 'Players', '$stateParams'];
  function PlayerListController($scope, Players, $stateParams){
    $scope.clickedPlayer = function(player){
      $scope.callback(player);
    };
  }

  function PlayerListDirective(){
    return {
      restrict: 'E',
      replace: true,
      controller: PlayerListController,
      scope: {
        players: '=',
        callback: '='
      },
      templateUrl: '/app/shared/directives/playerListTemplate.html'
    };
  }
})();
