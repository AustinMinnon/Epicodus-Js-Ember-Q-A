import Ember from 'ember';

export default Ember.Route.extend({
  content: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),

  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.refresh();
    }
  }
});
