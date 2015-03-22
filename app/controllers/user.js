import Ember from 'ember';

export default Ember.ObjectController.extend({
    content: {},
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
    }.property().volatile()
});
