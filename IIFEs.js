//function statement
function greet(name){
    console.log('Hello', name);
}
greet('Antonio');

//using a function expression
var greetFunction = function(name) {
    console.log('Hello', name);
};
greetFunction('Josee');

//using an Inmediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    return 'Hello '+ name;
}('Alberto');
console.log(greeting);

'Im an string';
//Iam not intending to create a function statement,
// so it could be a function expression
/*
1*-First of all we can not use the word function at the
begining since a function requires a name and we do not 
need that.
2*- so the most used option is paranthesis remember
parenthesis inside javasript means a grouping operator*/
var firstname = 'something that came from outside';
(function (name) {
    var greeting = 'Hello';
    console.log(greeting +' '+ name);
}(firstname));  //IIFE