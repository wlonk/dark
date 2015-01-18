import Ember from "ember";

export default Ember.Route.extend({
    model: function () {
        return {
            'sheets': this.store.find('sheet')
        };
    }
});
