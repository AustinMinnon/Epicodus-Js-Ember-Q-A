import Ember from 'ember';

export function questionsPopularity(params) {
  var question = params[0];
  if(question.get('answers').get('length') >=3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }else if (question.get('answers').get('length') >1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok-circle"><span>')
  }else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-remove-circle"><span>')
  }
}

export default Ember.Helper.helper(questionsPopularity);
