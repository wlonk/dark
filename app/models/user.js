import DS from "ember-data";

export default DS.Model.extend({
    username: DS.attr('string'),
    displayceName: DS.attr('string'),
    sheets: DS.hasMany('sheet')
});
