(function(){
  'use strict';

  angular.module('futbol')
    .factory('settingsService', SettingsService);

  SettingsService.$inject = ['$q', '$timeout'];
  function SettingsService($q, $timeout){

    function JerseyNumbers(){
      var defer = $q.defer();

      $timeout();
      for (var x = 1; x < 50; x++){

      }

return defer.promise();
}


return {
  jerseyNumbers: JerseyNumbers
}
}


})();
