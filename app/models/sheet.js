import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    look: DS.attr('string'),
    totalXp: DS.attr('number'),
    suits: DS.hasMany('suit'),
    skillGroups: DS.hasMany('skillGroup'),
});
