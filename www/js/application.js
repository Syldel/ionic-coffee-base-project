angular.module('starter', ['ionic']).run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  return;
  return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    return console.log("$stateChangeStart fromState.name:" + fromState.name);
  });
});

var LoginCtrl;

LoginCtrl = function($scope, $ionicPopup, User) {
  var init;
  init = function() {
    return console.log('LoginCtrl::init');
  };
  $scope.facebookLogin = function() {
    console.log('LoginCtrl::facebookLogin');
    return User.firebaseLogin((function(_this) {
      return function(error) {
        if (error) {
          return $ionicPopup.alert({
            title: 'Problème !',
            content: 'Connexion imposisble'
          }).then(function(result) {
            return ionic.Platform.exitApp();
          });
        } else {
          return console.log('User.firebaseLogin no Error');
        }
      };
    })(this));
  };
  init();
};

LoginCtrl.$inject = ['$scope', '$ionicPopup', 'User'];

angular.module('starter.users', []).factory('User', function($http, $rootScope) {
  return {
    firebaseLogin: function(pCallback) {
      return "OK";
    }
  };
});
