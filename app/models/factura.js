import DS from 'ember-data';

export default DS.Model.extend({
  fecha: DS.attr('date'),
  folio: DS.attr('number'),
  serie: DS.attr('string'),
  formaPago: DS.attr('number'),
  conceptos: DS.hasMany('concepto')

});
