import Ember from 'ember';
import KeymasterMixin from "../mixins/keymaster";

export default Ember.ObjectController.extend(
    KeymasterMixin,
    {
        cannotEditSheet: function () {
            return (
                parseInt(this.get('session.content.user_id')) !== parseInt(this.get('model.user.id'))
            );
        }.property('sessionUser.content.user_id', 'model.user.id'),

        showSaveButton: function () {
            return !this.get('cannotEditSheet');
        }.property('cannotEditSheet'),

        hideModalOverlay: function () {
            Ember.$('.modal-backdrop').height(0);
        },

        showModalOverlay: function () {
            var doc_height = Ember.$(document).height();
            Ember.$('.modal-backdrop').height(doc_height);
        },

        shortcuts: {
            'control+s, command+s': 'saveSheet'
        },

        actions: {
            saveSheet: function () {
                this.showModalOverlay();
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
                this.get('model').save().then(
                    this.hideModalOverlay,  // @TODO: display success message
                    this.hideModalOverlay  // @TODO: display error message
                );
            },

            deleteSheet: function () {
                this.get('model').destroyRecord().then(function () {
                    this.transitionTo('index');  // @TODO: display success message
                }.bind(this));
            }
        }
    }
);
