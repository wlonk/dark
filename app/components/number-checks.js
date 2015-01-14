import Ember from "ember";

export default Ember.Component.extend({
    model: null,

    values: function () {
        var min = 4;
        var clickableMax = this.get('model.max');
        var current = this.get('model.value');
        var max = 10;
        var arr = Array.apply(null, Array(max - min)).map(function (_, i) {return i + min + 1;});
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
