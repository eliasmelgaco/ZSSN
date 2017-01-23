import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        let newPayload = {};
        newPayload[primaryModelClass.modelName] = payload.map((item, index) => {
            item.id = index;
            return item;
        });
        return this._super(store, primaryModelClass, newPayload, id, requestType);
    }
});