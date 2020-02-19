
/*look that we already declared a greeting var in greetingfile
but it does not affect our function expression because
it has its own execution context and here is created
a local variable called greeting too */
(function (global, name) {
    var greeting = 'Hello';
    global.greeting = 'initial greeting changed';
    console.log(greeting +' '+ name);
}(window,'John'));

console.log(greeting);