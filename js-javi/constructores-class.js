/*
It has different values depending on where it is used:
+++ In a method, this refers to the owner object.
+++ Alone, this refers to the global object.
+++ In a function, this refers to the global object.
+++ In a function, in strict mode, this is undefined.
+++ In an event, this refers to the element that received the event.
+++ Methods like call(), and apply() can refer this to any object.
 */
function Persona(name, age) {
    this.name = name;
    this.age = age;
}
// prototypes, here more information: https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b
Persona.prototype.fullName = function() {
    return this.name + ' tiene, ' + this.age + ' años de edad';
};
var persona = new Persona('Javier', 30);
var persona1 = new Persona('Antonio', 24);
console.log(persona, persona.fullName());
console.log(persona1, persona1.fullName());
// Get Properties
//console.log(persona.fullName());