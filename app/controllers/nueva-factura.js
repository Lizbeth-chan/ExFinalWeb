import Ember from 'ember';
// import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
  store: Ember.inject.service('store'),

  actions:{
    save(){
      let factura = this.get('model');
      let sweetalert = this.get('sweetAlert');
      factura.save().then(()=>{
        Ember.RSVP.all(factura.get('conceptos').invoke('save')).then(()=>{
          alert('se guardo')
          this.transitionToRoute('lista-facturas')
          // sweetAlert({
          //    title:'Se ha guardado',
          //    type:'success'
          // });
        })
      })
    },
    guardarConcepto(){
      let concepto = this.get('store').createRecord('concepto', {
        factura: this.get('model')
      })
    }

  }
});
