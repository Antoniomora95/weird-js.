/*
It has different values depending on where it is used:
+++ In a method, this refers to the owner object.
+++ Alone, this refers to the global object.
+++ In a function, this refers to the global object.
+++ In a function, in strict mode, this is undefined.
+++ In an event, this refers to the element that received the event.
+++ Methods like call(), and apply() can refer this to any object.
 */
function Persona(name, age, lastName) {
    this.name = name;
    this.age = age;
}
// prototypes, here more information: https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b
Persona.prototype.lastName = 'qwerty';
Persona.prototype.friends = ['jose', 'carlos'];

var persona = new Persona('Javier', 30 );
var persona1 = new Persona('Antonio',25);

persona.lastName = 'semething different';
persona.friends.push = 'as';
console.log(persona.lastName);
console.log(persona1.lastName);
// Get Properties
//console.log(persona.fullName());