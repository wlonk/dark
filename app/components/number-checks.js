import Ember from "ember";

export default Ember.Component.extend({
    model: null,
    min: null,
    max: null,

    values: function () {
        var min = this.get('min');
        var clickableMax = this.get('model.max');
        var current = this.get('model.value');
        var max = this.get('max');
        var arr = _.range(min + 1, max + 1);
        return arr.map(function (e) {
            return {
                value: e,
                disabled: e > clickableMax,
                checked: e <= current,
                last: e === max
            };
        });
    }.property('model.max', 'model.value')
});
