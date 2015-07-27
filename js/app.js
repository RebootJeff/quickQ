angular.module('app', [
  'ngMaterial',
  'firebase'
]);

angular.module('app').controller('MainCtrl', function($firebaseObject) {
  var ctrl = this;

  var FIREBASE_URL = 'https://flickering-torch-1679.firebaseio.com/poll';
  var ref = new Firebase(FIREBASE_URL);

  var poll = $firebaseObject(ref);

  poll.$loaded().then(function() {
    ctrl.question = poll.question || '';
    ctrl.choices = poll.choices || [{}];
  });

  ctrl.CHOICE_TYPES = [
    'checkboxes',
    'radio buttons'
  ];

  ctrl.addChoice = function() {
    ctrl.choices.push({});
  };

  ctrl.submit = function() {
    console.log('poll:', poll);
    poll.question = ctrl.question;
    poll.choices = ctrl.choices;
    poll.$save();
  };
});
