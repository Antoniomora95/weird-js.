var person = new Object();
person['firstname'] = "Antonio";
person['lastname'] = "Mora";

var firstNameProperty = "firstname";
//console.log(person);
//console.log(person[firstNameProperty]);

//console.log(person.firstname);
//console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main st";
person.address.city = "Queretaro capital";
person.address.state = "Queretaro";
//console.log(person.address.city);
//console.log(person.address.state);
// OBJECT AND OBJECT LITERALS
var Mora = {
    firstname : 'Antonio',
    lastname:'Mora',
    address : {
        street: 'Hidalgo street',
        city: 'Morelia',
        state: 'Michoacan'
    } 
};
console.log(person);
function greet(person) {
    var addr = person.address2 && person.address2.street || ' default';
    console.log('Hi ' +person.firstname + addr );
}
Mora.address2 = {
    street: '333 second street' 
};
greet(Mora);
greet({
    firstname:'Mario',
    lastname:'Kart'
});

// create an object an object on the flight passing to a function
