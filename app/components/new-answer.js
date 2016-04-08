import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params= {
        reply: this.get('reply') ? this.get('reply'):"",
        author: this.get('author') ? this.get('author'):"",
        question: this.get('question')
      };
      debugger;
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    },
  }
});
