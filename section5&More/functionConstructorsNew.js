function Person(firstname, lastname) {
    this.firstname = firstname || 'John'
    this.lastname = lastname || 'Joe';
    this.print = function (){
        console.log(this, 'this');
    }
}
/*
    .- new ---> creates an empty object.
    .-Person() ---> you are invoking the function.
    .- this ---> point to the empty object
    .- this.firstname = 'value'--> assign the key and value
    to the object.
    .-the object is returned and assigned to john
    .- so..... function constructor is a normal function
    that is used to construct objects.
*/
Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}
debugger
var john = new Person('John', 'Doe');
console.log(john);
var jane = new Person('Jane', 'Briggs s');
console.log(jane);  

Person.prototype.getFormalName = function () {
    return this.lastname + ' ' + this.firstname;
}

/*Every function has a prototype and starts as an empty
object
the prototype on a function is not the prototype of the
function --> it is the prototype of any objet created 
with it
when you call the new keyboard, you create an empty object
and it sets the prototype of that empty object to the 
prototype property of the function that you then call
so any object you create using this function as a function
constructor (new) means that the object therefore created
not only has properties and methods atached inside the function
but it has a prototype*/