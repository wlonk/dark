import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
    serverTokenEndpoint: 'api-token-auth/',
    resourceName: 'user',
    tokenAttributeName: '',
    identificationAttributeName: '',

    restore: function (data) {
        var _this = this;
        var propertiesObject = Ember.Object.create(data);
        return new Ember.RSVP.Promise(function(resolve, reject) {
            var noToken = !Ember.isEmpty(propertiesObject.get(_this.tokenAttributeName));
            var noIdAttribute = !Ember.isEmpty(propertiesObject.get(_this.identificationAttributeName));
            if (noToken && noIdAttribute) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    authenticate: function (options) {
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
            var data = {
                username: options.identification,
                password: options.password
            };

            _this.makeRequest(data).then(function(response) {
                Ember.run(function() {
                    resolve(response);
                });
            }, function(xhr, status, error) {
                Ember.run(function() {
                    reject(xhr.responseJSON || xhr.responseText);
                });
            });
        });
    },

    invalidate: function (data) {
        return new Ember.RSVP.resolve();
    },

    makeRequest: function(data, resolve, reject) {
        var url = [config.APP.API_HOST, config.APP.API_NAMESPACE, this.serverTokenEndpoint].filter(function (e) {
            return !!e;
        }).join("/");
        return Ember.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: 'json'
        });
    }
});
