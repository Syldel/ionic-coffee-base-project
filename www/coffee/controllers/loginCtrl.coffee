# EXAMPLE !!!

LoginCtrl = ($scope, $ionicPopup, User) ->

  init = ->
    console.log 'LoginCtrl::init'

  $scope.facebookLogin = ->
    console.log 'LoginCtrl::facebookLogin'

    User.firebaseLogin (error) ->
      if error
        $ionicPopup.alert(
          title: 'Problème !'
          content: 'Connexion imposisble'
        ).then (result) ->
          #if (!result) {
          ionic.Platform.exitApp()
          #}

  init()

# Inject my dependencies
LoginCtrl.$inject = ['$scope', '$ionicPopup', 'User']


# To don't need the controllers.js file
#angular.module('starter.controllers', []).controller "LoginCtrl", LoginCtrl
