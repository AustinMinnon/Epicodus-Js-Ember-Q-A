import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        note: this.get('note'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
    cancel(){
      this.set('updateQuestionForm', false);
    }
  }
});
