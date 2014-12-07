import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    sheet: DS.belongsTo('sheet'),
    skills: DS.hasMany('skill')
});
