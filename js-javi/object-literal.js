var modulo = {
    persona: {
        name: 'Javier',
        age: 30
    },
    fullName: function() {
        return this.persona.name + ' tiene, ' + this.persona.age + ' años de edad';
    },
    updatePerson: function(newPerson) {
        if (typeof newPerson === 'object' ) {
            this.persona = newPerson;
        }
    }
}
// Output: Javier tiene, 30 años de edad
console.log(modulo.fullName());
// Override 
modulo.updatePerson({  name: 'Pedro',  age: 20});
// Output: Pedro tiene, 20 años de edad
console.log(modulo.fullName());