import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    suit: DS.belongsTo('suit'),
    value: DS.attr('number', {defaultValue: 4}),
    power1: DS.attr('string'),
    power2: DS.attr('string'),
    power3: DS.attr('string'),

    max: function () {
        return Math.min(
            parseInt(this.get('suit.baseCards.value')),
            parseInt(this.get('value')) + 1
        );
    }.property('suit.baseCards.value', 'value'),

    totalXp: function () {
        var power1 = !!this.get('power1') ? 1 : 0;
        var power2 = !!this.get('power2') ? 1 : 0;
        var power3 = !!this.get('power3') ? 1 : 0;
        var powerSum = power1 + power2 + power3;
        return parseInt(this.get('value')) + powerSum - 4;
    }.property('value', 'power1', 'power2', 'power3')
});
