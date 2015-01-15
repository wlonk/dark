import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    suit: DS.belongsTo('suit'),
    value: DS.attr('number', {defaultValue: 4}),
    ability: DS.attr('string'),
    advantage1: DS.attr('string'),
    advantage2: DS.attr('string'),
    advantage3: DS.attr('string'),

    maxIntegrity: function () {
        if (this.get('max') < this.get('value')) {
            this.set('value', this.get('max'));
        }
    }.observes('suit.baseCards.value'),

    abilityIntegrity: function () {
        if (this.get('cannotHaveAbility')) {
            this.set('ability', '');
        }
    }.observes('value'),

    advantagesIntegrity: function () {
        if (!this.get('hasAbility')) {
            this.set('advantage1', '');
            this.set('advantage2', '');
            this.set('advantage3', '');
        }
    }.observes('ability'),

    max: function () {
        return parseInt(this.get('suit.baseCards.value'));
    }.property('suit.baseCards.value'),

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
