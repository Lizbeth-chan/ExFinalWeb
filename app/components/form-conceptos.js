import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions:{
    save(){

        let concepto = this.get('concepto');

        concepto.save();
    },
  
}
});
