// The outer environment
// the lexical environment ??
/*
    Lexical environment only means where a function
    or variable was created
 */
function a() {
    var myVar = 3;
    function b() {

        function c () {
            debugger
            console.log(myVar);
        }
        console.log(myVar);
        c();
    }

    b();
    console.log(myVar);
}
a();
var myVar  = 1;
console.log(window);

// WE ARE LEARNING THE SCOPE CHAIN