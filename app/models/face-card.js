import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    suit: DS.belongsTo('suit', {async: true}),
    value: DS.attr('number', {defaultValue: 4}),
    ability: DS.attr('string', {defaultValue: ''}),
    advantage1: DS.attr('string', {defaultValue: ''}),
    advantage2: DS.attr('string', {defaultValue: ''}),
    advantage3: DS.attr('string', {defaultValue: ''}),

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
            this.get('advantage1') !== nullValue,
            this.get('advantage2') !== nullValue,
            this.get('advantage3') !== nullValue
        ]);
        if (!this.get('hasAbility') && anyAdvantages) {
            this.set('advantage1', nullValue);
            this.set('advantage2', nullValue);
            this.set('advantage3', nullValue);
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
        return !!this.get('advantage1');
    }.property('advantage1'),

    hasAdvantage2: function () {
        return !!this.get('advantage2');
    }.property('advantage2'),

    hasAdvantage3: function () {
        return !!this.get('advantage3');
    }.property('advantage3'),

    totalXp: function () {
        var advantage1 = this.get('hasAdvantage1') ? 1 : 0;
        var advantage2 = this.get('hasAdvantage2') ? 1 : 0;
        var advantage3 = this.get('hasAdvantage3') ? 1 : 0;
        var advantageSum = advantage1 + advantage2 + advantage3;
        return parseInt(this.get('value')) + advantageSum - 4;
    }.property('value', 'advantage1', 'advantage2', 'advantage3')
});
