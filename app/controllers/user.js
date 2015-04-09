import Ember from 'ember';

export default Ember.ObjectController.extend({
    queryParams: ['page'],
    page: null,
    sheets: function () {
        var page = this.get('page');
        if (page) {
            if (isNaN(page) || page < 1) {
                page = 1;
            }
        }
        return this.store.find('sheet', {
            user: this.get('model.id'),
            page: page
        });
    }.property('model', 'page'),

    currentUser: function () {
        return this.get("model.id") == this.get("session.content.user_id");
    }.property().volatile(),

    actions: {
        update: function () {
            this.get("model").save();
        },

        destroy: function () {
            var conf = confirm("Are you sure?");
            if (!conf) {
                return;
            }
            this.get("model").destroyRecord();
            this.get('session').invalidate();
            this.transitionToRoute('index');
        }
    }
});
