import Ember from "ember";

export default Ember.Route.extend({
    model: function () {
        var sheet = this.store.createRecord('sheet', {name: "Thief"});

        var spades = this.store.createRecord('suit', {sheet: sheet, name: "Spades"});
        this.store.createRecord('aceCard', {suit: spades});
        this.store.createRecord('faceCard', {name: "King", suit: spades});
        this.store.createRecord('faceCard', {name: "Queen", suit: spades});
        this.store.createRecord('faceCard', {name: "Jack", suit: spades});
        this.store.createRecord('baseCard', {suit: spades});

        var hearts = this.store.createRecord('suit', {sheet: sheet, name: "Hearts"});
        this.store.createRecord('aceCard', {suit: hearts});
        this.store.createRecord('faceCard', {name: "King", suit: hearts});
        this.store.createRecord('faceCard', {name: "Queen", suit: hearts});
        this.store.createRecord('faceCard', {name: "Jack", suit: hearts});
        this.store.createRecord('baseCard', {suit: hearts});

        var clubs = this.store.createRecord('suit', {sheet: sheet, name: "Clubs"});
        this.store.createRecord('aceCard', {suit: clubs});
        this.store.createRecord('faceCard', {name: "King", suit: clubs});
        this.store.createRecord('faceCard', {name: "Queen", suit: clubs});
        this.store.createRecord('faceCard', {name: "Jack", suit: clubs});
        this.store.createRecord('baseCard', {suit: clubs});

        var diamonds = this.store.createRecord('suit', {sheet: sheet, name: "Diamonds"});
        this.store.createRecord('aceCard', {suit: diamonds});
        this.store.createRecord('faceCard', {name: "King", suit: diamonds});
        this.store.createRecord('faceCard', {name: "Queen", suit: diamonds});
        this.store.createRecord('faceCard', {name: "Jack", suit: diamonds});
        this.store.createRecord('baseCard', {suit: diamonds});

        var knowledges = this.store.createRecord('skillGroup', {name: 'Knowledges', sheet: sheet});
        this.store.createRecord('skill', {name: "Arcana", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Art", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Craft", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Culture", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Enginery", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Finance", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "History", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Medicine", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Politics", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Ranger", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Religion", skillGroup: knowledges});
        this.store.createRecord('skill', {name: "Sciences", skillGroup: knowledges});

        var social = this.store.createRecord('skillGroup', {name: 'Social', sheet: sheet});
        this.store.createRecord('skill', {name: "Charm", skillGroup: social});
        this.store.createRecord('skill', {name: "Fellowship", skillGroup: social});
        this.store.createRecord('skill', {name: "Intimidate", skillGroup: social});
        this.store.createRecord('skill', {name: "Plead", skillGroup: social});
        this.store.createRecord('skill', {name: "Reassure", skillGroup: social});
        this.store.createRecord('skill', {name: "Respect", skillGroup: social});
        
        var physical = this.store.createRecord('skillGroup', {name: 'Physical', sheet: sheet});
        this.store.createRecord('skill', {name: "Combat", skillGroup: physical});
        this.store.createRecord('skill', {name: "Traverse", skillGroup: physical});
        return sheet;
    }
});
