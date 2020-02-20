var module = {
    person: {
        name: 'Javier',
        age: 30
    },
    fullName: function() {
        return this.person.name + ' is, ' + this.person.age + ' years old';
    },
    updatePerson: function(newPerson) {
        if (typeof newPerson === 'object' ) {
            this.person = newPerson;
        }
    }
}
// Output: Javier is, 30 years old
console.log(module.fullName());
// Override 
module.updatePerson({  name: 'Pedro',  age: 20});
// Output: Pedro is, 20 years old
console.log(module.fullName());