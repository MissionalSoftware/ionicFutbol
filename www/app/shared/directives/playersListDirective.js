(function(){
  'use strict';
  angular.module('futbol')
    .controller('playersListController', PlayersListController)
    .directive('playersList', PlayersListDirective);

  PlayersListController.$inject = ['$scope', 'Players', '$stateParams'];
  function PlayersListController($scope, Players, $stateParams){

  }

  function PlayersListDirective(){
    return {
      restrict: 'E',
      controller: 'playersListController',
      scope: {
        players: '=playersSource',
        playerClick: '&onPlayerClick'
      },
      templateUrl: '/app/shared/directives/playersTemplate.html'
    };
  }


})();
