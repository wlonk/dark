import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    suit: DS.belongsTo('suit', {async: true}),
    value: DS.attr('number', {defaultValue: 4}),
    ability: DS.attr('string', {defaultValue: ''}),
    advantage_1: DS.attr('string', {defaultValue: ''}),
    advantage_2: DS.attr('string', {defaultValue: ''}),
    advantage_3: DS.attr('string', {defaultValue: ''}),

    maxIntegrity: function () {
        var max = this.get('max');
        var value = this.get('value');
        if (max < value) {
            this.set('value', max);
        }
    }.observes('suit.baseCard.value'),

    abilityIntegrity: function () {
        var nullValue = '';
        if (this.get('cannotHaveAbility') && this.get('ability') !== nullValue) {
            this.set('ability', nullValue);
        }
    }.observes('value'),

    advantagesIntegrity: function () {
        var nullValue = '';
        var anyAdvantages = _.any([
            this.get('advantage_1') !== nullValue,
            this.get('advantage_2') !== nullValue,
            this.get('advantage_3') !== nullValue
        ]);
        if (!this.get('hasAbility') && anyAdvantages) {
            this.set('advantage_1', nullValue);
            this.set('advantage_2', nullValue);
            this.set('advantage_3', nullValue);
        }
    }.observes('ability'),

    max: function () {
        return parseInt(this.get('suit.baseCard.value'));
    }.property('suit.baseCard.value'),

    cannotHaveAbility: function () {
        return this.get('value') < 5;
    }.property('value'),

    hasAbility: function () {
        return !!this.get('ability');
    }.property('ability'),

    hasAdvantage1: function () {
        return !!this.get('advantage_1');
    }.property('advantage_1'),

    hasAdvantage2: function () {
        return !!this.get('advantage_2');
    }.property('advantage_2'),

    hasAdvantage3: function () {
        return !!this.get('advantage_3');
    }.property('advantage_3')
});
