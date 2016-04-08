import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params= {
        content: this.get('content') ? this.get('content') :"question",
        author: this.get('author') ? this.get('author') :"author",
        note: this.get('note') ? this.get('note') :"",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    },
    cancel(){
      this.set('addNewQuestion', false);
    }
  }
});
