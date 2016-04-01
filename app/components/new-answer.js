import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer(question) {
      var params= {
        reply: this.get('reply'),
        author: this.get('author'),
        question: question
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    },
    cancel() {
      this.set('addNewAnswer', false);
    }
  }
});
