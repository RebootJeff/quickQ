angular.module('app').factory('Choices', function($firebaseArray) {
  'use strict';

  var FIREBASE_URL = 'https://flickering-torch-1679.firebaseio.com/choices';
  var ref = new Firebase(FIREBASE_URL);

  var choices = $firebaseArray(ref);

  choices.saveAll = function() {
    return choices.map(function(choice) {
      return choices.$save(choice);
    });
  };

  return choices;
});
