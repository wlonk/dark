import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.Controller.reopen({
    sessionUser: function () {
        if (this.get('session.isAuthenticated')) {
            return this.store.find('user', this.get('session.content.user_id'));
        } else {
            return null;
        }
    }.property('session.content')
});

export default App;
