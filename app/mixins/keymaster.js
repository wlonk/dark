import Ember from "ember";

export default Ember.Mixin.create({
    init: function () {
        this._super();
        _.each(this.shortcuts, function (action, shortcut) {
            key(shortcut, "all", function (event, handler) {
                event.preventDefault();
                this.send(action);
            }.bind(this));
        }.bind(this));
    },
    actions: {
        willTransition: function (transition) {
            Object.keys(this.shortcuts).forEach(function (shortcut) {
                key.unbind(shortcut);
            });
        }
    }
});
