import Ember from "ember";

export default Ember.Component.extend({
    model: null,
    min: null,
    max: null,
    disabled: null,

    values: function () {
        var min = this.get('min');
        var clickableMax = this.get('model.max');
        var current = this.get('model.value');
        var max = this.get('max');
        var arr = _.range(min + 1, max + 1);
        var labels = ['', '11'];
        return arr.map(function (e, i) {
            return {
                display: labels[i],
                value: e,
                disabled: this.get('disabled') || e > clickableMax,
                checked: e <= current,
                last: e === max
            };
        }.bind(this));
    }.property('model.max', 'model.value')
});
