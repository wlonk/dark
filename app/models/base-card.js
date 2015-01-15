import DS from "ember-data";

export default DS.Model.extend({
    value: DS.attr('number', {defaultValue: 4}),
    suit: DS.belongsTo('suit'),
    max: 10,

    totalXp: function () {
        return this.get('value') - 4;
    }.property('value')
});
