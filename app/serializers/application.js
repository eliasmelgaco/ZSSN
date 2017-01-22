import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        //debugger
        /*payload.data.attributes.amount = payload.data.attributes.cost.amount;
        payload.data.attributes.currency = payload.data.attributes.cost.currency;

        delete payload.data.attributes.cost;

        return this._super(...arguments);*/
        //debugger
        /*payload = {
            people: payload.map((item, index) => {
                var person = {};
                //person.id = index;
                
                person.name = item.name;
                person.age = item.age;
                person.gender = item.gender;
                person.lonlat = item.lonlat;
                return person;
            })
    };*/
    console.log('passei aqui');
        let newPayload = {};
        newPayload[primaryModelClass.modelName] = payload.map((item, index) => {
            item.id = index;
            item.infected = item['infected?'];
            return item;
        });
        return this._super(store, primaryModelClass, newPayload, id, requestType);
    }
});