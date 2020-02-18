/***************Call Stack**************
The call stack as its name implies is a stack with a LIFO
(Last in, First out) structure, which is used to store all 
the execution context created during the code execution. */

/*****************The Event Loop**********
The job of the Event loop is to look into the call stack
 and determine if the call stack is empty or not. If the 
 call stack is empty, it looks into the message queue to 
 see if there’s any pending callback waiting to be executed.
In this case, the message queue contains one callback, and 
the call stack is empty at this point. So the Event loop 
pushes the callback to the top of the stack.*/

/****************Queue**********************
A JavaScript runtime uses a message queue, which is a 
list of messages to be processed. Each message has an 
associated function which gets called in order to handle 
the message.
At some point during the event loop, the runtime starts 
handling the messages on the queue, starting with the 
oldest one. To do so, the message is removed from the 
queue and its corresponding function is called with the 
message as an input parameter. As always, calling a function 
creates a new stack frame for that function's use. */

console.log('Script start');
setTimeout(() => {
  console.log('setTimeout 1');
}, 0);
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 0);
  }).then(res => console.log(res))
    .catch(err => console.log(err));
console.log('Script End');