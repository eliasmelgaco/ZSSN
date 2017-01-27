import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('person');
    },

    actions: {
        searchSurvivor(d) {
            var o = this.store.queryRecord('person', { name: 'Eliaz', include: 'all' }).then(function (data) {
                // do something with `data`
                debugger
                console.log('passei aqui')
            });
        }
    }
});