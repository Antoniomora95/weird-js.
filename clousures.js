/*what happen with variables in memory space when a execution
context goes away?, in normal circumstances js clear it out
with a process called garbage collection, in this case that
does not happen, the nested function still has the access
to the variables declared in its outer environment (outside)
when we worked with scope chain already saw that, when
you put a function inside another the second one must have
access to variables declared in the first one even the global
execution context that is the normal effect, is not it?
so even if the function has gone you have access to them so this 
 phenomenon of closing in all the variables that is supposed
 to have access to, is called ******ClOSURE******
*/

/*The value of a variable closure is what it is at the
moment */

function greet (greeting) {
    return function(name){
        console.log(greeting, ' ',name);
    };
}
var returnedFunction = greet('Hello');
console.log(returnedFunction.prototype['[[Scopes]]']);
returnedFunction('Antonio Mora');