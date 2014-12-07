import DS from "ember-data";

export default DS.Model.extend({
    suit: DS.belongsTo('suit'),
    check1: DS.attr('boolean', {default: false}),
    check2: DS.attr('boolean', {default: false}),

    check2Disabled: function () {
        return !(this.get('check1'));
    }.property('check1')
});
