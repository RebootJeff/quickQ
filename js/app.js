angular.module('app', [
  'ngMaterial',
  'firebase'
]);

angular.module('app').controller('MainCtrl', function($q, Poll, Choices) {
  'use strict';
  var ctrl = this;

  $q.all([
    Poll.$loaded(),
    Choices.$loaded()
  ])
  .then(initialize);

  function initialize() {
    ctrl.question = Poll.question || '';
    ctrl.type = Poll.type;

    if(Choices.length === 0) {
      Choices.$add({text: ''});
    }
    ctrl.choices = Choices;
  }

  ctrl.CHOICE_TYPES = [
    'checkboxes',
    'radio buttons'
  ];

  ctrl.addChoice = function() {
    Choices.$add({text: ''});
  };

  ctrl.removeChoice = function(index) {
    Choices.$remove(index);
  };

  ctrl.submit = function() {
    Poll.question = ctrl.question;
    Poll.type = ctrl.type;

    Poll.$save();
    Choices.saveAll();
  };
});
