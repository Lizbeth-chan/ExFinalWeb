import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    this.get('store').find('factura', params.id).then((f)=>{
      return this.store.createRecord('concepto', {
        factura: f
      });
    })
  }
});
