import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    skillGroup: DS.belongsTo('skillGroup'),
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
        return !(this.get('apt') || this.get('edu') || this.get('exp'));
    }.property('apt', 'edu', 'exp'),

    totalXp: function () {
        return [
            this.get('apt'), 
            this.get('edu'), 
            this.get('exp'), 
            this.get('acc')
        ].reduce(function (a, b) {
            return a + (b ? 1 : 0);
        }, 0);
    }.property('apt', 'edu', 'exp', 'acc')
});
