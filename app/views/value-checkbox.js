import Ember from "ember";

export default Ember.Checkbox.extend({
    model: null,
    value: null,

    change: function() {
        var value;
        if (this.get('checked')) {
            value = this.get('value');
        } else {
            value = this.get('value') - 1;
        }
        this.get('model').set('value', value);
    }
});
