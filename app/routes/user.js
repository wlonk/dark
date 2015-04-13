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
    },
    afterModel: function (model, transition) {
        var controller = this.controllerFor("user");
        var page = transition.queryParams.page || 1;
        this.store.find(
            "sheet", 
            {
                user: model.get("id"), 
                page: page
            }
        ).then(function (sheets) {
            controller.set("sheets", sheets);
        });
    }
});
