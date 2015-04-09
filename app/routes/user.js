import Ember from "ember";

export default Ember.Route.extend({
    queryParams: {
        page: {
            refreshModel: true
        }
    },
    model: function (params) {
        return this.store.find('user', {username: params.user_id}).then(function (result) {
            // Extract the first result from this PromiseArray:
            if (result.get("length") === 1) {
                return result.content[0];
            }
        });
    }
});
