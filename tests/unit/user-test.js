import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('user', 'User Model', {
  needs: [
      'model:sheet',
      'model:suit',
      'model:skill-group',
      'model:base-card',
      'model:face-card',
      'model:ace-card',
      'model:skill'
  ]
});

test('User is a valid ember-data Model', function (assert) {
  var store = this.store();
  var user = this.subject({username: 'Test User'});
  assert.ok(user);
  assert.ok(user instanceof DS.Model);
});
