import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    suit: DS.belongsTo('suit'),
    value: DS.attr('number', {defaultValue: 4}),
    power1: DS.attr('string'),
    power2: DS.attr('string'),
    power3: DS.attr('string')
});
