import DS from "ember-data";

export default DS.Model.extend({
    value: DS.attr('number', {defaultValue: 6}),
    suit: DS.belongsTo('suit')
});
