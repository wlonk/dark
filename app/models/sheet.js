import DS from "ember-data";

export default DS.Model.extend({
    user: DS.belongsTo('user', {async: true}),
    name: DS.attr('string'),
    look: DS.attr('string'),
    total_xp: DS.attr('number'),
    available_xp: DS.attr('number'),
    suits: DS.hasMany('suit', {async: true}),
    skillGroups: DS.hasMany('skillGroup', {async: true}),

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
