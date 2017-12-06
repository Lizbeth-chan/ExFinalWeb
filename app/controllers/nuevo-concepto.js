import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    save(){
      let concepto = this.get('concepto');
      concepto.save()
    },
    regresar(){
      return this.transitionToRoute('nueva-factura', model.id)
    }
  }
});
