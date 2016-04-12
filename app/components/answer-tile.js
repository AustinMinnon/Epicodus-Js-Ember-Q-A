import Ember from 'ember';

export default Ember.Component.extend({
actions: {
  delete(answer) {
    if(confirm("are you sure?")) {
    this.sendAction('delete', answer);
      }
    }
  }
});
