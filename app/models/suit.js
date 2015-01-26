import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    sheet: DS.belongsTo('sheet', {async: true}),
    ace: DS.belongsTo('aceCard', {async: true}),
    faceCards: DS.hasMany('faceCard', {async: true}),
    baseCard: DS.belongsTo('baseCard', {async: true}),

    totalXp: function () {
        return this.get('faceCards').reduce(function (a, b) {
            return a + b.get('totalXp');
        }, 0) + this.get('baseCard.totalXp') + this.get('ace.totalXp');
    }.property('baseCard.totalXp', 'faceCards.@each.totalXp', 'ace.totalXp')
});
