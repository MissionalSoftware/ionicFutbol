(function(){
  "use strict";

  angular.module('futbol')
    .controller('playersCtrl', Players)
    .controller('playerDetailCtrl', PlayerDetail);

  Players.$inject = ['Players'];
  function Players (Players){
    var vm = this;
    vm.players = Players.all();
  }

  PlayerDetail.$inject = ['Players', '$stateParams'];
  function PlayerDetail (Players, $stateParams){
    var vm = this;
    vm.player = Players.get($stateParams.playerId);
  }

})();
