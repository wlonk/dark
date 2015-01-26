import DS from "ember-data";

export default DS.Model.extend({
    user: DS.belongsTo('user', {async: true}),
    name: DS.attr('string'),
    look: DS.attr('string'),
    suits: DS.hasMany('suit', {async: true}),
    skillGroups: DS.hasMany('skillGroup', {async: true}),

    totalXp: function () {
        return this.get('suits').reduce(function (a, b) {
            return a + b.get('totalXp');
        }, 0) + this.get('skillGroups').reduce(function (a, b) {
            return a + b.get('totalXp');
        }, 0);
    }.property('suits.@each.totalXp', 'skillGroups.@each.totalXp')
});
