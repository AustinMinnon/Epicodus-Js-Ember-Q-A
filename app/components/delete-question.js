import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if(confirm('Delete this question?')) {
        this.sendAction('delete', question);
      }
    },
  }
});
