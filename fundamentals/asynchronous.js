 /*symbol
 *-used in ES6*/
 //ASYNCHRONOUS means more than one at a time
 /*When asynchronously go out and make a request, what does 
 really happens? */
 /*We have the execution context that we already saw*/
 /*******We also have the event queue******/
 /*this starts when the execution stack is empty */
 function waitThreeSeconds () {
     var ms = 3000 + new Date().getTime();
     while (new Date() < ms) {}
     console.log('finished function');
 } 
 function clickHandler () {
     console.log('click event');
}
document.addEventListener('click', clickHandler);
waitThreeSeconds();
console.log('execution finishe.');