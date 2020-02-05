//Primitive type a type of data that represents a single value
//This is, not an object
/*undefined 
 *-represents a lack of existence, 
 *-leave this only for the javascript engine
 *-you shouldn´t set a variable to this*/
/*null
 *-represents a lack of existence, 
 *-this one is better for you if you want to say that
 something does not exist*/
 /*boolean
  *-true or false only that*/
  /*number
  *-floating point number*/
 /*string
 *-sequence of characters both '' and "" can be used to
 cover a string*/
 /*symbol
 *-used in ES6*/

 //ASYNCHRONOUS means more than one at a time
 /*When asynchronously go out and make a request, what does 
 really happens? */
 /*We have the execution context that we already saw*/
 /*******We also have the event queue******/
 /*this starts when the execution stack is empty */
 function waitThreeSeconds () {
     var ms = 5000 + new Date().getTime();
     while (new Date() < ms) {}
     console.log('finished function');
 }
 function clickHandler () {
     console.log('click event');
}
document.addEventListener('click', clickHandler);
waitThreeSeconds();
console.log('execution finished');