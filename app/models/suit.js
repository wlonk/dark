import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    sheet: DS.belongsTo('sheet'),
    ace: DS.belongsTo('aceCard'),
    faceCards: DS.hasMany('faceCard'),
    baseCards: DS.belongsTo('baseCard'),

    totalXp: function () {
        return this.get('faceCards').reduce(function (a, b) {
            return a + b.get('totalXp');
        }, 0) + this.get('baseCards.totalXp') + this.get('ace.totalXp');
    }.property('baseCards.totalXp', 'faceCards.@each.totalXp', 'ace.totalXp')
});
