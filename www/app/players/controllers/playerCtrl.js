(function(){
  "use strict";

  angular.module('futbol')
    .controller('playersCtrl', Players)
    .controller('playerDetailCtrl', PlayerDetail);

  Players.$inject = ['Players', '$state'];
  function Players (Players, $state){
    var vm = this;
    vm.players = Players.all();

    vm.playerClick = function(player){
      $state.go('app.playerDetail', {playerId: player.id});
    };
  }

  PlayerDetail.$inject = ['Players', '$stateParams'];
  function PlayerDetail (Players, $stateParams){
    var vm = this;
    vm.player = Players.get($stateParams.playerId);
    vm.prettyDate = (vm.player.dob || new Date()).toLocaleDateString();
    vm.currentDate = vm.player.dob || new Date();
    vm.playerDOB = function(val){
      vm.player.dob = val.toJSON();
      vm.prettyDate = val.toLocaleDateString();
    }
  }

})();
