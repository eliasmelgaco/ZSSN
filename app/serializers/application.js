import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        let newPayload = {};
        newPayload[primaryModelClass.modelName] = payload.map((item) => {
            item.id = item.location.split('/people/')[1];
            return item;
        });
        return this._super(store, primaryModelClass, newPayload, id, requestType);
    }
});