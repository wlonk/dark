import Ember from "ember";
import config from '../config/environment';

export default Ember.Controller.extend({
    serverRegisterEndpoint: 'registration/',

    username: null,
    email: null,
    password1: null,
    password2: null,

    actions: {
        register: function () {
            var username = this.get("username");
            var email = this.get("email");
            var password1 = this.get("password1");
            var password2 = this.get("password2");

            if (password1 !== password2) {
                // @todo: display errors.
                return;
            }

            this.register(username, email, password1);
        }
    },

    register: function (username, email, password) {
        var _this = this;
        var data = {
            username: username,
            email: email,
            password: password
        };
        return _this.makeRequest(data).then(
            function (response) {
                _this.transitionToRoute('register-confirmation');
            },
            function (xhr) {
            }
        );
    },

    makeRequest: function(data) {
        var url = [
            config.APP.API_HOST,
            config.APP.API_NAMESPACE,
            this.serverRegisterEndpoint
        ].filter(function (e) {
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
