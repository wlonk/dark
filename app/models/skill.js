import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    skillGroup: DS.belongsTo('skillGroup'),
    apt: DS.attr('boolean'),
    edu: DS.attr('boolean'),
    exp: DS.attr('boolean'),
    acc: DS.attr('boolean'),

    accDisabled: function () {
        return !(this.get('apt') || this.get('edu') || this.get('exp'));
    }.property('apt', 'edu', 'exp')
});
