import Ember from 'ember';
import DS from 'ember-data';

export default Ember.ObjectController.extend({
    queryParams: ['page'],
    page: null,
    sheets: null,

    normalizedPage: function () {
        var page = this.get("page");
        if (isNaN(page) || page < 1) {
            page = 1;
        }
        return page;
    }.property('page'),

    pages: function () {
        var sheets = this.get('sheets');  // This is not resolved yet, for some reason.
        if (!sheets) {
            return;
        }
        var pageSize = 10;  // Would be better to get this from the API than assume.
        var minPage = 1;
        var maxPage = Math.ceil(sheets.meta.count / pageSize);
        var page = this.get('normalizedPage');
        return _.range(minPage, maxPage + 1).map(function (e) {
            return {
                number: e,
                isCurrent: page == e
            };
        });
    }.property('page', 'sheets'),

    currentUser: function () {
        return this.get('model.id') == this.get('session.content.user_id');
    }.property().volatile(),

    actions: {
        update: function () {
            this.get('model').save();
        },

        destroy: function () {
            var conf = confirm('Are you sure?');
            if (!conf) {
                return;
            }
            this.get('model').destroyRecord();
            this.get('session').invalidate();
            this.transitionToRoute('index');
        }
    }
});
