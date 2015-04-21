import Ember from "ember";

export default Ember.Mixin.create({
    init: function () {
        this._super();
        key.filter = function () {
            // We want shortcuts globally for now; this may eventually change.
            return true;
        };
        _.each(this.shortcuts, function (action, shortcut) {
            key(shortcut, "all", function (event) {
                event.preventDefault();
                this.send(action);
            }.bind(this));
        }.bind(this));
    },
    actions: {
        willTransition: function () {
            Object.keys(this.shortcuts).forEach(function (shortcut) {
                key.unbind(shortcut);
            });
        }
    }
});
