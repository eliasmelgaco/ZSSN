import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('people', function() {
    this.route('register');
    this.route('updateLocation');
  });
  this.route('auto-complete');
});

export default Router;
