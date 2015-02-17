import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('sheets', {path: '/sheets'}, function () {
        this.route('new', {path: '/new'});
    });
    this.resource('sheet', {path: '/sheets/:sheet_id'});
    this.resource('users', {path: '/users'});
    this.resource('user', {path: '/users/:user_id'});
    this.resource('login');
});

export default Router;
