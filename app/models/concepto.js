import DS from 'ember-data';

export default DS.Model.extend({
  descripcion: DS.attr('string'),
  cantidad: DS.attr('number'),
  precio: DS.attr('number'),
  descuento: DS.attr('precio'),  //Beno, se puede hacer esto???
  factura: DS.belongsTo('factura')
});
