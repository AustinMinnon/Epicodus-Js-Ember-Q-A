import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['content:ascd'],
  popularQuestions: Ember.computed.sort('category.questions', 'sortBy'),

});
