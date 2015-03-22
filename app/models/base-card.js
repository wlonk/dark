import DS from "ember-data";

export default DS.Model.extend({
    value: DS.attr('number', {defaultValue: 4}),
    suit: DS.belongsTo('suit', {async: true}),
    max: 10
});
