//arguments: the parameters you pass to a function.
function greet(first, last, languaje) {
    if(!arguments.length){
        console.log('Missing parameters');
        return;
    }
    languaje = languaje || 'spanish';
    console.log(first);
    console.log(last);
    console.log(languaje);
    console.log('--------------');
}
greet();
greet('antonio');
greet('antonio', 'mora');
greet('antonio', 'mora','english');

//variable environment
// outer environment
/*
hoisting ---->
before you access to your code line by line js has already set
memory space variables and functions, js already know them.
 */
/*
execution context has: global object, this, outer environment */