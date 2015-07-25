angular.module('app', ['ngMaterial', 'firebase']);

angular.module('app').controller('MainCtrl', function($firebaseObject) {
  var ctrl = this;

  var FIREBASE_URL = 'https://flickering-torch-1679.firebaseio.com/';
  var ref = new Firebase(FIREBASE_URL);

  ctrl.question = 'hello';
});
