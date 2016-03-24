(function() {
  angular.module('futbol')
    .controller('gameDetailCtrl', GameDetail);

  GameDetail.$inject = ['$scope', 'Games', '$stateParams', '$state'];
  function GameDetail ($scope, Games, $stateParams, $state){
    var vm = this;
    vm.game = $stateParams.gameId ? Games.get($stateParams.gameId) : Games.new();
    vm.prettyTime = '';
    vm.prettyDate = '';
    vm.currentDate = '';
    vm.currentHour = 0;
    vm.currentMinute = 0;
    vm.minDate = new Date(2015, 0, 1);
    vm.saveGame = SaveGame;

    function SaveGame(){
      Games.save(vm.game);
      $state.go('app.games');
    }


    //Date Area
    if (vm.game.gameDate){
      vm.currentDate = new Date(vm.game.gameDate);
      vm.prettyDate = PrettyGameDate(vm.game.gameDate);
      vm.prettyTime = PrettyGameTime(vm.game.gameDate);
    } else {
      vm.currentDate = new Date(Date.now());
    }

    vm.currentHour = vm.currentDate.getUTCHours();
    vm.currentMinute = vm.currentDate.getUTCMinutes();

    vm.datePickerCallback = function(val){
      if(val){
        val.setHours(vm.currentHour, vm.currentMinute, 0, 0);
        vm.game.gameDate = val.toJSON();
        vm.prettyDate = PrettyGameDate(val);
      }
    };

    /**
     * @return {string}
     */
    function PrettyGameDate(date){
      if (date){
        var prettyDate = new Date(date);
        return prettyDate.toLocaleDateString();
      }
    }

    //End Date Area

    //Time Area

    if (vm.game.gameDate){
      vm.prettyTime = PrettyGameTime(vm.game.gameDate);
    }

    /**
     * @return {string}
     * */
    function PrettyGameTime(date){
      if (!date) return '';
      var timePart = new Date(date);

      return timePart.toLocaleTimeString();
    }

    $scope.timePickerObject = {
      inputEpochTime: (vm.currentDate.getHours() * 60 * 60),
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
      if (val){
        var tempTime = new Date(val * 1000);
        var tempDate = new Date(vm.game.gameDate);
        tempDate.setHours(tempTime.getUTCHours(), tempTime.getUTCMinutes(), tempTime.getUTCSeconds(), tempTime.getUTCMilliseconds());
        vm.currentHour = tempTime.getUTCHours();
        vm.currentMinute = tempTime.getUTCMinutes();
        vm.game.gameDate = tempDate.toJSON();
        vm.prettyTime = PrettyGameTime(vm.game.gameDate);
      }
    }

  }
})();
