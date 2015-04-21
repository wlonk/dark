import Ember from 'ember';

export default Ember.ArrayController.extend({
    queryParams: ['page'],
    page: null,

    normalizedPage: function () {
        var page = this.get("page");
        if (isNaN(page) || page < 1) {
            page = 1;
        }
        return page;
    }.property('page'),

    pages: function () {
        var page = this.get("normalizedPage");
        var pageSize = 10;  // Would be better to get this from the API than assume.
        var minPage = 1;
        var maxPage = Math.ceil(this.get("model.meta.count") / pageSize);
        return _.range(minPage, maxPage + 1).map(function (e) {
            return {
                number: e,
                isCurrent: parseInt(page) === e
            };
        });
    }.property('model', 'normalizedPage')
});
