import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    sheet: DS.belongsTo('sheet'),
    ace: DS.belongsTo('aceCard'),
    faceCards: DS.hasMany('faceCard'),
    baseCards: DS.belongsTo('baseCard'),

    /* Cannot pass arguments from template, so this is a no-go. But logic is
     * correct. */
    baseCardDisabled: function (index) {
        return index > this.get('baseCards.value') + 1;
    },

    /* Cannot pass arguments from template, so this is a no-go. But logic is
     * correct. */
    faceCardDisabled: function (index, faceCard) {
        return index > Math.min(this.get('baseCards.value'), faceCard.get('value') + 1);
    }
});
