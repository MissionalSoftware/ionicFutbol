angular.module('futbol')

  .factory('Players', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var players = [
      { id : 1, name: 'Alejandro Yanez', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} } },
      { id : 2, name: 'Pierre Silva', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 3, name: 'David Bolaños', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 4, name: 'Quilverk Borquez', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 5, name: 'Jesus Rosero', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 6, name: 'Stalin Arauz', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 7, name: 'Alvaro Aldana', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 8, name: 'Carlos Arroyo', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 9, name: 'Andres Bolaños', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 10, name: 'Carlos Castro', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 11, name: 'Johan Chala', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 12, name: 'Benjamin Balm', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 13, name: 'Pablo Silva', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 14, name: 'Cristian Leon', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 15, name: 'Dalton Moreno', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 16, name: 'Derek Yañez', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 17, name: 'Pedro Silva', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 18, name: 'Jorge', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 19, name: 'Anthony Suarez', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 20, name: 'Hector', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 21, name: 'Daniel Amaya', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 22, name: 'Joel Romero', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 23, name: 'Manuel Diez', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 24, name: 'Guallo', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 25, name: 'Michael', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 26, name: 'Carlos Valdiviezo', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 27, name: 'Jimmy Torres', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 28, name: 'Martin Ayala', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 29, name: 'Kevin Cedeño', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 30, name: 'Alejandro', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 31, name: 'Kevin', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 32, name: 'Paul', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 33, name: 'Byron Cordero', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 34, name: 'Ruben Encalada', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  },
      { id : 35, name: 'Ricardo Martino', technicalAttributes: {footSpecific: { left: {}, right: {}}, nonFootSpecific: {}, tactical: {} }  }

    ];

    return {
      all: function() {
        return players;
      },
      remove: function(player) {
        players.splice(players.indexOf(player), 1);
      },
      get: function(playerId) {
        for (var i = 0; i < players.length; i++) {
          if (players[i].id === parseInt(playerId)) {
            return players[i];
          }
        }
        return null;
      }
    };
  });
