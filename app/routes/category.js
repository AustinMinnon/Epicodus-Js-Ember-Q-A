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
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('index');
    },
    editAnswer(answer, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key] !== undefined) {
        answer.set(key,params[key]);
      }
    });
    answer.save();
    this.transitionTo('question', params.question);
  },
    delete(answer) {
      answer.destroyRecord();
    }
  }
});