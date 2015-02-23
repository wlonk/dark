import Ember from "ember";

export default Ember.Route.extend({
    queryParams: {
        page: {
            refreshModel: true
        }
    },
    model: function (params) {
        var page;
        if (params.page) {
            if (isNaN(params.page) || params.page < 1) {
                page = 1;
            } else {
                page = params.page;
            }
        }
        return this.store.find('user', {
            page: page
        });
    }
});
