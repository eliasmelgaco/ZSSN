import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://zssn-backend-example.herokuapp.com',
    namespace: 'api'
});
