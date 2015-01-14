import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    suit: DS.belongsTo('suit'),
    value: DS.attr('number', {defaultValue: 4}),
    power1: DS.attr('string'),
    power2: DS.attr('string'),
    power3: DS.attr('string'),

    maxIntegrity: function () {
        if (this.get('max') < this.get('value')) {
            this.set('value', this.get('max'));
        }
    }.observes('suit.baseCards.value'),

    max: function () {
        return Math.min(
            parseInt(this.get('suit.baseCards.value')),
            parseInt(this.get('value')) + 1
        );
    }.property('suit.baseCards.value', 'value'),

    hasPower1: function () {
        return !!this.get('power1');
    }.property('power1'),

    hasPower2: function () {
        return !!this.get('power2');
    }.property('power2'),

    hasPower3: function () {
        return !!this.get('power3');
    }.property('power3'),

    totalXp: function () {
        var power1 = this.get('hasPower1') ? 1 : 0;
        var power2 = this.get('hasPower2') ? 1 : 0;
        var power3 = this.get('hasPower3') ? 1 : 0;
        var powerSum = power1 + power2 + power3;
        return parseInt(this.get('value')) + powerSum - 4;
    }.property('value', 'power1', 'power2', 'power3')
});
