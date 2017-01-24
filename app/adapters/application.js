import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://zssn-backend-example.herokuapp.com',
    namespace: 'api',

    createRecord(store, type, snapshot) {
        var data = this.serialize(snapshot, { includeId: true });
        var me = this;
        return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.ajax({
                type: 'POST',
                url: me.host + '/' + me.namespace + '/' + Ember.String.pluralize(type.modelName),
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),
            }).then(function (data) {
                console.log('cadastrado com sucesso');
            }, function (jqXHR) {
                console.log('erro no cadastro');
            });
        });
    }
});
