import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        register() {
            var items = "";
            function setItems(item){
                if(items !== ""){
                    items += ";" + item;
                }
                else{
                    items = item;
                }
            }
            var form = Ember.$('#form-register')[0];
            
            var gender = "M";
            if (Ember.$('#genderF')[0].checked) {
                gender = "F";
            }
            
            if (form.elements['water'].value !== "" && form.elements['water'].value !== 0){
                setItems("Water:" + form.elements['water'].value);
            }
            if (form.elements['food'].value !== "" && form.elements['food'].value !== 0){
                setItems("Food:" + form.elements['food'].value);
            }
            if (form.elements['medication'].value !== "" && form.elements['medication'].value !== 0){
                setItems("Medication:" + form.elements['medication'].value);
            }
            if (form.elements['ammunition'].value !== "" && form.elements['ammunition'].value !== 0){
                setItems("Ammunition:" + form.elements['ammunition'].value);
            }
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
