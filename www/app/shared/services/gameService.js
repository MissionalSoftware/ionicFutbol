(function(){
  "use strict";


  angular.module('futbol')

    .factory('Games', function(){
      var games = [
        { id: 1, name: 'vs. Australia', date: '2016-06-12T18:30:43.511Z', times: { start: 0, mid: 0, end: 0}},
        { id: 2, name: 'vs. Spain', date: '2016-06-12T18:30:43.511Z', times: { start: 0, mid: 0, end: 0}},
        { id: 3, name: 'vs. Germany', date: '2016-06-12T18:30:43.511Z', times: { start: 0, mid: 0, end: 0}}
      ];


      return {
        all: function () {
          return games;
        },
        remove: function(game) {
          games.splice(games.indexOf(game), 1);
        },
        get: function(gameId) {
          for (var i = 0; i < games.length; i++){
            if (games[i].id === parseInt(gameId)) {
              return games[i];
            }
          }
          return null;
        }
      }
    });
})();
