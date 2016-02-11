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

  GameDetail.$inject = ['$scope', 'Games', '$stateParams'];
  function GameDetail ($scope, Games, $stateParams){
    var vm = this;
    vm.game = Games.get($stateParams.gameId);
    vm.prettyGameTime = '';

    if (vm.game.gametime) {
      vm.prettyGameTime = PrettyGameTime(vm.game.gametime);
    }

    /**
     * @return {string}
     * */
    function PrettyGameTime(epochTime){
      if (!epochTime) return '';
      var timePart = new Date(epochTime);
      var prettyDate = new Date();
      prettyDate.setHours(timePart.getUTCHours(), timePart.getUTCMinutes(), 0);
      return prettyDate.toString();
    }

    $scope.timePickerObject = {
      inputEpochTime: ((new Date()).getHours() * 60 * 60),
      step: 15,
      format: 12,
      titleLabel: '12-hour Format',
      setLabel: 'Set',
      closeLabel: 'Close',
      setButtonType: 'button-positive',
      closeButtonType: 'button-stable',
      callback: function (val) {
        timePickerCallback(val);
      }
    };

    function timePickerCallback(val){
      if (typeof (val) !== 'undefined'){
        vm.game.gametime = val;
        vm.prettyGameTime = PrettyGameTime(val);
      }
    }

  }


})();
