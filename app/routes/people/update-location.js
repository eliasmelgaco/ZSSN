import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('person');
    },

    actions: {
        select() {
            console.log('passei');
        }
    }
});