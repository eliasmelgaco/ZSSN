import Ember from 'ember';

export default Ember.Component.extend({
    peopleFiltered: Ember.computed('query', function () {
        return this.get('model').filter((person) => {
            if (this.get('query'))
                return person.get('name').toLowerCase().indexOf(this.get('query').toLowerCase()) > -1;
        })
    })
});
