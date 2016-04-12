import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('category', params.category_id);
  },
  actions: {
    delete(category) {
      if(confirm('Delete this ENTIRE category?')) {
      category.destroyRecord();
      }
    },
  }
});
