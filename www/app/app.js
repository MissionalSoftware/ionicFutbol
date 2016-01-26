angular.module('futbol', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/shared/templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.home',{
    url: '/home',
    views: {
      'menuContent' : {
        templateUrl: 'app/home/templates/home.html'
      }
    }
  })
  .state('app.games', {
    url: '/games',
    views: {
      'menuContent': {
        templateUrl: 'app/games/templates/games.html'
      }
    }
  })
  .state('app.players', {
    url: '/players',
    views: {
      'menuContent': {
        templateUrl: 'app/players/templates/players.html',
        controller: 'playerCtrl',
        controllerAs: 'vm'
      }
    }
  })
    .state('app.playerDetail', {
      url: '/playerDetail/:playerId',
      views: {
        'menuContent': {
          templateUrl: 'app/players/templates/playerDetail.html',
          controller: 'playerDetailCtrl',
          controllerAs: 'vm'
        }
      }
    })
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'app/settings/templates/settings.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
