/*By value means that if you declare
var a = 3, var b = a, b is going to be 3 but in a different
position in memory
BY reference you creates a new variable that points to the same
space in memory, most of the times to the same object*/
var a = 3;
var b;
b = a;
a = 2;
console.log(a);
console.log(b);

//By reference (all objects, including functions)
var c = {greeting: 'hi'};
var d = c;
d.greeting = 'hellso'; //this is MUTATE, yeah just that
//mutate means change something, in this case an object
console.log(c); 
console.log(d); 
changeGreeting(c);
console.log(c);
console.log(d); 
function changeGreeting(obj){
    obj.greeting = 'hola';
}
/*equals operator sets up a new space in memory space
(new address), you are asignning an objet, not a variable
who existed before*/
c = {greeting: 'something different'};
console.log(c);
console.log(d);