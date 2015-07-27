angular.module('app').factory('Poll', function($firebaseObject) {
  'use strict';

  var FIREBASE_URL = 'https://flickering-torch-1679.firebaseio.com/poll';
  var ref = new Firebase(FIREBASE_URL);

  var poll = $firebaseObject(ref);

  return poll;
});
