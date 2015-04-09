import DS from "ember-data";

export default DS.Model.extend({
    username: DS.attr('string'),
    displayName: DS.attr('string'),
    email: DS.attr('string'),
    sheets: DS.hasMany('sheet', {async: true}),

    displayNameProperty: function () {
        return this.get('displayName') || this.get('username');
    }.property('username', 'displayName')
});
