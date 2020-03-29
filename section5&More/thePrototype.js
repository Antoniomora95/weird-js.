//INHERITANCE:
/*One object gets access to properties and methods
of another object*/
var person = {
    firstname: 'Default',
    lastname:'Default',
    getFullName: function(){
        console.log('Hello ', this.firstname, ' ', this.lastname);
    }
};
var tono = {
    firstname:'Antonio',
    lastname:'Mora'
};
//do not do this EVER, for demo purposes only
tono.__proto__ = person;


//Big word alert. Reflection:
/*An object can look at itself. listing and changing its properties
and methods, with that we can use a pattern called extend*/


for (const key in tono) {
    if (tono.hasOwnProperty(key)) {
        console.log(key + ': '+ tono[key]);
    }
}

var jane = {
    address: '11 Main st',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname
    }
};
var jim = {
    getFirstName: function() {
        return firstname;
    }
}
_.extend(tono, jane, jim);
console.log(tono);