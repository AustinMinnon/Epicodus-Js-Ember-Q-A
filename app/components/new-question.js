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
        category: this.get('category') ? this.get('category'):""
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    },
  }
});
