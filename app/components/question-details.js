import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment:false,
  actions: {
    delete(question) {
        this.sendAction('destroyQuestion', question);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
  }
});
