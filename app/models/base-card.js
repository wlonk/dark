import DS from "ember-data";

export default DS.Model.extend({
    value: DS.attr('number', {defaultValue: 4}),
    suit: DS.belongsTo('suit'),

    max: function () {
        return Math.min(
            parseInt(this.get('value')) + 1,
            10
        );
    }.property('value'),

    totalXp: function () {
        return this.get('value') - 4;
    }.property('value')
});
