import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    sheet: DS.belongsTo('sheet', {async: true}),
    skills: DS.hasMany('skill', {async: true}),

    hasDirtySkill: function () {
        return _.any(this.get('skills').map(function (skill) {
            return skill.get('isDirty');
        }));
    }.property('skills.@each.isDirty')
});
