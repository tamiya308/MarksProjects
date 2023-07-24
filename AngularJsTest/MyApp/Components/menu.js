angular.
  module('HangmanApp').
  component('menu', {
    template: '\
    <a href="#!/misctesting">Misc Testing</a><br/>\
    <a href="#!/timertesting">Timer Testing</a><br/>\
    <a href="#!/httptesting">Http Testing</a><br/>\
    <a href="#!/componenttesting">Component Testing</a><br/>\
    <a href="#!/controllertesting">Controller Testing</a><br/>',
    controller: function menuComponent() {
      this.message = 'This is menuComponent';
    }
  });