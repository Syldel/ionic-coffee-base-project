# EXAMPLE

# Use angular.module('app', []) to set a module.

angular.module('starter.users', []).factory 'User', ($http, $rootScope) ->

  firebaseLogin: (pCallback) ->
    # Example function
    return
