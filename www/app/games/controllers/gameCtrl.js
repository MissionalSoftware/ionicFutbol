(function(){
  "use strict";

  angular.module('futbol')
    .controller('gamesCtrl', Games)
    .controller('gameDetailCtrl', GameDetail);

  Games.$inject = ['$scope', 'Games', '$state'];
  function Games ($scope, Games, $state){
    var vm = this;
    vm.games = Games.all();
    vm.addEditGame = AddEditGame;
    vm.localeDate = LocaleDate;



    function AddEditGame(gameId){
      $state.go('app.gameDetail', { gameId: gameId})
    }


    /**
     * @return {string}
     */
    function LocaleDate(date){
      var newDate = new Date(date);
      return newDate.toDateString();
    }

  }

  GameDetail.$inject = ['Games', '$stateParams'];
  function GameDetail (Games, $stateParams){
    var vm = this;
    vm.game = Games.get($stateParams.gameId);
  }

})();
