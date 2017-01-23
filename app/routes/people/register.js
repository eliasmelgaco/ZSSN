import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        register() {
            debugger
            var form = Ember.$('#form-register')[0];
            var gender = "M";
            if (Ember.$('#genderF')[0].checked) {
                gender = "F";
            }
            var items = "";
            if (form.elements['water'].value != "" && form.elements['water'].value != 0)
                items += "Water:" + form.elements['water'].value;
            if (form.elements['food'].value != "" && form.elements['food'].value != 0)
                items += "Food:" + form.elements['food'].value;
            if (form.elements['medication'].value != "" && form.elements['medication'].value != 0)
                items += "Medication:" + form.elements['medication'].value;
            if (form.elements['ammunition'].value != "" && form.elements['ammunition'].value != 0)
                items += "Ammunition:" + form.elements['ammunition'].value;
            var person = this.store.createRecord('person', {
                name: form.elements['name'].value,
                age: form.elements['age'].value,
                gender: gender,
                lonlat: "POINT(" + form.elements['lonlat'].value + ")",
                items: items
            });
            person.save();
        }
    }
});
