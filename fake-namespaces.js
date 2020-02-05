//The idea is to separate things inside a container object
//and avoid collide with another code existent
//this is so normal in frameworks and libraries

var greet = 'hello';
var greet = 'hola';
console.log(greet);
var english = {
    greetings: {
        basic: 'hello'
    }
};

//english.greetings = null;
//english.greetings.greet = 'hello';
// the obove code fails since you are trying to access greetings
// and it is null after english.null.greet -----> error 'greet' of null
