import DS from 'ember-data';

export default DS.Model.extend({
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
