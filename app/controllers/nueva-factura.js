import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    save(){
      let factura = this.get('factura');

      factura.save().then(()=>{
        Ember.RSVP.all(this.get('factura.conceptos').invoke('save')).then(()=>{
          // this.sendAction('didSave')
        })
      })
    },

  }
});
