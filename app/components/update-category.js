import Ember from 'ember';

export default Ember.Component.extend({
  updateCategoryForm: false,
  actions: {
    updateCategoryForm() {
      this.set('updateCategoryForm', true);
    },
    update(category) {
      var params = {
        title: this.get('title'),
        description: this.get('description')
      };
      this.set('updateCategoryForm', false);
      this.sendAction('update', category, params);
    },
    cancel(){
      this.set('updateCategoryForm', false);
    }
  }
});
