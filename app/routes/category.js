import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  sortBy: ['title:desc'],
  categoryQuestions: Ember.computed.sort('category.questions', 'sortBy'),
  actions: {
    update(question, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        question.set(key,params[key]);
      }
    });
    question.save();
    this.transitionTo('index');
  },
  saveQuestion(params) {
    var newQuestion = this.store.createRecord('question', params);
    var category = params.category;
    debugger;
    category.get('questions').addObject(newQuestion);
    newQuestion.save().then(function() {
      return category.save();
    });
    this.transitionTo('category', params.category);
  },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
  }
});
