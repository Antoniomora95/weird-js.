//complemento: https://www.campusmvp.es/recursos/post/que-es-el-hoisting-en-javascript.aspx
var a = 2;
foo();
function foo() {
    console.log(a);
    a = 3;
    // 3  
    var a;
    console.log(a);
    // 3 funciona de igual manera
}
console.log(a);
// Output: 2



function one() {
    // a is only available inside the function
    var a = 1;
    console.log(a);
}z
function two() {
    // a is only available inside the function 
    var a = 2;
    console.log(a);
}
one(); // Output: 1
two(); // Output: 2


function principal() {
    var a = 1;
    function nested() {
        var b = 2;
        // La variable ‘a’ y ‘b’ son accesibles aqui
        console.log(a + b);
    }
    nested();
    // La variable ‘a’ solo es accesible aqui
    console.log(a);
}
principal();




'use strict';
function foo(){
    // The code inside will be in strict mode
    function bar(){
        // This code will be in strict mdoe too
    }
}
// The code outside will be in strict mdoe


function foo(){
    'use strict';
    // The code inside will be in strict mode
    a = 1;
    //Error: ‘var’ missing Reference Error
}
foo();
/*The error is generated since being in strict mode this asks us to declare the variable with the word* 'var'*/



var x = (function foo(){
    var a = 1;
    return a;
})();
x; // Output: 1