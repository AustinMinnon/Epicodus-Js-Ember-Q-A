import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  answers: DS.hasMany('answer', {async: true})
});
