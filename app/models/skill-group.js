import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    sheet: DS.belongsTo('sheet'),
    skills: DS.hasMany('skill'),

    totalXp: function () {
        return this.get('skills').reduce(function (a, b) {
            return a + b.get('totalXp');
        }, 0);
    }.property('skills.@each.apt', 'skills.@each.edu', 'skills.@each.exp', 'skills.@each.acc')
});
