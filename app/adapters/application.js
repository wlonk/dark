import DRFAdapter from './drf';

export default DRFAdapter.extend({
    headers: function () {
        var token = this.container.lookup('simple-auth-session:main').content.token;
        if (token) {
            return {
                "Authorization": "Token " + token
            };
        } else {
            return {};
        }
    }.property().volatile()  // This means "just recalculate it each time you access it."
});
