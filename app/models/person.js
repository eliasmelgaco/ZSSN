import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    age: DS.attr(),
    gender: DS.attr(),
    lonlat: DS.attr(),
    items: DS.attr()
});
