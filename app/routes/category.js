import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  sortBy: ['title:desc'],
  categoryQuestions: Ember.computed.sort('category.questions', 'sortBy'),
  actions: {
  saveQuestion(params) {
    var newQuestion = this.store.createRecord('question', params);
    var category = params.category;
    category.get('questions').addObject(newQuestion);
    newQuestion.save().then(function() {
      return category.save();
    });
    this.transitionTo('category', params.category);
  },
  update(category, params) {
  Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      category.set(key,params[key]);
    }
  });
  category.save();
  this.transitionTo('index');
},
  }
});
