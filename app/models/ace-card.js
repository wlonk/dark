import DS from "ember-data";

export default DS.Model.extend({
    value: DS.attr('number', {defaultValue: 0}),
    suit: DS.belongsTo('suit', {async: true}),

    totalXp: function () {
        return parseInt(this.get('value'));
    }.property('value')
});
