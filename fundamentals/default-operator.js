// operators are functions that return values
function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}
greet();
// or has a greater level than equal so
// name = undefined || 'your name here' ----> 'your name here'
// name = 'your name here'
greet(0);
greet('Tony');