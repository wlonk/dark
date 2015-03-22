import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    skillGroup: DS.belongsTo('skillGroup', {async: true}),
    apt: DS.attr('boolean'),
    edu: DS.attr('boolean'),
    exp: DS.attr('boolean'),
    acc: DS.attr('boolean'),

    accIntegrity: function () {
        if (this.get('accDisabled')) {
            this.set('acc', false);
        }
    }.observes('apt', 'edu', 'exp'),

    accDisabled: function () {
        if (this.get('skillGroup.sheet.cannotEditSheet')) {
            return false;
        }
        return !(this.get('apt') || this.get('edu') || this.get('exp'));
    }.property('apt', 'edu', 'exp')
});
