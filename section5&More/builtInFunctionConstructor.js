/*Function constructors create
object remember that */
var date = new Date();
console.log(date);

//Add a function to the prototype

String.prototype.lengthGreaterThan = function (limit) {
    return this.length > limit;
}
console.log('string'.lengthGreaterThan(6));
// in numbers is not possible to call the function directly check--

var a = new Number(3);
Number.prototype.isPositive = function (){
    console.log(this);
    return this > 0;
}
console.log(a.isPositive());

// danger of built in function constructors
var a = 5;
var b = new Number(5);
// this is not the same
console.log(a == b, a === b);
