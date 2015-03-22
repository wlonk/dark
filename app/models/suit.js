import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    sheet: DS.belongsTo('sheet', {async: true}),
    ace: DS.belongsTo('aceCard', {async: true}),
    faceCards: DS.hasMany('faceCard', {async: true}),
    baseCard: DS.belongsTo('baseCard', {async: true}),

    hasDirtyElements: function () {
        return _.any(
            _.flatten([
                this.get('ace.isDirty'),
                this.get('faceCards').map(function (faceCard) {
                    return faceCard.get('isDirty');
                }),
                this.get('baseCard.isDirty')
            ])
        );
    }.property(
        'ace.isDirty',
        'faceCards.@each.isDirty',
        'baseCard.isDirty'
    )
});
