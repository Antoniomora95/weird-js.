//first class functions
//Function is a special type of object
/*Since a function is a special object, you can attach
a primitive, an object or even other function inside
*/
function greet() {
    console.log('hi');
}
greet.languaje = 'english';
console.log(greet, 'sdsd');
//console.log(greet.languaje);
/*Functions statements and functions expressions
EXPRESSION ------> A unit of code that results in a value 
 example if(e===4) if -----> is an statment, e===4 ----> 
 is an expression*/
var a;
greet(3);
function greet(num) {
    console.log('hi statement');
}
var anonymousGreet = function () {
    console.log('hi expression');
};
anonymousGreet();
function log(e){
    e();
}
log(function(){
    console.log('pass a function as parameter');
});