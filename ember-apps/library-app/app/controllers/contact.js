import Ember from 'ember';

export default Ember.Controller.extend({

  //Setup regex for email address
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  //Make sure message is not empty
  isMessageEnoughLong: Ember.computed.gte('message.length', 1),
  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Press OK to finish sending email');

      var responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
