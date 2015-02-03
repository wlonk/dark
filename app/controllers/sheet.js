import Ember from 'ember';
import KeymasterMixin from "../mixins/keymaster";

export default Ember.ObjectController.extend(
    KeymasterMixin,
    {
        shortcuts: {
            'control+s, command+s': 'saveSheet'
        },

        actions: {
            saveSheet: function () {
                var model = this.get('model');
                model.get('skillGroups').forEach(function (skillGroup) {
                    skillGroup.get('skills').forEach(function (skill) {
                        skill.save();  // Does this make a network call if not isDirty?
                    });
                });
                model.get('suits').forEach(function (suit) {
                    suit.get('faceCards').forEach(function (faceCard) {
                        faceCard.save();
                    });
                    suit.get('ace.content').save();
                    suit.get('baseCard.content').save();
                });
                this.get('model').save();
            }
        }
    }
);
