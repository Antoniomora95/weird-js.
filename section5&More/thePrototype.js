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