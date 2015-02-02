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
    }.property('suits.@each.totalXp', 'skillGroups.@each.totalXp'),

    isAnyDirty: function () {
        var _this = this;
        return _.any(
            _.flatten([
                _this.get('isDirty'),
                _this.get('skillGroups').map(function (skillGroup) {
                    return skillGroup.get('hasDirtySkill');
                }),
                _this.get('suits').map(function (suit) {
                    return suit.get('hasDirtyElements');
                })
            ])
        );
    }.property(
        'isDirty',
        'suits.@each.hasDirtyElements',
        'skillGroups.@each.hasDirtySkill'
    )
});
