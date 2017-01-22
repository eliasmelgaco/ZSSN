import DS from 'ember-data';

export default DS.Model.extend({
    //id: DS.attr(),
    name: DS.attr(),
    age: DS.attr(),
    gender: DS.attr(),
    lonlat: DS.attr(),
    items: DS.attr(),
    infected: DS.attr()
});
