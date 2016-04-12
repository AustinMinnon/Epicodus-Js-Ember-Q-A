import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
//error on line 12, cannot attain question to tie answer to
  actions:{
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    update(question, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        question.set(key,params[key]);
      }
    });
    question.save();
    this.transitionTo('index');
  },
  saveAnswer(params) {
    var newAnswer = this.store.createRecord('answer', params);
    var question = params.question;
    question.get('answers').addObject(newAnswer);
    newAnswer.save().then(function() {
      return question.save();
    });
    this.transitionTo('question', params.question);
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
