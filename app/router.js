import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('inicio', {path: '/'});
  this.route('lista-facturas');
  this.route('nueva-factura');
  this.route('nuevo-concepto', {path: 'nuevo-concepto/:id'});
});

export default Router;
